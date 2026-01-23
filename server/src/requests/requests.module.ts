import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RequestsService } from './requests.service';
import { RequestsController } from './requests.controller';
import { Request } from './entities/requests.entity';
import { Bill } from 'src/bills/entities/bills.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Request, Bill])],
  controllers: [RequestsController],
  providers: [RequestsService],
})
export class RequestsModule {}
