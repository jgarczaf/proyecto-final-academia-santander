import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Debtor } from './entities/debtors.entity';
import { User } from 'src/users/entities/users.entity';
import { CreateDebtorDto } from './dtos/create-debtor.dto';
import { UpdateDebtorDto } from './dtos/update-debtor.dto';
import { PaginatedResult } from 'src/common/interfaces/pagination.interface';

@Injectable()
export class DebtorsService {
  constructor(
    @InjectRepository(Debtor)
    private readonly debtorRepo: Repository<Debtor>,

    @InjectRepository(User)
    private readonly userRepo: Repository<User>
  ) {}

  // ───────────────────────────────────────────────
  // CLIENT: obtiene solo sus deudores
  // ADMIN: obtiene todos (si decides permitirlo)
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

  async findAllPaginated(user: User, query: any): Promise<PaginatedResult<Debtor>> {
    const page = Math.max(1, Number(query.page) || 1);
    const limit = Math.min(100, Number(query.limit) || 10);
    const skip = (page - 1) * limit;

    const qb = this.debtorRepo
      .createQueryBuilder('debtor')
      .leftJoinAndSelect('debtor.user', 'user');

    if (user.role === 'CLIENT') {
      qb.where('user.id = :userId', { userId: user.id });
    }

    if (query.search) {
      qb.andWhere('(debtor.companyName ILIKE :search OR debtor.fiscalId ILIKE :search)', {
        search: `%${query.search}%`,
      });
    }

    if (query.status) {
      qb.andWhere('debtor.status = :status', { status: query.status });
    }

    if (query.country) {
      qb.andWhere('debtor.country = :country', { country: query.country });
    }

    const sortBy = ['companyName', 'createdAt'].includes(query.sortBy) ? query.sortBy : 'createdAt';

    const order = query.order === 'ASC' ? 'ASC' : 'DESC';
    qb.orderBy(`debtor.${sortBy}`, order);

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

  // ───────────────────────────────────────────────
  // Buscar un deudor asegurando que pertenece al CLIENTE
  // ───────────────────────────────────────────────
  async findOne(id: number, user: User): Promise<Debtor> {
    const debtor = await this.debtorRepo.findOne({
      where: { id },
      relations: ['user'],
    });

    if (!debtor) {
      throw new NotFoundException('Deudor no encontrado');
    }

    if (user.role === 'CLIENT' && debtor.user.id !== user.id) {
      throw new ForbiddenException('No puede acceder a este deudor');
    }

    return debtor;
  }

  // ───────────────────────────────────────────────
  // Crear un deudor vinculado al usuario CLIENT
  // ───────────────────────────────────────────────
  async create(data: CreateDebtorDto, user: User): Promise<Debtor> {
    const debtor = this.debtorRepo.create({
      ...data,
      user: { id: user.id },
    });

    return this.debtorRepo.save(debtor);
  }

  // ───────────────────────────────────────────────
  // Editar un deudor del usuario
  // ───────────────────────────────────────────────

  async update(id: number, data: UpdateDebtorDto, user: User): Promise<Debtor> {
    const debtor = await this.findOne(id, user);

    const updated = this.debtorRepo.merge(debtor, data);

    return this.debtorRepo.save(updated);
  }

  // ───────────────────────────────────────────────
  // Eliminar un deudor del cliente
  // ───────────────────────────────────────────────
  async remove(id: number, user: User): Promise<void> {
    const debtor = await this.findOne(id, user); // valida ownership
    await this.debtorRepo.delete(debtor.id);
  }
}
