import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

import { RequestsService } from '../../../core/services/requests.service';
import { SocketService } from '../../../core/services/socket.service';
import { ConfirmDialogComponent } from '../../../shared/components/confirm-dialog/confirm-dialog.component';

import { DatePipe, CurrencyPipe } from '@angular/common';
import { Subscription } from 'rxjs';

// === Modelos mínimos para tipado local (ajusta si tu models.ts ya lo define) ===
interface DebtorLite {
  companyName?: string;
}
interface BillRow {
  id: number;
  invoiceNumber: string;
  amount: any;
  debtor?: DebtorLite;
}
interface UserLite {
  id: number;
  name?: string;
  companyName?: string;
  email?: string;
}
type RequestStatus = 'PENDING' | 'REVIEW' | 'APPROVED' | 'REJECTED';
interface RequestItem {
  id: number;
  status: RequestStatus;
  createdAt: string | Date;
  bills: BillRow[];
  user?: UserLite; // 👈 cliente dueño de la solicitud
}

@Component({
  selector: 'app-admin-review',
  templateUrl: './admin-review.component.html',
  styleUrls: ['./admin-review.component.scss'],
  providers: [DatePipe, CurrencyPipe],
})
export class AdminReviewComponent implements OnInit, OnDestroy {
  // Grid: chevron + [ID, Cliente, Nº facturas, Total, Estado, Acciones]
  cols = ['id', 'client', 'bills', 'total', 'status', 'actions'];

  rows: RequestItem[] = [];
  expanded = new Set<number>();
  loading = false;

  private subSocketNew?: Subscription;
  private subSocketChanged?: Subscription;

  constructor(
    private api: RequestsService,
    private dialog: MatDialog,
    private snack: MatSnackBar,
    private socket: SocketService,
    private date: DatePipe,
    private currency: CurrencyPipe,
  ) {}

  ngOnInit(): void {
    this.load();

    // 🔔 Notificación: solicitud creada por cliente
    this.subSocketNew = this.socket.onAdminRequestCreated().subscribe((p) => {
      this.snack.open(`Nueva solicitud #${p?.requestId} recibida`, 'OK', {
        duration: 2000,
      });
      this.load();
    });

    // 🔔 Cambios entre admins (aprob/rech)
    this.subSocketChanged = this.socket
      .onAdminRequestsChanged()
      .subscribe(() => this.load());
  }

  ngOnDestroy(): void {
    this.subSocketNew?.unsubscribe();
    this.subSocketChanged?.unsubscribe();
  }

  /* ========= Data ========= */

  load(): void {
    this.loading = true;
    this.api.list().subscribe({
      next: (res) => {
        // Sólo en REVISIÓN
        this.rows = (res || []).filter((x) => x.status === 'REVIEW');
        this.loading = false;
      },
      error: () => {
        this.snack.open('No se pudo cargar la lista', 'Cerrar', {
          duration: 2500,
        });
        this.loading = false;
      },
    });
  }

  /* ========= Helpers de vista ========= */

  hasRows(): boolean {
    return this.rows.length > 0;
  }
  isExpanded(id: number): boolean {
    return this.expanded.has(id);
  }
  toggleRow(r: RequestItem): void {
    this.isExpanded(r.id)
      ? this.expanded.delete(r.id)
      : this.expanded.add(r.id);
  }
  expandAll(): void {
    this.rows.forEach((r) => this.expanded.add(r.id));
  }
  collapseAll(): void {
    this.expanded.clear();
  }

  fmtDate(v: string | Date | null | undefined): string {
    if (!v) return '';
    return this.date.transform(v, 'dd/MM/yyyy, HH:mm') ?? '';
  }

  toNumber(v: any): number {
    if (typeof v === 'number') return v;
    if (typeof v === 'string') {
      const n = Number(v.replace(',', '.'));
      return Number.isFinite(n) ? n : 0;
    }
    return 0;
  }

  fmtAmount(v: any): string {
    return (
      this.currency.transform(this.toNumber(v), 'EUR', 'symbol', '1.2-2') ?? ''
    );
  }

  fmtBillAmount(v: any): string {
    return this.fmtAmount(v);
  }

  totalAmount(r: RequestItem): number {
    return (r.bills ?? []).reduce((sum, b) => sum + this.toNumber(b.amount), 0);
  }

  statusClass(status?: string): string {
    const s = (status || '').toUpperCase();
    if (s === 'PENDING') return 'st-pending';
    if (s === 'REVIEW') return 'st-review';
    if (s === 'APPROVED') return 'st-approved';
    if (s === 'REJECTED') return 'st-rejected';
    return 'st-unknown';
  }

  clientLabel(r: RequestItem): string {
    return r.user?.companyName || r.user?.name || r.user?.email || '—';
  }

  /* ========= Acciones ========= */

  approve(r: RequestItem): void {
    this.dialog
      .open(ConfirmDialogComponent, {
        data: {
          title: 'Confirmación',
          message: `¿Está seguro de anticipar ${r.bills?.length} factura(s)?`,
        },
      })
      .afterClosed()
      .subscribe((ok) => {
        if (!ok) return;
        this.api.approve(r.id).subscribe({
          next: () => {
            this.snack.open('Solicitud aprobada', 'Cerrar', { duration: 1500 });
            this.load();
          },
          error: () =>
            this.snack.open('No se pudo aprobar', 'Cerrar', { duration: 2500 }),
        });
      });
  }

  reject(r: RequestItem): void {
    this.dialog
      .open(ConfirmDialogComponent, {
        data: {
          title: 'Cancelar',
          message: '¿Está seguro de cancelar la solicitud?',
        },
      })
      .afterClosed()
      .subscribe((ok) => {
        if (!ok) return;
        this.api.reject(r.id).subscribe({
          next: () => {
            this.snack.open('Solicitud rechazada', 'Cerrar', {
              duration: 1500,
            });
            this.load();
          },
          error: () =>
            this.snack.open('No se pudo cancelar', 'Cerrar', {
              duration: 2500,
            }),
        });
      });
  }
}
