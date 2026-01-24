import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
  Req,
  Query,
  UseGuards,
  ParseIntPipe,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { BillsService } from './bills.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';

// Si ya tienes DTOs, usa estos imports; si no, deja `any` y ajusta cuando los crees.
import { CreateBillDto } from './dtos/create-bill.dto';
import { UpdateBillDto } from './dtos/update-bill.dto';

@ApiTags('Bills')
@ApiBearerAuth()
@Controller('bills')
@UseGuards(JwtAuthGuard, RolesGuard)
export class BillsController {
  constructor(private readonly billsService: BillsService) {}

  // 1) RUTAS ESTÁTICAS (antes que :id)
  @Get('paginated')
  findAllPaginated(@Req() req, @Query() query) {
    return this.billsService.findAllPaginated(req.user, query);
  }

  // (opcional) listado no paginado
  @Get()
  findAll(@Req() req) {
    return this.billsService.findAll(req.user);
  }

  // 2) RUTAS DINÁMICAS RESTRINGIDAS A NÚMEROS
  @Get(':id(\\d+)')
  findOne(@Param('id', ParseIntPipe) id: number, @Req() req) {
    return this.billsService.findOne(id, req.user);
  }

  // CLIENT crea/edita/borra sus facturas
  @Roles('CLIENT')
  @Post()
  create(@Body() body: CreateBillDto, @Req() req) {
    return this.billsService.create(body, req.user);
  }

  @Roles('CLIENT')
  @Patch(':id(\\d+)')
  update(@Param('id', ParseIntPipe) id: number, @Body() body: UpdateBillDto, @Req() req) {
    return this.billsService.update(id, body, req.user);
  }

  @Roles('CLIENT')
  @Delete(':id(\\d+)')
  remove(@Param('id', ParseIntPipe) id: number, @Req() req) {
    return this.billsService.remove(id, req.user);
  }
}
