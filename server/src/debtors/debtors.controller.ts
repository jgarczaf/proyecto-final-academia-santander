import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
  Req,
  UseGuards,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DebtorsService } from './debtors.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { UpdateDebtorDto } from './dtos/update-debtor.dto';
import { CreateDebtorDto } from './dtos/create-debtor.dto';

@ApiTags('Debtors')
@Controller('debtors')
@UseGuards(JwtAuthGuard, RolesGuard)
export class DebtorsController {
  constructor(private readonly debtorsService: DebtorsService) {}

  // CLIENT ve solo los suyos, ADMIN ve todos
  @Get()
  findAll(@Req() req) {
    return this.debtorsService.findAll(req.user);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Req() req) {
    return this.debtorsService.findOne(+id, req.user);
  }

  @Get('paginated')
  findAllPaginated(@Req() req, @Query() query) {
    return this.debtorsService.findAllPaginated(req.user, query);
  }

  @Roles('CLIENT')
  @Post()
  create(@Body() body: CreateDebtorDto, @Req() req) {
    return this.debtorsService.create(body, req.user);
  }

  @Roles('CLIENT')
  @Patch(':id')
  update(@Param('id') id: string, @Body() body: UpdateDebtorDto, @Req() req) {
    return this.debtorsService.update(+id, body, req.user);
  }

  @Roles('CLIENT')
  @Delete(':id')
  remove(@Param('id') id: string, @Req() req) {
    return this.debtorsService.remove(+id, req.user);
  }
}
