import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../../../core/services/dashboard.service';
import {
  ClientDashboardResponse,
  RequestItem,
  Bill,
} from '../../../../core/models/models';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-client-dashboard',
  templateUrl: './client-dashboard.component.html',
  styleUrls: ['./client-dashboard.component.scss'],
})
export class ClientDashboardComponent implements OnInit {
  loading = true;
  data: ClientDashboardResponse | null = null;

  billsTableCols = ['invoiceNumber', 'debtor', 'amount', 'issueDate', 'status'];
  reqsTableCols = ['id', 'status', 'createdAt', 'bills'];

  constructor(
    private dash: DashboardService,
    private snack: MatSnackBar,
  ) {}

  ngOnInit(): void {
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

  lastBills(): Bill[] {
    return this.data?.lastBills ?? [];
  }
  lastRequests(): RequestItem[] {
    return this.data?.lastRequests ?? [];
  }
}
