import { ApiProperty } from '@nestjs/swagger';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  CreateDateColumn,
} from 'typeorm';
import { User } from 'src/users/entities/users.entity';
import { Bill } from 'src/bills/entities/bills.entity';

@Entity('debtors')
export class Debtor {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: 'Nombre de la empresa deudora' })
  @Column()
  companyName: string;

  @ApiProperty({ description: 'Identificación fiscal del deudor (NIF/CIF)' })
  @Column()
  fiscalId: string;

  @ApiProperty({ description: 'País del deudor' })
  @Column()
  country: string;

  @ApiProperty({ description: 'Límite de deuda concedido al deudor' })
  @Column('decimal', { precision: 12, scale: 2 })
  limit: number;

  @ApiProperty({ description: 'Estado del deudor', enum: ['ACTIVE', 'INACTIVE'] })
  @Column({ type: 'enum', enum: ['ACTIVE', 'INACTIVE'], default: 'ACTIVE' })
  status: 'ACTIVE' | 'INACTIVE';

  @ApiProperty({ description: 'Fecha en la que el deudor fue dado de alta automáticamente' })
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty({ description: 'Nombre de la persona de contacto del deudor' })
  @Column()
  contactName: string;

  @ApiProperty({ description: 'Email del contacto del deudor' })
  @Column()
  contactEmail: string;

  @ApiProperty({ type: () => User, description: 'Cliente propietario del deudor' })
  @ManyToOne(() => User, (user) => user.debtors, { onDelete: 'CASCADE' })
  user: User;

  @ApiProperty({ type: () => [Bill], description: 'Facturas asociadas a este deudor' })
  @OneToMany(() => Bill, (bill) => bill.debtor)
  bills: Bill[];
}
