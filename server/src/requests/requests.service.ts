import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Request, RequestStatus } from './entities/requests.entity';
import { Bill, BillStatus } from 'src/bills/entities/bills.entity';
import { User } from 'src/users/entities/users.entity';
import { CreateRequestDto } from './dtos/create-request.dto';

@Injectable()
export class RequestsService {
  constructor(
    @InjectRepository(Request)
    private readonly requestRepo: Repository<Request>,
    @InjectRepository(Bill)
    private readonly billRepo: Repository<Bill>
  ) {}

  // ADMIN: todas; CLIENT: solo las suyas
  async findAll(user: User): Promise<Request[]> {
    if (user.role === 'ADMIN') {
      return this.requestRepo.find({
        relations: ['user', 'bills', 'bills.debtor'],
        order: { createdAt: 'DESC' },
      });
    }
    return this.requestRepo.find({
      where: { user: { id: user.id } },
      relations: ['user', 'bills', 'bills.debtor'],
      order: { createdAt: 'DESC' },
    });
  }

  async findOne(id: number, user: User): Promise<Request> {
    const req = await this.requestRepo.findOne({
      where: { id },
      relations: ['user', 'bills', 'bills.debtor'],
    });
    if (!req) {
      throw new NotFoundException('Solicitud no encontrada');
    }
    if (user.role === 'CLIENT' && req.user.id !== user.id) {
      throw new ForbiddenException('No tiene acceso a esta solicitud');
    }
    return req;
  }

  // CLIENT crea una solicitud con facturas propias en estado PENDING
  async create(dto: CreateRequestDto, user: User): Promise<Request> {
    const bills = await this.billRepo.find({
      where: { id: In(dto.billIds) },
      relations: ['user'],
    });

    if (bills.length !== dto.billIds.length) {
      throw new NotFoundException('Alguna factura no existe');
    }

    // Validaciones: ownership + estado
    for (const b of bills) {
      if (b.user.id !== user.id) {
        throw new ForbiddenException(`La factura ${b.id} no pertenece al usuario`);
      }
      if (b.status !== BillStatus.PENDING) {
        throw new ForbiddenException(`La factura ${b.id} no está en estado PENDING`);
      }
    }

    // Transacción: crear request + marcar facturas como IN_REQUEST
    return await this.requestRepo.manager.transaction(async (mgr) => {
      const req = mgr.create(Request, {
        user: { id: user.id },
        status: RequestStatus.REVIEW,
        bills,
      });
      const saved = await mgr.save(req);

      // actualizar estado de facturas
      for (const b of bills) {
        await mgr.update(Bill, b.id, { status: BillStatus.IN_REQUEST });
      }
      return saved;
    });
  }

  // ADMIN aprueba: solicitud -> APPROVED, facturas -> APPROVED
  async approve(id: number, admin: User): Promise<Request> {
    if (admin.role !== 'ADMIN') {
      throw new ForbiddenException('Solo ADMIN puede aprobar solicitudes');
    }

    const req = await this.requestRepo.findOne({
      where: { id },
      relations: ['bills'],
    });
    if (!req) throw new NotFoundException('Solicitud no encontrada');
    if (req.status !== RequestStatus.REVIEW) {
      throw new ForbiddenException('La solicitud no está en revisión');
    }

    return await this.requestRepo.manager.transaction(async (mgr) => {
      // actualizar facturas a APPROVED
      for (const b of req.bills) {
        await mgr.update(Bill, b.id, { status: BillStatus.APPROVED });
      }
      // actualizar solicitud
      await mgr.update(Request, req.id, { status: RequestStatus.APPROVED });
      return this.requestRepo.findOne({
        where: { id: req.id },
        relations: ['user', 'bills', 'bills.debtor'],
      });
    });
  }

  // ADMIN rechaza/cancela: solicitud -> REJECTED, facturas -> PENDING
  async reject(id: number, admin: User, reason?: string): Promise<Request> {
    if (admin.role !== 'ADMIN') {
      throw new ForbiddenException('Solo ADMIN puede rechazar solicitudes');
    }

    const req = await this.requestRepo.findOne({
      where: { id },
      relations: ['bills'],
    });
    if (!req) throw new NotFoundException('Solicitud no encontrada');
    if (req.status !== RequestStatus.REVIEW) {
      throw new ForbiddenException('La solicitud no está en revisión');
    }

    return await this.requestRepo.manager.transaction(async (mgr) => {
      // devolver facturas a PENDING
      for (const b of req.bills) {
        await mgr.update(Bill, b.id, { status: BillStatus.PENDING });
      }
      // actualizar solicitud
      await mgr.update(Request, req.id, {
        status: RequestStatus.REJECTED,
        rejectionReason: reason ?? null,
      });
      return this.requestRepo.findOne({
        where: { id: req.id },
        relations: ['user', 'bills', 'bills.debtor'],
      });
    });
  }

  // CLIENT puede eliminar su solicitud si aún está en REVIEW (rollback de facturas a PENDING)
  async remove(id: number, user: User): Promise<void> {
    const req = await this.requestRepo.findOne({
      where: { id },
      relations: ['user', 'bills'],
    });
    if (!req) throw new NotFoundException('Solicitud no encontrada');

    if (user.role === 'CLIENT' && req.user.id !== user.id) {
      throw new ForbiddenException('No tiene acceso a esta solicitud');
    }
    if (req.status !== RequestStatus.REVIEW) {
      throw new ForbiddenException('Solo puede eliminar solicitudes en estado REVIEW');
    }

    await this.requestRepo.manager.transaction(async (mgr) => {
      for (const b of req.bills) {
        await mgr.update(Bill, b.id, { status: BillStatus.PENDING });
      }
      await mgr.delete(Request, req.id);
    });
  }
}
