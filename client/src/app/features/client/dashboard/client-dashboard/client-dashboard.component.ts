import { Component, OnDestroy, OnInit } from '@angular/core';
import { DashboardService } from '../../../../core/services/dashboard.service';
import {
  ClientDashboardResponse,
  IRequestItem,
  IBill,
} from '../../../../core/models/models';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SocketService } from '../../../../core/services/socket.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-client-dashboard',
  templateUrl: './client-dashboard.component.html',
  styleUrls: ['./client-dashboard.component.scss'],
})
export class ClientDashboardComponent implements OnInit, OnDestroy {
  loading = true;
  data: ClientDashboardResponse | null = null;
  private sub?: Subscription;

  billsTableCols = ['invoiceNumber', 'debtor', 'amount', 'issueDate', 'status'];
  reqsTableCols = ['id', 'status', 'createdAt', 'bills'];

  constructor(
    private dash: DashboardService,
    private snack: MatSnackBar,
    private socket: SocketService,
  ) {}

  ngOnInit(): void {
    this.load();
    // 🔔 Refrescar Dashboard al evento
    this.sub = this.socket.onRequestUpdated().subscribe(() => this.load());
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  private load() {
    this.loading = true;
    this.dash.getClient().subscribe({
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

  count(status: 'PENDING' | 'IN_REQUEST' | 'APPROVED' | 'REJECTED'): number {
    if (!this.data) return 0;
    const item = this.data.billsByStatus.find((x) => x.status === status);
    return item ? Number(item.count) : 0;
  }

  lastBills(): IBill[] {
    return this.data?.lastBills ?? [];
  }
  lastRequests(): IRequestItem[] {
    return this.data?.lastRequests ?? [];
  }
}
