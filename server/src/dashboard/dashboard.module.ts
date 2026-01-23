import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DashboardController } from './dashboard.controller';
import { DashboardService } from './dashboard.service';
import { User } from 'src/users/entities/users.entity';
import { Debtor } from 'src/debtors/entities/debtors.entity';
import { Bill } from 'src/bills/entities/bills.entity';
import { Request } from 'src/requests/entities/requests.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Debtor, Bill, Request])],
  controllers: [DashboardController],
  providers: [DashboardService],
})
export class DashboardModule {}
