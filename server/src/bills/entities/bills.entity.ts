import { ApiProperty } from '@nestjs/swagger';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  ManyToMany,
} from 'typeorm';
import { User } from 'src/users/entities/users.entity';
import { Debtor } from 'src/debtors/entities/debtors.entity';
import { Request } from 'src/requests/entities/requests.entity';

export enum BillStatus {
  PENDING = 'PENDING',
  IN_REQUEST = 'IN_REQUEST',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
}

@Entity('bills')
export class Bill {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: 'Número de factura' })
  @Column({ unique: false })
  invoiceNumber: string;

  @ApiProperty({ description: 'Importe de la factura' })
  @Column('decimal', { precision: 12, scale: 2 })
  amount: number;

  @ApiProperty({ description: 'Fecha de emisión' })
  @Column({ type: 'date' })
  issueDate: Date;

  @ApiProperty({ description: 'Fecha de vencimiento' })
  @Column({ type: 'date' })
  dueDate: Date;

  @ApiProperty({ enum: BillStatus })
  @Column({
    type: 'enum',
    enum: BillStatus,
    default: BillStatus.PENDING,
  })
  status: BillStatus;

  @ApiProperty()
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty({ type: () => User })
  @ManyToOne(() => User, (user) => user.bills, { onDelete: 'CASCADE' })
  user: User;

  @ApiProperty({ type: () => Debtor })
  @ManyToOne(() => Debtor, (debtor) => debtor.bills, { onDelete: 'CASCADE' })
  debtor: Debtor;

  @ApiProperty({ type: () => [Request] })
  @ManyToMany(() => Request, (request) => request.bills)
  requests: Request[];
}
