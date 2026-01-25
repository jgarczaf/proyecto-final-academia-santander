import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Bill, BillStatus } from './entities/bills.entity';
import { User } from 'src/users/entities/users.entity';
import { Debtor } from 'src/debtors/entities/debtors.entity';
import { CreateBillDto } from './dtos/create-bill.dto';
import { UpdateBillDto } from './dtos/update-bill.dto';
import { PaginatedResult } from 'src/common/interfaces/pagination.interface';

@Injectable()
export class BillsService {
  constructor(
    @InjectRepository(Bill)
    private readonly billRepo: Repository<Bill>,

    @InjectRepository(Debtor)
    private readonly debtorRepo: Repository<Debtor>
  ) {}

  // ───────────────────────────────────────────────────────────
  // LISTADO (ADMIN ve todos, CLIENT solo los suyos)
  // ───────────────────────────────────────────────────────────
  async findAll(user: User): Promise<Bill[]> {
    if (user.role === 'ADMIN') {
      return this.billRepo.find({ relations: ['debtor', 'user'] });
    }

    return this.billRepo.find({
      where: { user: { id: user.id } },
      relations: ['debtor', 'user'],
    });
  }

  async findAllPaginated(user: User, query: any): Promise<PaginatedResult<Bill>> {
    const page = Math.max(1, Number(query.page) || 1);
    const limit = Math.min(100, Number(query.limit) || 10);
    const skip = (page - 1) * limit;

    const qb = this.billRepo
      .createQueryBuilder('bill')
      .leftJoinAndSelect('bill.debtor', 'debtor')
      .leftJoinAndSelect('bill.user', 'user');

    if (user.role === 'CLIENT') {
      qb.where('user.id = :userId', { userId: user.id });
    }

    if (query.search) {
      qb.andWhere('bill.invoiceNumber ILIKE :search', {
        search: `%${query.search}%`,
      });
    }

    if (query.status) {
      qb.andWhere('bill.status = :status', { status: query.status });
    }

    if (query.debtorId) {
      qb.andWhere('debtor.id = :debtorId', { debtorId: query.debtorId });
    }

    if (query.dateFrom) {
      qb.andWhere('bill.issueDate >= :from', { from: query.dateFrom });
    }
    if (query.dateTo) {
      qb.andWhere('bill.issueDate <= :to', { to: query.dateTo });
    }

    if (query.amountMin) {
      qb.andWhere('bill.amount >= :min', { min: query.amountMin });
    }
    if (query.amountMax) {
      qb.andWhere('bill.amount <= :max', { max: query.amountMax });
    }

    const sortableFields = ['issueDate', 'dueDate', 'amount'];
    const sortBy = sortableFields.includes(query.sortBy) ? query.sortBy : 'issueDate';

    const order = query.order === 'ASC' ? 'ASC' : 'DESC';

    qb.orderBy(`bill.${sortBy}`, order);

    const [data, total] = await qb.skip(skip).take(limit).getManyAndCount();

    return {
      data,
      meta: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    };
  }

  // ───────────────────────────────────────────────────────────
  // BUSCAR UNA FACTURA (validación ownership)
  // ───────────────────────────────────────────────────────────
  async findOne(id: number, user: User): Promise<Bill> {
    const bill = await this.billRepo.findOne({
      where: { id },
      relations: ['debtor', 'user'],
    });

    if (!bill) {
      throw new NotFoundException('Factura no encontrada');
    }

    if (user.role === 'CLIENT' && bill.user.id !== user.id) {
      throw new ForbiddenException('No puede acceder a esta factura');
    }

    return bill;
  }

  // ───────────────────────────────────────────────────────────
  // CREAR FACTURA
  // ───────────────────────────────────────────────────────────

  async create(dto: CreateBillDto, user: User): Promise<Bill> {
    const debtor = await this.debtorRepo.findOne({
      where: { id: dto.debtorId, user: { id: user.id } },
      relations: ['user'],
    });

    if (!debtor) {
      throw new ForbiddenException('El deudor no pertenece a este usuario');
    }

    const bill = this.billRepo.create({
      invoiceNumber: dto.invoiceNumber,
      amount: dto.amount,
      issueDate: dto.issueDate as any,
      dueDate: dto.dueDate as any,
      status: dto.status ?? BillStatus.PENDING,
      debtor,
      user,
    });

    return this.billRepo.save(bill);
  }

  // ───────────────────────────────────────────────────────────
  // EDITAR FACTURA
  // ───────────────────────────────────────────────────────────

  async update(id: number, data: UpdateBillDto, user: User): Promise<Bill> {
    // 1) Cargar y validar ownership
    const bill = await this.findOne(id, user);

    // 2) Regla: CLIENT no puede editar si no está PENDING
    if (user.role === 'CLIENT' && bill.status !== BillStatus.PENDING) {
      throw new ForbiddenException('No puede modificar facturas ya procesadas');
    }

    // 3) Si solicita cambiar de deudor, validar ownership del deudor
    let debtor = bill.debtor;
    if (typeof data.debtorId !== 'undefined') {
      const d = await this.debtorRepo.findOne({
        where: { id: data.debtorId, user: { id: user.id } },
        relations: ['user'],
      });
      if (!d) throw new ForbiddenException('El deudor no pertenece a este usuario');
      debtor = d;
    }

    // 4) Proteger status cuando viene desde CLIENT
    if (user.role === 'CLIENT' && 'status' in data) {
      delete (data as any).status; // <-- ahora sí usamos "data", no "dto"
    }

    // 5) Merge + save (mejor práctica frente a repository.update)
    const merged = this.billRepo.merge(bill, {
      invoiceNumber: data.invoiceNumber ?? bill.invoiceNumber,
      amount: typeof data.amount === 'number' ? data.amount : bill.amount,
      issueDate: (data.issueDate as any) ?? bill.issueDate,
      dueDate: (data.dueDate as any) ?? bill.dueDate,
      // Si fuese ADMIN y quisieras permitir cambios de estado podrías respetar data.status:
      status: data.status ?? bill.status,
      debtor,
    });

    return this.billRepo.save(merged);
  }

  // ───────────────────────────────────────────────────────────
  // ELIMINAR FACTURA
  // ───────────────────────────────────────────────────────────

  async remove(id: number, user: User): Promise<void> {
    const bill = await this.billRepo.findOne({
      where: { id },
      relations: ['user'],
    });

    if (!bill) throw new NotFoundException('Factura no encontrada');

    // Ownership
    if (user.role === 'CLIENT' && bill.user.id !== user.id) {
      throw new ForbiddenException('No puede eliminar esta factura');
    }

    // Solo las facturas PENDING pueden eliminarse
    if (bill.status !== BillStatus.PENDING) {
      throw new ForbiddenException('Solo puede eliminar facturas en estado PENDING');
    }

    await this.billRepo.remove(bill);
  }
}
