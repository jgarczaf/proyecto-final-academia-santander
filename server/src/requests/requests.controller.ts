import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { RequestsService } from './requests.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { CreateRequestDto } from './dtos/create-request.dto';
import { RejectRequestDto } from './dtos/reject-request.dto';

@ApiTags('Requests')
@ApiBearerAuth()
@Controller('requests')
@UseGuards(JwtAuthGuard, RolesGuard)
export class RequestsController {
  constructor(private readonly requestsService: RequestsService) {}

  // ─────────────────────────────────────────────
  // LISTADOS
  // CLIENT ve sólo las suyas; ADMIN ve todas (lo decide el service)
  // ─────────────────────────────────────────────
  @Get()
  findAll(@Req() req) {
    return this.requestsService.findAll(req.user);
  }

  // ─────────────────────────────────────────────
  // CREATE (CLIENT)
  // ─────────────────────────────────────────────
  @Roles('CLIENT')
  @Post()
  create(@Body() dto: CreateRequestDto, @Req() req) {
    return this.requestsService.create(dto, req.user);
  }

  // ─────────────────────────────────────────────
  // ACCIONES ADMIN (colocadas antes que :id para claridad)
  // ─────────────────────────────────────────────
  @Roles('ADMIN')
  @Post(':id(\\d+)/approve')
  approve(@Param('id', ParseIntPipe) id: number, @Req() req) {
    return this.requestsService.approve(id, req.user);
  }

  @Roles('ADMIN')
  @Post(':id(\\d+)/reject')
  reject(@Param('id', ParseIntPipe) id: number, @Body() body: RejectRequestDto, @Req() req) {
    return this.requestsService.reject(id, req.user, body?.reason);
  }

  // ─────────────────────────────────────────────
  // READ / DELETE (restringidas a numérico)
  // ─────────────────────────────────────────────
  @Get(':id(\\d+)')
  findOne(@Param('id', ParseIntPipe) id: number, @Req() req) {
    return this.requestsService.findOne(id, req.user);
  }

  // CLIENT puede eliminar si está en REVIEW (el service valida estado y ownership)
  @Roles('CLIENT')
  @Delete(':id(\\d+)')
  remove(@Param('id', ParseIntPipe) id: number, @Req() req) {
    return this.requestsService.remove(id, req.user);
  }
}
