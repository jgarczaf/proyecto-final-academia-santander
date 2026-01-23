import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/users.entity';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>
  ) {}

  // ─────────────────────────────────────────────────────────────
  // LISTAR TODOS LOS USUARIOS (normalmente sólo accesible para ADMIN)
  // ─────────────────────────────────────────────────────────────
  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  // ─────────────────────────────────────────────────────────────
  // BUSCAR UN USUARIO POR ID
  // ─────────────────────────────────────────────────────────────
  async findById(id: number): Promise<User> {
    const user = await this.usersRepository.findOne({ where: { id } });

    if (!user) {
      new NotFoundException(`Usuario con id ${id} no encontrado`);
    }

    return user;
  }

  // ─────────────────────────────────────────────────────────────
  // BUSCAR POR EMAIL (NECESARIO PARA LOGIN)
  // ─────────────────────────────────────────────────────────────
  async findByEmail(email: string): Promise<User | null> {
    return this.usersRepository.findOne({ where: { email } });
  }

  // ─────────────────────────────────────────────────────────────
  // CREAR USUARIO (normalmente llamado por AuthService.register)
  // ─────────────────────────────────────────────────────────────
  async create(data: CreateUserDto): Promise<User> {
    const user = this.usersRepository.create(data);
    return this.usersRepository.save(user);
  }

  // ─────────────────────────────────────────────────────────────
  // ACTUALIZAR USUARIO
  // ─────────────────────────────────────────────────────────────

  async update(id: number, data: UpdateUserDto): Promise<User> {
    const user = await this.findById(id);

    const mergedUser = this.usersRepository.merge(user, data);

    return this.usersRepository.save(mergedUser);
  }

  // ─────────────────────────────────────────────────────────────
  // ELIMINAR USUARIO
  // ─────────────────────────────────────────────────────────────

  async remove(id: number): Promise<void> {
    const user = await this.findById(id);

    await this.usersRepository.remove(user);
  }
}
