import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DashboardService } from '../../../../core/services/dashboard.service';
import {
  AdminDashboardResponse,
  RequestItem,
} from '../../../../core/models/models';
import { DatePipe, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
  providers: [DatePipe, CurrencyPipe],
})
export class AdminDashboardComponent implements OnInit {
  loading = true;
  data: AdminDashboardResponse | null = null;

  reqsCols: string[] = [
    'id',
    'createdAt',
    'bills',
    'total',
    'status',
    'client',
  ];

  reviewCols: string[] = ['id', 'client', 'bills', 'total', 'createdAt'];

  constructor(
    private dash: DashboardService,
    private snack: MatSnackBar,
    private date: DatePipe,
    private currency: CurrencyPipe,
  ) {}

  ngOnInit(): void {
    this.dash.getAdmin().subscribe({
      next: (res) => {
        this.data = res;
        this.loading = false;
      },
      error: () => {
        this.snack.open('No se pudo cargar el dashboard', 'Cerrar', {
          duration: 2500,
        });
        this.loading = false;
      },
    });
  }

  lastRequests(): RequestItem[] {
    return this.data?.lastRequests ?? [];
  }

  getLastUpdatedRequests(): RequestItem[] {
    const all = this.data?.lastRequests ?? [];
    return [...all]
      .sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      )
      .slice(0, 3);
  }

  getRequestsInReview(): RequestItem[] {
    const all = this.data?.lastRequests ?? [];
    return all.filter((r) => r.status === 'REVIEW');
  }

  fmtDate(value: string | Date | null | undefined): string {
    if (!value) return '';
    return this.date.transform(value, 'dd/MM/yyyy, HH:mm') ?? '';
  }

  fmtAmount(value: any): string {
    const n = this.toNumber(value);
    return this.currency.transform(n, 'EUR', 'symbol', '1.2-2') ?? '';
  }

  toNumber(v: any): number {
    if (typeof v === 'number') return v;
    if (typeof v === 'string') {
      const n = Number(v.replace(',', '.'));
      return Number.isFinite(n) ? n : 0;
    }
    return 0;
  }

  totalOf(r: RequestItem): number {
    return (r?.bills ?? []).reduce(
      (sum, b: any) => sum + this.toNumber(b?.amount),
      0,
    );
  }

  statusClass(status?: string): string {
    const s = (status || '').toUpperCase();
    if (s === 'PENDING') return 'st-pending';
    if (s === 'REVIEW') return 'st-pending';
    if (s === 'APPROVED') return 'st-approved';
    if (s === 'REJECTED') return 'st-rejected';
    return 'st-unknown';
  }

  statusLabel(status?: string): string {
    const s = (status || '').toUpperCase();
    if (s === 'REVIEW') return 'Pendiente';
    if (s === 'APPROVED') return 'Validada';
    if (s === 'REJECTED') return 'Rechazada';
    if (s === 'PENDING') return 'Pendiente';
    return status || '';
  }
}
