import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, ILike } from 'typeorm';
import { Debtor } from './entities/debtors.entity';
import { User } from 'src/users/entities/users.entity';
import { CreateDebtorDto } from './dtos/create-debtor.dto';
import { UpdateDebtorDto } from './dtos/update-debtor.dto';
import { PaginatedResult } from 'src/common/interfaces/pagination.interface';

@Injectable()
export class DebtorsService {
  constructor(
    @InjectRepository(Debtor)
    private readonly debtorRepo: Repository<Debtor>
  ) {}

  // ───────────────────────────────────────────────
  // CLIENT: obtiene solo sus deudores
  // ADMIN: obtiene todos
  // ───────────────────────────────────────────────
  async findAll(user: User): Promise<Debtor[]> {
    if (user.role === 'ADMIN') {
      return this.debtorRepo.find({ relations: ['user'] });
    }
    return this.debtorRepo.find({
      where: { user: { id: user.id } },
      relations: ['user'],
    });
  }

  // ───────────────────────────────────────────────
  // Listado paginado + filtros + orden (QueryBuilder)
  // ───────────────────────────────────────────────
  async findAllPaginated(user: User, query: any): Promise<PaginatedResult<Debtor>> {
    const page = Math.max(1, Number(query.page) || 1);
    const limit = Math.min(100, Number(query.limit) || 10);
    const skip = (page - 1) * limit;

    const qb = this.debtorRepo.createQueryBuilder('debtor').leftJoinAndSelect('debtor.user', 'u'); // ✅ NO usar alias 'user'

    // Ownership
    if (user?.role === 'CLIENT') {
      qb.where('u.id = :userId', { userId: user.id });
    }

    // Search (companyName | fiscalId)
    if (query.search) {
      qb.andWhere('(debtor.companyName ILIKE :s OR debtor.fiscalId ILIKE :s)', {
        s: `%${query.search}%`,
      });
    }

    // Status validado
    if (query.status) {
      const allowed = ['ACTIVE', 'INACTIVE'];
      if (allowed.includes(String(query.status))) {
        qb.andWhere('debtor.status = :st', { st: query.status });
      }
    }

    // Country
    if (query.country) {
      qb.andWhere('debtor.country = :c', { c: query.country });
    }

    // Orden controlado
    const sortable = ['companyName', 'createdAt'];
    const sortBy = sortable.includes(query.sortBy) ? query.sortBy : 'createdAt';
    const order = String(query.order).toUpperCase() === 'ASC' ? 'ASC' : 'DESC';
    qb.orderBy(`debtor.${sortBy}`, order);

    // Para ayudar si vuelve a fallar, puedes descomentar esto 2 líneas para ver la SQL
    // console.log(qb.getSql());
    // console.log(qb.getParameters());

    const [data, total] = await qb.skip(skip).take(limit).getManyAndCount();

    return {
      data,
      meta: { page, limit, total, pages: Math.ceil(total / limit) },
    };
  }

  // ───────────────────────────────────────────────
  // Versión ALTERNATIVA (sin QueryBuilder) por si quieres probar rápido
  // ───────────────────────────────────────────────
  async findAllPaginatedRepo(user: User, query: any): Promise<PaginatedResult<Debtor>> {
    const page = Math.max(1, Number(query.page) || 1);
    const limit = Math.min(100, Number(query.limit) || 10);
    const skip = (page - 1) * limit;

    const whereBase: any = user?.role === 'CLIENT' ? { user: { id: user.id } } : {};

    // Filtros
    const orSearch = query.search
      ? [
          { ...whereBase, companyName: ILike(`%${query.search}%`) },
          { ...whereBase, fiscalId: ILike(`%${query.search}%`) },
        ]
      : null;

    const whereArray: any[] = [];
    if (orSearch) whereArray.push(...orSearch);
    if (query.status && ['ACTIVE', 'INACTIVE'].includes(String(query.status))) {
      whereArray.length
        ? whereArray.forEach((w) => (w.status = query.status))
        : whereArray.push({ ...whereBase, status: query.status });
    }
    if (query.country) {
      whereArray.length
        ? whereArray.forEach((w) => (w.country = query.country))
        : whereArray.push({ ...whereBase, country: query.country });
    }

    const sortable = ['companyName', 'createdAt'];
    const sortBy = sortable.includes(query.sortBy) ? query.sortBy : 'createdAt';
    const order: 'ASC' | 'DESC' = String(query.order).toUpperCase() === 'ASC' ? 'ASC' : 'DESC';

    const [data, total] = await this.debtorRepo.findAndCount({
      where: whereArray.length ? whereArray : whereBase,
      relations: ['user'],
      order: { [sortBy]: order },
      skip,
      take: limit,
    });

    return { data, meta: { page, limit, total, pages: Math.ceil(total / limit) } };
  }

  // ───────────────────────────────────────────────
  // Read con ownership
  // ───────────────────────────────────────────────
  async findOne(id: number, user: User): Promise<Debtor> {
    const debtor = await this.debtorRepo.findOne({ where: { id }, relations: ['user'] });
    if (!debtor) throw new NotFoundException('Deudor no encontrado');
    if (user.role === 'CLIENT' && debtor.user.id !== user.id) {
      throw new ForbiddenException('No puede acceder a este deudor');
    }
    return debtor;
  }

  // ───────────────────────────────────────────────
  // Create (vinculado al CLIENT)
  // ───────────────────────────────────────────────
  async create(data: CreateDebtorDto, user: User): Promise<Debtor> {
    const debtor = this.debtorRepo.create({ ...data, user: { id: user.id } });
    return this.debtorRepo.save(debtor);
  }

  // ───────────────────────────────────────────────
  // Update (merge + save)
  // ───────────────────────────────────────────────
  async update(id: number, data: UpdateDebtorDto, user: User): Promise<Debtor> {
    const debtor = await this.findOne(id, user);
    const updated = this.debtorRepo.merge(debtor, data);
    return this.debtorRepo.save(updated);
  }

  // ───────────────────────────────────────────────
  // Delete (remove para ejecutar hooks)
  // ───────────────────────────────────────────────
  async remove(id: number, user: User): Promise<void> {
    const debtor = await this.findOne(id, user);
    await this.debtorRepo.remove(debtor);
  }
}
