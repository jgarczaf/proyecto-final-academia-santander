import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
  Req,
  UseGuards,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BillsService } from './bills.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { UpdateBillDto } from './dtos/update-bills.dto';
import { CreateBillDto } from './dtos/create-bill.dto';

@ApiTags('Bills')
@Controller('bills')
@UseGuards(JwtAuthGuard, RolesGuard)
export class BillsController {
  constructor(private readonly billsService: BillsService) {}

  @Get()
  findAll(@Req() req) {
    return this.billsService.findAll(req.user);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Req() req) {
    return this.billsService.findOne(+id, req.user);
  }

  @Get('paginated')
  findAllPaginated(@Req() req, @Query() query) {
    return this.billsService.findAllPaginated(req.user, query);
  }

  @Roles('CLIENT')
  @Post()
  create(@Body() body: CreateBillDto, @Req() req) {
    return this.billsService.create(body, req.user);
  }

  @Roles('CLIENT')
  @Patch(':id')
  update(@Param('id') id: string, @Body() body: UpdateBillDto, @Req() req) {
    return this.billsService.update(+id, body, req.user);
  }

  @Roles('CLIENT')
  @Delete(':id')
  remove(@Param('id') id: string, @Req() req) {
    return this.billsService.remove(+id, req.user);
  }
}
