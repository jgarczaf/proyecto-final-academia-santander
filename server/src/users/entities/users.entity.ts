import { ApiProperty } from '@nestjs/swagger';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn } from 'typeorm';
import { Debtor } from 'src/debtors/entities/debtors.entity';
import { Bill } from 'src/bills/entities/bills.entity';
import { Request } from 'src/requests/entities/requests.entity';

@Entity('users')
export class User {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  name: string;

  @ApiProperty()
  @Column({ unique: true })
  email: string;

  @ApiProperty()
  @Column()
  password: string;

  @ApiProperty({ enum: ['ADMIN', 'CLIENT'] })
  @Column({
    type: 'enum',
    enum: ['ADMIN', 'CLIENT'],
  })
  role: 'ADMIN' | 'CLIENT';

  @ApiProperty()
  @Column()
  companyName: string;

  @ApiProperty()
  @CreateDateColumn()
  createdAt: Date;

  // ──────────────────────────────────────────────
  // Relaciones
  // ──────────────────────────────────────────────

  @ApiProperty({ type: () => [Debtor] })
  @OneToMany(() => Debtor, (debtor) => debtor.user)
  debtors: Debtor[];

  @ApiProperty({ type: () => [Bill] })
  @OneToMany(() => Bill, (bill) => bill.user)
  bills: Bill[];

  @ApiProperty({ type: () => [Request] })
  @OneToMany(() => Request, (request) => request.user)
  requests: Request[];
}
