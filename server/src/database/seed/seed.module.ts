import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeedService } from './seed.service';
import { User } from '../../users/entities/users.entity';
import { Debtor } from '../../debtors/entities/debtors.entity';
import { Bill } from '../../bills/entities/bills.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Debtor, Bill])],
  providers: [SeedService],
  exports: [SeedService],
})
export class SeedModule {}
