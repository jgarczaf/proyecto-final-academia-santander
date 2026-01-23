import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/users/entities/users.entity';
import { Debtor } from 'src/debtors/entities/debtors.entity';
import { Bill, BillStatus } from 'src/bills/entities/bills.entity';
import { Request, RequestStatus } from 'src/requests/entities/requests.entity';

@Injectable()
export class DashboardService {
  constructor(
    @InjectRepository(User) private userRepo: Repository<User>,
    @InjectRepository(Debtor) private debtorRepo: Repository<Debtor>,
    @InjectRepository(Bill) private billRepo: Repository<Bill>,
    @InjectRepository(Request) private requestRepo: Repository<Request>
  ) {}

  // ─────────────────────────────────────────────
  // DASHBOARD CLIENT
  // ─────────────────────────────────────────────
  async getClientDashboard(user: User) {
    const [
      totalDebtors,
      totalBills,
      billsByStatus,
      pendingAmount,
      inRequestAmount,
      lastBills,
      lastRequests,
    ] = await Promise.all([
      this.debtorRepo.count({ where: { user: { id: user.id } } }),
      this.billRepo.count({ where: { user: { id: user.id } } }),

      this.billRepo
        .createQueryBuilder('bill')
        .select('bill.status', 'status')
        .addSelect('COUNT(*)', 'count')
        .where('bill.userId = :userId', { userId: user.id })
        .groupBy('bill.status')
        .getRawMany(),

      this.billRepo
        .createQueryBuilder('bill')
        .select('COALESCE(SUM(bill.amount),0)', 'total')
        .where('bill.userId = :userId AND bill.status = :status', {
          userId: user.id,
          status: BillStatus.PENDING,
        })
        .getRawOne(),

      this.billRepo
        .createQueryBuilder('bill')
        .select('COALESCE(SUM(bill.amount),0)', 'total')
        .where('bill.userId = :userId AND bill.status = :status', {
          userId: user.id,
          status: BillStatus.IN_REQUEST,
        })
        .getRawOne(),

      this.billRepo.find({
        where: { user: { id: user.id } },
        order: { createdAt: 'DESC' },
        take: 5,
        relations: ['debtor'],
      }),

      this.requestRepo.find({
        where: { user: { id: user.id } },
        order: { createdAt: 'DESC' },
        take: 5,
        relations: ['bills'],
      }),
    ]);

    return {
      totals: {
        debtors: totalDebtors,
        bills: totalBills,
      },
      billsByStatus,
      amounts: {
        pending: Number(pendingAmount.total),
        inRequest: Number(inRequestAmount.total),
      },
      lastBills,
      lastRequests,
    };
  }

  // ─────────────────────────────────────────────
  // DASHBOARD ADMIN
  // ─────────────────────────────────────────────
  async getAdminDashboard() {
    const [totalClients, billsInRequest, totalRequestsReview, amountInReview, lastRequests] =
      await Promise.all([
        this.userRepo.count({ where: { role: 'CLIENT' } }),

        this.billRepo.count({
          where: { status: BillStatus.IN_REQUEST },
        }),

        this.requestRepo.count({
          where: { status: RequestStatus.REVIEW },
        }),

        this.billRepo
          .createQueryBuilder('bill')
          .select('COALESCE(SUM(bill.amount),0)', 'total')
          .where('bill.status = :status', {
            status: BillStatus.IN_REQUEST,
          })
          .getRawOne(),

        this.requestRepo.find({
          where: { status: RequestStatus.REVIEW },
          order: { createdAt: 'DESC' },
          take: 5,
          relations: ['user', 'bills'],
        }),
      ]);

    return {
      totals: {
        clients: totalClients,
        billsInRequest,
        requestsInReview: totalRequestsReview,
        amountInReview: Number(amountInReview.total),
      },
      lastRequests,
    };
  }
}
