import { ApiProperty } from '@nestjs/swagger';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  ManyToMany,
  JoinTable,
  CreateDateColumn,
} from 'typeorm';
import { User } from 'src/users/entities/users.entity';
import { Bill } from 'src/bills/entities/bills.entity';

export enum RequestStatus {
  REVIEW = 'REVIEW',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
}

@Entity('requests')
export class Request {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ enum: RequestStatus })
  @Column({
    type: 'enum',
    enum: RequestStatus,
    default: RequestStatus.REVIEW,
  })
  status: RequestStatus;

  @ApiProperty({ description: 'Motivo de rechazo (opcional)' })
  @Column({ type: 'text', nullable: true })
  rejectionReason?: string | null;

  @ApiProperty()
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty({ type: () => User })
  @ManyToOne(() => User, (user) => user.requests, { onDelete: 'CASCADE' })
  user: User;

  @ApiProperty({ type: () => [Bill] })
  @ManyToMany(() => Bill, (bill) => bill.requests, { cascade: false })
  @JoinTable({
    name: 'request_bills',
    joinColumn: { name: 'request_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'bill_id', referencedColumnName: 'id' },
  })
  bills: Bill[];
}
