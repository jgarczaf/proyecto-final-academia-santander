import { Body, Controller, Delete, Get, Param, Post, Req, UseGuards } from '@nestjs/common';
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

  // CLIENT: ve las suyas; ADMIN: ve todas
  @Get()
  findAll(@Req() req) {
    return this.requestsService.findAll(req.user);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Req() req) {
    return this.requestsService.findOne(+id, req.user);
  }

  // CLIENT crea solicitud a partir de billIds
  @Roles('CLIENT')
  @Post()
  create(@Body() dto: CreateRequestDto, @Req() req) {
    return this.requestsService.create(dto, req.user);
  }

  // ADMIN aprueba
  @Roles('ADMIN')
  @Post(':id/approve')
  approve(@Param('id') id: string, @Req() req) {
    return this.requestsService.approve(+id, req.user);
  }

  // ADMIN rechaza/cancela
  @Roles('ADMIN')
  @Post(':id/reject')
  reject(@Param('id') id: string, @Body() body: RejectRequestDto, @Req() req) {
    return this.requestsService.reject(+id, req.user, body?.reason);
  }

  // CLIENT elimina solicitud en REVIEW (rollback de facturas)
  @Roles('CLIENT')
  @Delete(':id')
  remove(@Param('id') id: string, @Req() req) {
    return this.requestsService.remove(+id, req.user);
  }
}
