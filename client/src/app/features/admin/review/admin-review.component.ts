import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { BillDialogComponent } from '../../client/bills/bill-dialog/bill-dialog.component';
import { RequestsService } from '../../../core/services/requests.service';
import { SocketService } from '../../../core/services/socket.service';
import { ConfirmDialogComponent } from '../../../shared/components/confirm-dialog/confirm-dialog.component';

import { DatePipe, CurrencyPipe } from '@angular/common';
import { Subscription } from 'rxjs';

interface DebtorLite {
  companyName?: string;
}
interface BillRow {
  id: number;
  invoiceNumber: string;
  amount: any;
  issueDate: string | Date;
  dueDate: string | Date;
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
  selected?: boolean;
}

type SortColumn =
  | 'status'
  | 'debtor'
  | 'invoice'
  | 'amount'
  | 'issueDate'
  | 'dueDate'
  | 'createdAt';
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

  cols = [
    'status',
    'debtor',
    'invoice',
    'amount',
    'issueDate',
    'dueDate',
    'actions',
  ];

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
        case 'status':
          aVal = a.status;
          bVal = b.status;
          break;
        case 'debtor':
          aVal = this.getFirstBillDebtor(a);
          bVal = this.getFirstBillDebtor(b);
          break;
        case 'invoice':
          aVal = this.getFirstInvoiceNumber(a);
          bVal = this.getFirstInvoiceNumber(b);
          break;
        case 'amount':
          aVal = this.getFirstBillAmountValue(a);
          bVal = this.getFirstBillAmountValue(b);
          break;
        case 'issueDate':
          aVal = this.getFirstIssueDateValue(a);
          bVal = this.getFirstIssueDateValue(b);
          break;
        case 'dueDate':
          aVal = this.getFirstDueDateValue(a);
          bVal = this.getFirstDueDateValue(b);
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

  fmtDate(v: string | Date | null | undefined): string {
    if (!v) return '';
    return this.date.transform(v, 'dd/MM/yyyy') ?? '';
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

  statusClass(status?: string): string {
    const s = (status || '').toUpperCase();
    if (s === 'PENDING') return 'st-pending';
    if (s === 'REVIEW') return 'st-pending';
    if (s === 'APPROVED') return 'st-approved';
    if (s === 'REJECTED') return 'st-rejected';
    return 'st-unknown';
  }

  getFirstBillDebtor(r: RequestItem): string {
    if (!r.bills || r.bills.length === 0) return '—';
    return r.bills[0].debtor?.companyName || '—';
  }

  getFirstInvoiceNumber(r: RequestItem): string {
    if (!r.bills || r.bills.length === 0) return '—';
    return r.bills[0].invoiceNumber || '—';
  }

  getFirstBillAmount(r: RequestItem): string {
    if (!r.bills || r.bills.length === 0) return '—';
    return this.fmtAmount(r.bills[0].amount);
  }

  getFirstBillAmountValue(r: RequestItem): number {
    if (!r.bills || r.bills.length === 0) return 0;
    return this.toNumber(r.bills[0].amount);
  }

  getFirstIssueDate(r: RequestItem): string {
    if (!r.bills || r.bills.length === 0) return '—';
    return this.fmtDate(r.bills[0].issueDate);
  }

  getFirstIssueDateValue(r: RequestItem): number {
    if (!r.bills || r.bills.length === 0) return 0;
    return new Date(r.bills[0].issueDate).getTime();
  }

  getFirstDueDate(r: RequestItem): string {
    if (!r.bills || r.bills.length === 0) return '—';
    return this.fmtDate(r.bills[0].dueDate);
  }

  getFirstDueDateValue(r: RequestItem): number {
    if (!r.bills || r.bills.length === 0) return 0;
    return new Date(r.bills[0].dueDate).getTime();
  }

  canSelectRow(r: RequestItem): boolean {
    const s = (r.status || '').toUpperCase();
    const canSelect = s === 'REVIEW' || s === 'PENDING';
    // Si no puede seleccionarse y está seleccionada, deseleccionar
    if (!canSelect && r.selected) {
      r.selected = false;
    }
    return canSelect;
  }

  /* ========= Selección de filas ========= */

  hasSelectedRows(): boolean {
    return this.allRows.some((r) => r.selected);
  }

  getTotalSelectedCount(): number {
    return this.allRows.filter((r) => r.selected).length;
  }

  isAllCurrentPageSelected(): boolean {
    if (this.paginatedRows.length === 0) return false;
    const selectableRows = this.paginatedRows.filter((r) =>
      this.canSelectRow(r),
    );
    if (selectableRows.length === 0) return false;
    return selectableRows.every((r) => r.selected);
  }

  isCurrentPageIndeterminate(): boolean {
    if (this.paginatedRows.length === 0) return false;
    const selectableRows = this.paginatedRows.filter((r) =>
      this.canSelectRow(r),
    );
    if (selectableRows.length === 0) return false;
    const selectedCount = selectableRows.filter((r) => r.selected).length;
    return selectedCount > 0 && selectedCount < selectableRows.length;
  }

  toggleSelectAllCurrentPage(event: MatCheckboxChange): void {
    const checked = event.checked;
    const selectableRows = this.paginatedRows.filter((r) =>
      this.canSelectRow(r),
    );
    selectableRows.forEach((r) => {
      r.selected = checked;
    });
  }

  onCheckboxChange(r: RequestItem): void {
    // Método para manejar cambios en los checkboxes
  }

  /* ========= Acciones ========= */

  approveSelected(): void {
    const selected = this.allRows.filter((r) => r.selected);
    if (selected.length === 0) return;

    const totalBills = selected.reduce(
      (sum, r) => sum + (r.bills?.length ?? 0),
      0,
    );

    this.dialog
      .open(ConfirmDialogComponent, {
        data: {
          title: 'Confirmación',
          message: `¿Está seguro de anticipar ${selected.length} solicitud(es) con ${totalBills} factura(s)?`,
        },
      })
      .afterClosed()
      .subscribe((ok) => {
        if (!ok) return;

        let completed = 0;
        let errors = 0;

        selected.forEach((r) => {
          this.api.approve(r.id).subscribe({
            next: () => {
              completed++;
              if (completed + errors === selected.length) {
                this.snack.open(
                  `${completed} solicitud(es) aprobada(s)`,
                  'Cerrar',
                  { duration: 1500 },
                );
                this.load();
              }
            },
            error: () => {
              errors++;
              if (completed + errors === selected.length) {
                this.snack.open(
                  `${completed} aprobada(s), ${errors} error(es)`,
                  'Cerrar',
                  { duration: 2500 },
                );
                this.load();
              }
            },
          });
        });
      });
  }

  rejectSelected(): void {
    const selected = this.allRows.filter((r) => r.selected);
    if (selected.length === 0) return;

    this.dialog
      .open(ConfirmDialogComponent, {
        data: {
          title: 'Cancelar',
          message: `¿Está seguro de cancelar ${selected.length} solicitud(es)?`,
        },
      })
      .afterClosed()
      .subscribe((ok) => {
        if (!ok) return;

        let completed = 0;
        let errors = 0;

        selected.forEach((r) => {
          this.api.reject(r.id).subscribe({
            next: () => {
              completed++;
              if (completed + errors === selected.length) {
                this.snack.open(
                  `${completed} solicitud(es) rechazada(s)`,
                  'Cerrar',
                  { duration: 1500 },
                );
                this.load();
              }
            },
            error: () => {
              errors++;
              if (completed + errors === selected.length) {
                this.snack.open(
                  `${completed} rechazada(s), ${errors} error(es)`,
                  'Cerrar',
                  { duration: 2500 },
                );
                this.load();
              }
            },
          });
        });
      });
  }

  openBillDetail(item: RequestItem): void {
    if (item.bills && item.bills.length > 0) {
      const bill = item.bills[0];
      const dialogRef = this.dialog.open(BillDialogComponent, {
        data: bill,
        width: '600px',
      });

      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          this.load();
        }
      });
    }
  }
}
