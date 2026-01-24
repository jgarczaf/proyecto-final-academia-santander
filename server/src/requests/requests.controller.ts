import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Req,
  UseGuards,
  ParseIntPipe,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { RequestsService } from './requests.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';

// Si ya tienes DTOs, descomenta estos:
import { CreateRequestDto } from './dtos/create-request.dto';
import { RejectRequestDto } from './dtos/reject-request.dto';

@ApiTags('Requests')
@ApiBearerAuth()
@Controller('requests')
@UseGuards(JwtAuthGuard, RolesGuard)
export class RequestsController {
  constructor(private readonly requestsService: RequestsService) {}

  // LISTADOS
  // CLIENT ve sólo las suyas; ADMIN ve todas (lo decide el service con req.user)
  @Get()
  findAll(@Req() req) {
    return this.requestsService.findAll(req.user);
  }

  // OPERACIONES ESPECIALES (colócalas antes que el GET ':id' por claridad)
  @Roles('CLIENT')
  @Post()
  create(@Body() dto: CreateRequestDto, @Req() req) {
    return this.requestsService.create(dto, req.user);
  }

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

  // READ / DELETE (restringidos a numérico)
  @Get(':id(\\d+)')
  findOne(@Param('id', ParseIntPipe) id: number, @Req() req) {
    return this.requestsService.findOne(id, req.user);
  }

  // CLIENT puede eliminar si la solicitud está en REVIEW (el service lo valida)
  @Roles('CLIENT')
  @Delete(':id(\\d+)')
  remove(@Param('id', ParseIntPipe) id: number, @Req() req) {
    return this.requestsService.remove(id, req.user);
  }
}
