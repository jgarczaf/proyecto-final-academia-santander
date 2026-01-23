import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

import { User } from '../../users/entities/users.entity';
import { Debtor } from '../../debtors/entities/debtors.entity';
import { Bill, BillStatus } from '../../bills/entities/bills.entity';

@Injectable()
export class SeedService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,

    @InjectRepository(Debtor)
    private readonly debtorRepo: Repository<Debtor>,

    @InjectRepository(Bill)
    private readonly billRepo: Repository<Bill>
  ) {}

  async seed() {
    console.log('🌱 Starting database seed...');

    await this.cleanDatabase();
    const { admin, client } = await this.createUsers();
    const debtors = await this.createDebtors(client);
    await this.createBills(client, debtors);

    console.log('✅ Database seed completed');
  }

  // ─────────────────────────────────────────────

  private async cleanDatabase() {
    await this.billRepo.delete({});
    await this.debtorRepo.delete({});
    await this.userRepo.delete({});
  }

  // ─────────────────────────────────────────────

  private async createUsers() {
    const password = await bcrypt.hash('123456', 10);

    const admin = this.userRepo.create({
      name: 'Banco Admin',
      email: 'admin@santander.com',
      password,
      role: 'ADMIN',
      companyName: 'Banco Santander',
    });

    const client = this.userRepo.create({
      name: 'Cliente Demo',
      email: 'client@empresa.com',
      password,
      role: 'CLIENT',
      companyName: 'Empresa Demo SL',
    });

    await this.userRepo.save([admin, client]);

    console.log('👤 Users created');

    return { admin, client };
  }

  // ─────────────────────────────────────────────

  private async createDebtors(client: User): Promise<Debtor[]> {
    const debtors = this.debtorRepo.create([
      {
        companyName: 'Deudor Alfa SL',
        fiscalId: 'B12345678',
        country: 'ES',
        limit: 50000,
        status: 'ACTIVE',
        contactName: 'Juan Pérez',
        contactEmail: 'juan@alfa.com',
        user: client,
      },
      {
        companyName: 'Deudor Beta SA',
        fiscalId: 'A87654321',
        country: 'ES',
        limit: 30000,
        status: 'ACTIVE',
        contactName: 'María Gómez',
        contactEmail: 'maria@beta.com',
        user: client,
      },
    ]);

    const saved = await this.debtorRepo.save(debtors);
    console.log('🏢 Debtors created');

    return saved;
  }

  // ─────────────────────────────────────────────

  private async createBills(client: User, debtors: Debtor[]) {
    const bills = this.billRepo.create([
      {
        invoiceNumber: 'F-001',
        amount: 10000,
        issueDate: new Date('2024-01-01'),
        dueDate: new Date('2024-03-01'),
        status: BillStatus.PENDING,
        user: client,
        debtor: debtors[0],
      },
      {
        invoiceNumber: 'F-002',
        amount: 15000,
        issueDate: new Date('2024-01-15'),
        dueDate: new Date('2024-04-15'),
        status: BillStatus.PENDING,
        user: client,
        debtor: debtors[1],
      },
      {
        invoiceNumber: 'F-003',
        amount: 8000,
        issueDate: new Date('2023-12-01'),
        dueDate: new Date('2024-02-01'),
        status: BillStatus.APPROVED,
        user: client,
        debtor: debtors[0],
      },
    ]);

    await this.billRepo.save(bills);
    console.log('📄 Bills created');
  }
}
