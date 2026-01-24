import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../../../core/services/dashboard.service';
import {
  AdminDashboardResponse,
  RequestItem,
} from '../../../../core/models/models';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
})
export class AdminDashboardComponent implements OnInit {
  loading = true;
  data: AdminDashboardResponse | null = null;

  reqsCols = ['id', 'createdAt', 'bills', 'status', 'client'];

  constructor(
    private dash: DashboardService,
    private snack: MatSnackBar,
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
}
