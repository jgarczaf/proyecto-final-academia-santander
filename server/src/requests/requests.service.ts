import {
  ForbiddenException,
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Request, RequestStatus } from './entities/requests.entity'; // ajusta path si difiere
import { Bill, BillStatus } from 'src/bills/entities/bills.entity'; // ajusta path si difiere
import { User } from 'src/users/entities/users.entity'; // ajusta path si difiere
import { CreateRequestDto } from './dtos/create-request.dto';
import { NotificationsGateway } from 'src/realtime/notifications.gateway';

@Injectable()
export class RequestsService {
  constructor(
    @InjectRepository(Request)
    private readonly requestRepo: Repository<Request>,
    @InjectRepository(Bill)
    private readonly billRepo: Repository<Bill>,
    private readonly notifier: NotificationsGateway
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
    if (!req) throw new NotFoundException('Solicitud no encontrada');
    if (user.role === 'CLIENT' && req.user.id !== user.id) {
      throw new ForbiddenException('No tiene acceso a esta solicitud');
    }
    return req;
  }

  /**
   * CLIENT crea una solicitud con facturas propias en estado PENDING
   */

  async create(dto: CreateRequestDto, user: User): Promise<Request> {
    if (!dto.billIds?.length) throw new BadRequestException('Debe indicar al menos una factura');
    const uniqueIds = Array.from(new Set(dto.billIds.map(Number)));
    if (uniqueIds.length !== dto.billIds.length)
      throw new BadRequestException('Hay IDs de factura duplicados en la solicitud');

    const bills = await this.billRepo.find({ where: { id: In(uniqueIds) }, relations: ['user'] });
    if (bills.length !== uniqueIds.length) throw new NotFoundException('Alguna factura no existe');
    for (const b of bills) {
      if (b.user.id !== user.id)
        throw new ForbiddenException(`La factura ${b.id} no pertenece al usuario`);
      if (b.status !== BillStatus.PENDING)
        throw new ForbiddenException(`La factura ${b.id} no está en estado PENDING`);
    }

    const saved = await this.requestRepo.manager.transaction(async (mgr) => {
      const billsForUpdate = await mgr
        .createQueryBuilder(Bill, 'b')
        .setLock('pessimistic_write')
        .where('b.id IN (:...ids)', { ids: uniqueIds })
        .andWhere('b.userId = :userId', { userId: user.id })
        .andWhere('b.status = :status', { status: BillStatus.PENDING })
        .getMany();

      if (billsForUpdate.length !== uniqueIds.length) {
        throw new ForbiddenException('Alguna factura ya no cumple los requisitos');
      }

      const req = mgr.create(Request, {
        user: { id: user.id },
        status: RequestStatus.REVIEW,
        bills: billsForUpdate,
      });
      const created = await mgr.save(req);

      for (const b of billsForUpdate) {
        await mgr.update(Bill, b.id, { status: BillStatus.IN_REQUEST });
      }

      return mgr.getRepository(Request).findOne({
        where: { id: created.id },
        relations: ['user', 'bills', 'bills.debtor'],
      }) as Promise<Request>;
    });

    // 🔔 Notificar al dueño
    this.notifier.emitToUser(user.id, 'request.updated', {
      requestId: saved.id,
      status: saved.status,
      billIds: saved.bills.map((b) => b.id),
    });

    // 🔔 Notificar a TODOS los ADMIN: hay nueva solicitud en revisión
    this.notifier.emitToRole('ADMIN', 'request.created', {
      requestId: saved.id,
      clientId: user.id,
      bills: saved.bills.map((b) => ({
        id: b.id,
        amount: b.amount,
        invoiceNumber: b.invoiceNumber,
      })),
      createdAt: saved.createdAt,
      status: saved.status,
    });

    return saved;
  }

  /**
   * ADMIN aprueba: solicitud -> APPROVED, facturas -> APPROVED
   */
  async approve(id: number, admin: User): Promise<Request> {
    if (admin.role !== 'ADMIN') {
      throw new ForbiddenException('Solo ADMIN puede aprobar solicitudes');
    }

    const req = await this.requestRepo.findOne({
      where: { id },
      relations: ['user', 'bills'],
    });
    if (!req) throw new NotFoundException('Solicitud no encontrada');
    if (req.status !== RequestStatus.REVIEW) {
      throw new ForbiddenException('La solicitud no está en revisión');
    }

    const updated = await this.requestRepo.manager.transaction(async (mgr) => {
      // Bloquear solicitud
      const lockedReq = await mgr
        .createQueryBuilder(Request, 'r')
        .setLock('pessimistic_write')
        .where('r.id = :id', { id: req.id })
        .getOne();

      if (!lockedReq) throw new NotFoundException('Solicitud no encontrada durante la aprobación');
      if (lockedReq.status !== RequestStatus.REVIEW) {
        throw new ForbiddenException('La solicitud ya no está en revisión');
      }

      const billIds = req.bills.map((b) => b.id);

      // Bloquear facturas SIN joins
      const lockedBills = await mgr
        .createQueryBuilder(Bill, 'b')
        .setLock('pessimistic_write')
        .where('b.id IN (:...ids)', { ids: billIds })
        .getMany();

      if (lockedBills.length !== billIds.length) {
        throw new NotFoundException('Alguna factura de la solicitud no existe');
      }

      // Facturas -> APPROVED
      for (const b of lockedBills) {
        await mgr.update(Bill, b.id, { status: BillStatus.APPROVED });
      }

      // Solicitud -> APPROVED
      await mgr.update(Request, lockedReq.id, { status: RequestStatus.APPROVED });

      return mgr.getRepository(Request).findOne({
        where: { id: lockedReq.id },
        relations: ['user', 'bills', 'bills.debtor'],
      }) as Promise<Request>;
    });

    // Notificar al dueño
    this.notifier.emitToUser(updated.user.id, 'request.updated', {
      requestId: updated.id,
      status: updated.status,
      billIds: updated.bills.map((b) => b.id),
    });

    return updated;
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

    const updated = await this.requestRepo.manager.transaction(async (mgr) => {
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

      // Bloqueamos las facturas sin joins
      const lockedBills = await mgr
        .createQueryBuilder(Bill, 'b')
        .setLock('pessimistic_write')
        .where('b.id IN (:...ids)', { ids: billIds })
        .getMany();

      if (lockedBills.length !== billIds.length) {
        throw new NotFoundException('Alguna factura de la solicitud no existe');
      }

      for (const b of lockedBills) {
        await mgr.update(Bill, b.id, { status: BillStatus.REJECTED });
      }

      // La request pasa a REJECTED con motivo opcional
      await mgr.update(Request, lockedReq.id, {
        status: RequestStatus.REJECTED,
        rejectionReason: reason ?? null,
      });

      return mgr.getRepository(Request).findOne({
        where: { id: lockedReq.id },
        relations: ['user', 'bills', 'bills.debtor'],
      }) as Promise<Request>;
    });

    // Notificamos al dueño (ya estaba)
    this.notifier.emitToUser(updated.user.id, 'request.updated', {
      requestId: updated.id,
      status: updated.status,
      reason: updated.rejectionReason ?? null,
      billIds: updated.bills.map((b) => b.id),
    });

    return updated;
  }

  /**
   * CLIENT elimina su solicitud en REVIEW (rollback a PENDING)
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

      await mgr.delete(Request, req.id);
    });

    this.notifier.emitToUser(req.user.id, 'request.updated', {
      requestId: req.id,
      status: 'DELETED',
      billIds: req.bills.map((b) => b.id),
    });
  }
}
