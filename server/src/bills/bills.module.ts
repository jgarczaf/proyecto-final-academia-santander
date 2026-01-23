import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BillsController } from './bills.controller';
import { BillsService } from './bills.service';
import { Bill } from './entities/bills.entity';
import { Debtor } from 'src/debtors/entities/debtors.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Bill, Debtor])],
  controllers: [BillsController],
  providers: [BillsService],
})
export class BillsModule {}
