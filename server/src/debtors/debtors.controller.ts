import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  Query,
  Req,
  UseGuards,
  ParseIntPipe,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { DebtorsService } from './debtors.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { CreateDebtorDto } from './dtos/create-debtor.dto';
import { UpdateDebtorDto } from './dtos/update-debtor.dto';

@ApiTags('Debtors')
@ApiBearerAuth()
@Controller('debtors')
@UseGuards(JwtAuthGuard, RolesGuard)
export class DebtorsController {
  constructor(private readonly debtorsService: DebtorsService) {}

  @Get('paginated')
  findAllPaginated(@Req() req, @Query() query) {
    return this.debtorsService.findAllPaginated(req.user, query);
  }

  @Get()
  findAll(@Req() req) {
    return this.debtorsService.findAll(req.user);
  }

  @Get(':id(\\d+)')
  findOne(@Param('id', ParseIntPipe) id: number, @Req() req) {
    return this.debtorsService.findOne(id, req.user);
  }

  @Roles('CLIENT')
  @Post()
  create(@Body() body: CreateDebtorDto, @Req() req) {
    return this.debtorsService.create(body, req.user);
  }

  @Roles('CLIENT')
  @Patch(':id(\\d+)')
  update(@Param('id', ParseIntPipe) id: number, @Body() body: UpdateDebtorDto, @Req() req) {
    return this.debtorsService.update(id, body, req.user);
  }

  @Roles('CLIENT')
  @Delete(':id(\\d+)')
  remove(@Param('id', ParseIntPipe) id: number, @Req() req) {
    return this.debtorsService.remove(id, req.user);
  }
}
