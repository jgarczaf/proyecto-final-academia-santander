import {
  ForbiddenException,
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Request, RequestStatus } from './entities/requests.entity'; // ← ajusta si tu archivo se llama distinto
import { Bill, BillStatus } from 'src/bills/entities/bills.entity'; // ← ajusta path si es distinto
import { User } from 'src/users/entities/users.entity'; // ← ajusta path si es distinto
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

  /**
   * CLIENT crea una solicitud con facturas propias en estado PENDING
   * - billIds: no vacío, únicos
   * - ownership: todas del usuario
   * - estado: todas PENDING
   * - transacción: create request + bills -> IN_REQUEST
   */
  async create(dto: CreateRequestDto, user: User): Promise<Request> {
    if (!dto.billIds?.length) {
      throw new BadRequestException('Debe indicar al menos una factura');
    }

    // Asegurar IDs únicos
    const uniqueIds = Array.from(new Set(dto.billIds.map(Number)));
    if (uniqueIds.length !== dto.billIds.length) {
      throw new BadRequestException('Hay IDs de factura duplicados en la solicitud');
    }

    // Cargar facturas primero (sin lock) para validar existencia y ownership básica
    const bills = await this.billRepo.find({
      where: { id: In(uniqueIds) },
      relations: ['user'],
    });

    if (bills.length !== uniqueIds.length) {
      throw new NotFoundException('Alguna factura no existe');
    }
    for (const b of bills) {
      if (b.user.id !== user.id) {
        throw new ForbiddenException(`La factura ${b.id} no pertenece al usuario`);
      }
      if (b.status !== BillStatus.PENDING) {
        throw new ForbiddenException(`La factura ${b.id} no está en estado PENDING`);
      }
    }

    // Transacción robusta: volver a cargar con lock para evitar carreras
    return await this.requestRepo.manager.transaction(async (mgr) => {
      // Releer facturas con bloqueo pesimista
      const billsForUpdate = await mgr
        .createQueryBuilder(Bill, 'b')
        .setLock('pessimistic_write')
        .where('b.id IN (:...ids)', { ids: uniqueIds })
        .getMany();

      if (billsForUpdate.length !== uniqueIds.length) {
        throw new NotFoundException('Alguna factura dejó de existir');
      }
      // Validar que siguen PENDING
      for (const b of billsForUpdate) {
        if (b.user.id !== user.id) {
          throw new ForbiddenException(`La factura ${b.id} no pertenece al usuario`);
        }
        if (b.status !== BillStatus.PENDING) {
          throw new ForbiddenException(`La factura ${b.id} ya no está en PENDING`);
        }
      }

      // Crear solicitud
      const req = mgr.create(Request, {
        user: { id: user.id },
        status: RequestStatus.REVIEW,
        bills: billsForUpdate,
      });
      const saved = await mgr.save(req);

      // Actualizar estado de facturas -> IN_REQUEST
      // (update masivo en bucle; si prefieres, puedes usar queryBuilder update IN (...))
      for (const b of billsForUpdate) {
        await mgr.update(Bill, b.id, { status: BillStatus.IN_REQUEST });
      }

      // Devolver con relaciones
      return mgr.getRepository(Request).findOne({
        where: { id: saved.id },
        relations: ['user', 'bills', 'bills.debtor'],
      }) as Promise<Request>;
    });
  }

  /**
   * ADMIN aprueba: solicitud -> APPROVED, facturas -> APPROVED
   */
  async approve(id: number, admin: User): Promise<Request> {
    if (admin.role !== 'ADMIN') {
      throw new ForbiddenException('Solo ADMIN puede aprobar solicitudes');
    }

    // Cargar solicitud + bills (sin lock)
    const req = await this.requestRepo.findOne({
      where: { id },
      relations: ['user', 'bills'],
    });
    if (!req) throw new NotFoundException('Solicitud no encontrada');
    if (req.status !== RequestStatus.REVIEW) {
      throw new ForbiddenException('La solicitud no está en revisión');
    }

    return await this.requestRepo.manager.transaction(async (mgr) => {
      // Bloquear solicitud para evitar dobles aprobaciones
      const lockedReq = await mgr
        .createQueryBuilder(Request, 'r')
        .setLock('pessimistic_write')
        .where('r.id = :id', { id: req.id })
        .getOne();

      if (!lockedReq) throw new NotFoundException('Solicitud no encontrada durante la aprobación');
      if (lockedReq.status !== RequestStatus.REVIEW) {
        throw new ForbiddenException('La solicitud ya no está en revisión');
      }

      // Bloquear también las facturas involucradas
      const billIds = req.bills.map((b) => b.id);
      const lockedBills = await mgr
        .createQueryBuilder(Bill, 'b')
        .setLock('pessimistic_write')
        .where('b.id IN (:...ids)', { ids: billIds })
        .getMany();

      if (lockedBills.length !== billIds.length) {
        throw new NotFoundException('Alguna factura de la solicitud no existe');
      }

      // Actualizar facturas -> APPROVED
      for (const b of lockedBills) {
        await mgr.update(Bill, b.id, { status: BillStatus.APPROVED });
      }

      // Actualizar solicitud -> APPROVED
      await mgr.update(Request, lockedReq.id, { status: RequestStatus.APPROVED });

      // Devolver con relaciones
      return mgr.getRepository(Request).findOne({
        where: { id: lockedReq.id },
        relations: ['user', 'bills', 'bills.debtor'],
      }) as Promise<Request>;
    });
  }

  /**
   * ADMIN rechaza/cancela: solicitud -> REJECTED, facturas -> PENDING
   */
  async reject(id: number, admin: User, reason?: string): Promise<Request> {
    if (admin.role !== 'ADMIN') {
      throw new ForbiddenException('Solo ADMIN puede rechazar solicitudes');
    }

    const req = await this.requestRepo.findOne({
      where: { id },
      relations: ['user', 'bills'],
    });
    if (!req) throw new NotFoundException('Solicitud no encontrada');
    if (req.status !== RequestStatus.REVIEW) {
      throw new ForbiddenException('La solicitud no está en revisión');
    }

    return await this.requestRepo.manager.transaction(async (mgr) => {
      const lockedReq = await mgr
        .createQueryBuilder(Request, 'r')
        .setLock('pessimistic_write')
        .where('r.id = :id', { id: req.id })
        .getOne();

      if (!lockedReq) throw new NotFoundException('Solicitud no encontrada durante el rechazo');
      if (lockedReq.status !== RequestStatus.REVIEW) {
        throw new ForbiddenException('La solicitud ya no está en revisión');
      }

      const billIds = req.bills.map((b) => b.id);
      const lockedBills = await mgr
        .createQueryBuilder(Bill, 'b')
        .setLock('pessimistic_write')
        .where('b.id IN (:...ids)', { ids: billIds })
        .getMany();

      if (lockedBills.length !== billIds.length) {
        throw new NotFoundException('Alguna factura de la solicitud no existe');
      }

      // Devolver facturas a PENDING
      for (const b of lockedBills) {
        await mgr.update(Bill, b.id, { status: BillStatus.PENDING });
      }

      // Actualizar solicitud -> REJECTED (con motivo)
      await mgr.update(Request, lockedReq.id, {
        status: RequestStatus.REJECTED,
        rejectionReason: reason ?? null,
      });

      return mgr.getRepository(Request).findOne({
        where: { id: lockedReq.id },
        relations: ['user', 'bills', 'bills.debtor'],
      }) as Promise<Request>;
    });
  }

  /**
   * CLIENT puede eliminar su solicitud si está en REVIEW
   * (rollback de facturas -> PENDING)
   */
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
      // Bloquear las facturas y volver a PENDING
      const billIds = req.bills.map((b) => b.id);
      if (billIds.length) {
        const lockedBills = await mgr
          .createQueryBuilder(Bill, 'b')
          .setLock('pessimistic_write')
          .where('b.id IN (:...ids)', { ids: billIds })
          .getMany();

        for (const b of lockedBills) {
          await mgr.update(Bill, b.id, { status: BillStatus.PENDING });
        }
      }

      // Eliminar la solicitud
      await mgr.delete(Request, req.id);
    });
  }
}
