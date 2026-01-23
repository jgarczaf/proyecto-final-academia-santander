import { Controller, Get, Post, Body, Param, Delete, Patch, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';

@ApiTags('Users')
@Controller('users')
@UseGuards(JwtAuthGuard, RolesGuard)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // ────────────────────────────────────────────────
  // SOLO ADMIN: ver todos los usuarios
  // ────────────────────────────────────────────────
  @Roles('ADMIN')
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  // ────────────────────────────────────────────────
  // Obtener un usuario por ID (ADMIN o el propio usuario)
  // ────────────────────────────────────────────────
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findById(+id);
  }

  // ────────────────────────────────────────────────
  // Crear usuario (normalmente solo desde AuthService)
  // ────────────────────────────────────────────────
  @Roles('ADMIN')
  @Post()
  create(@Body() body: CreateUserDto) {
    return this.usersService.create(body);
  }

  // ────────────────────────────────────────────────
  // Actualizar usuario
  // ────────────────────────────────────────────────
  @Patch(':id')
  update(@Param('id') id: string, @Body() body: UpdateUserDto) {
    return this.usersService.update(+id, body);
  }

  // ────────────────────────────────────────────────
  // Eliminar usuario
  // ────────────────────────────────────────────────
  @Roles('ADMIN')
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
