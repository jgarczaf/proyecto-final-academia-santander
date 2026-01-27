import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

import { RequestsService } from '../../../core/services/requests.service';
import { SocketService } from '../../../core/services/socket.service';
import { ConfirmDialogComponent } from '../../../shared/components/confirm-dialog/confirm-dialog.component';

import { DatePipe, CurrencyPipe } from '@angular/common';
import { Subscription } from 'rxjs';

// === Modelos mínimos para tipado local ===
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
  user?: UserLite;
}

type SortColumn = 'id' | 'client' | 'bills' | 'total' | 'status' | 'createdAt';
type SortDirection = 'asc' | 'desc';

@Component({
  selector: 'app-admin-review',
  templateUrl: './admin-review.component.html',
  styleUrls: ['./admin-review.component.scss'],
  providers: [DatePipe, CurrencyPipe],
})
export class AdminReviewComponent implements OnInit, OnDestroy {
  // Tabs de estado
  statusTabs: { label: string; value: RequestStatus | null }[] = [
    { label: 'Todas', value: null },
    { label: 'Validadas', value: 'APPROVED' },
    { label: 'Pendientes de revisión', value: 'REVIEW' },
    { label: 'Rechazadas', value: 'REJECTED' },
  ];
  selectedStatus: RequestStatus | null = null;

  // Datos y vista
  allRows: RequestItem[] = [];
  rows: RequestItem[] = [];
  paginatedRows: RequestItem[] = [];
  expanded = new Set<number>();
  loading = false;

  // Ordenación
  sortColumn: SortColumn = 'createdAt';
  sortDirection: SortDirection = 'desc';

  // Paginación
  pageSize = 10;
  pageIndex = 0;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  cols = ['id', 'client', 'bills', 'total', 'status', 'actions'];

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

    this.subSocketNew = this.socket.onAdminRequestCreated().subscribe((p) => {
      this.snack.open(`Nueva solicitud #${p?.requestId} recibida`, 'OK', {
        duration: 2000,
      });
      this.load();
    });

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
        // CARGAR TODAS, sin filtrar por status
        this.allRows = res || [];
        this.applyFiltersAndSort();
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

  /* ========= Filtrado y Ordenación ========= */

  onTabChange(status: RequestStatus | null): void {
    this.selectedStatus = status;
    this.applyFiltersAndSort();
  }

  applyFiltersAndSort(): void {
    // Aplicar filtro de estado
    let filtered = this.allRows;
    if (this.selectedStatus) {
      filtered = filtered.filter((r) => r.status === this.selectedStatus);
    }

    // Aplicar ordenación
    filtered = this.sortData(filtered);
    this.rows = filtered;

    // Reset pagination when filters/sort change
    this.pageIndex = 0;
    this.updatePaginatedRows();
    this.expanded.clear();
  }

  sortData(data: RequestItem[]): RequestItem[] {
    const sorted = [...data].sort((a, b) => {
      let aVal: any, bVal: any;

      switch (this.sortColumn) {
        case 'id':
          aVal = a.id;
          bVal = b.id;
          break;
        case 'client':
          aVal = this.clientLabel(a);
          bVal = this.clientLabel(b);
          break;
        case 'bills':
          aVal = a.bills?.length ?? 0;
          bVal = b.bills?.length ?? 0;
          break;
        case 'total':
          aVal = this.totalAmount(a);
          bVal = this.totalAmount(b);
          break;
        case 'status':
          aVal = a.status;
          bVal = b.status;
          break;
        case 'createdAt':
          aVal = new Date(a.createdAt).getTime();
          bVal = new Date(b.createdAt).getTime();
          break;
      }

      if (aVal < bVal) return this.sortDirection === 'asc' ? -1 : 1;
      if (aVal > bVal) return this.sortDirection === 'asc' ? 1 : -1;
      return 0;
    });

    return sorted;
  }

  onSort(column: SortColumn): void {
    if (this.sortColumn === column) {
      // Toggle dirección
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      // Nueva columna
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }
    this.applyFiltersAndSort();
  }

  getSortIcon(column: SortColumn): string {
    if (this.sortColumn !== column) return 'unfold_more';
    return this.sortDirection === 'asc' ? 'arrow_upward' : 'arrow_downward';
  }

  onPageChange(event: PageEvent): void {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.updatePaginatedRows();
  }

  updatePaginatedRows(): void {
    const start = this.pageIndex * this.pageSize;
    const end = start + this.pageSize;
    this.paginatedRows = this.rows.slice(start, end);
  }

  statusLabel(status?: string): string {
    const s = (status || '').toUpperCase();
    if (s === 'REVIEW') return 'Pendiente';
    if (s === 'APPROVED') return 'Validada';
    if (s === 'REJECTED') return 'Rechazada';
    if (s === 'PENDING') return 'Pendiente';
    return status || '';
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
    if (s === 'REVIEW') return 'st-pending'; // Pendiente de revisión = amarillo
    if (s === 'APPROVED') return 'st-approved'; // Validada = verde
    if (s === 'REJECTED') return 'st-rejected'; // Rechazada = rojo
    return 'st-unknown';
  }

  clientLabel(r: RequestItem): string {
    return r.user?.companyName || r.user?.name || r.user?.email || '—';
  }

  canAction(status?: string): boolean {
    const s = (status || '').toUpperCase();
    return s === 'REVIEW' || s === 'PENDING';
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
