import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
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
  fiscalId?: string;
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

/** Estados (sin busy) */
type ModalState = 'confirm' | 'success' | 'error';

interface ClientGroup {
  userId: number;
  user?: UserLite;
  requests: RequestItem[];
  searchQuery: string;
  selectedStatus: RequestStatus | null;
  sortColumn: SortColumn;
  sortDirection: SortDirection;
  filtered: RequestItem[];
  paginated: RequestItem[];
  pageSize: number;
  pageIndex: number;

  anticiparState: ModalState;
  rechazarState: ModalState;
  anticiparResult?: { completed: number; errors: number };
  rechazarResult?: { completed: number; errors: number };
}

@Component({
  selector: 'app-admin-review',
  templateUrl: './admin-review.component.html',
  styleUrls: ['./admin-review.component.scss'],
  providers: [DatePipe, CurrencyPipe],
})
export class AdminReviewComponent implements OnInit, OnDestroy {
  allRows: RequestItem[] = [];
  groups: ClientGroup[] = [];
  loading = false;
  expanded = new Set<number>();

  private subSocketNew?: Subscription;
  private subSocketChanged?: Subscription;

  /** Mientras mostramos success/error, bloqueamos recargas para no cerrar la modal por reconstrucción */
  private lockReload = false;
  /** Si llegan sockets durante lock, podríamos usarla; en tu caso recargaremos siempre al cerrar */
  // private pendingReload = false;

  constructor(
    private api: RequestsService,
    private dialog: MatDialog,
    private socket: SocketService,
    private date: DatePipe,
    private currency: CurrencyPipe,
  ) {}

  ngOnInit(): void {
    this.load();

    this.subSocketNew = this.socket.onAdminRequestCreated().subscribe(() => {
      if (!this.lockReload) this.load();
      // else this.pendingReload = true;
    });

    this.subSocketChanged = this.socket
      .onAdminRequestsChanged()
      .subscribe(() => {
        if (!this.lockReload) this.load();
        // else this.pendingReload = true;
      });
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
        this.allRows = res || [];
        this.buildGroups();
        this.loading = false;
      },
      error: () => {
        // Sin snackbar (lo pediste). Podrías loguear si quieres:
        // console.error('No se pudo cargar la lista');
        this.loading = false;
      },
    });
  }

  buildGroups(): void {
    const map = new Map<number, RequestItem[]>();
    for (const r of this.allRows) {
      const uid = r.user?.id ?? -1;
      if (!map.has(uid)) map.set(uid, []);
      map.get(uid)!.push(r);
    }

    this.groups = Array.from(map.entries()).map(([userId, requests]) => {
      const user = requests[0]?.user;
      const g: ClientGroup = {
        userId,
        user,
        requests,
        searchQuery: '',
        selectedStatus: null,
        sortColumn: 'createdAt',
        sortDirection: 'desc',
        filtered: [],
        paginated: [],
        pageSize: 10,
        pageIndex: 0,

        anticiparState: 'confirm',
        rechazarState: 'confirm',
      };
      this.applyFiltersAndSortGroup(g);
      return g;
    });
  }

  applyFiltersAndSortGroup(g: ClientGroup): void {
    let filtered = g.requests;

    if (g.searchQuery) {
      const q = g.searchQuery.toLowerCase();
      filtered = filtered.filter((r) => {
        const debtorName = this.getFirstBillDebtor(r).toLowerCase();
        const userName = r.user?.name?.toLowerCase() || '';
        const companyName = r.user?.companyName?.toLowerCase() || '';
        return (
          debtorName.includes(q) ||
          userName.includes(q) ||
          companyName.includes(q)
        );
      });
    }

    if (g.selectedStatus) {
      filtered = filtered.filter((r) => r.status === g.selectedStatus);
    }

    filtered = this.sortData(filtered, g.sortColumn, g.sortDirection);
    g.filtered = filtered;
    g.pageIndex = 0;
    this.updatePaginatedRowsGroup(g);
  }

  sortData(
    data: RequestItem[],
    sortColumn: SortColumn,
    sortDirection: SortDirection,
  ): RequestItem[] {
    const sorted = [...data].sort((a, b) => {
      let aVal: any, bVal: any;
      switch (sortColumn) {
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
          aVal = this.toNumber(this.getFirstBillAmountValue(a));
          bVal = this.toNumber(this.getFirstBillAmountValue(b));
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
      if (aVal < bVal) return sortDirection === 'asc' ? -1 : 1;
      if (aVal > bVal) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
    return sorted;
  }

  onSortGroup(g: ClientGroup, column: SortColumn): void {
    if (g.sortColumn === column)
      g.sortDirection = g.sortDirection === 'asc' ? 'desc' : 'asc';
    else {
      g.sortColumn = column;
      g.sortDirection = 'asc';
    }
    this.applyFiltersAndSortGroup(g);
  }

  getSortIconGroup(g: ClientGroup, column: SortColumn): string {
    if (g.sortColumn !== column) return 'unfold_more';
    return g.sortDirection === 'asc' ? 'arrow_upward' : 'arrow_downward';
  }

  onPageChangeGroup(g: ClientGroup, event: PageEvent): void {
    g.pageIndex = event.pageIndex;
    g.pageSize = event.pageSize;
    this.updatePaginatedRowsGroup(g);
  }

  updatePaginatedRowsGroup(g: ClientGroup): void {
    const start = g.pageIndex * g.pageSize;
    const end = start + g.pageSize;
    g.paginated = g.filtered.slice(start, end);
  }

  /* ========= Display helpers ========= */

  getFirstIssueDateValue(item: RequestItem): string {
    return item.bills[0]?.issueDate
      ? this.date.transform(item.bills[0].issueDate, 'dd/MM/yyyy') || ''
      : '';
  }
  getFirstDueDateValue(item: RequestItem): string {
    return item.bills[0]?.dueDate
      ? this.date.transform(item.bills[0].dueDate, 'dd/MM/yyyy') || ''
      : '';
  }
  getFirstBillDebtor(item: RequestItem): string {
    return item.bills[0]?.debtor?.companyName || 'Desconocido';
  }
  getFirstInvoiceNumber(item: RequestItem): string {
    return item.bills[0]?.invoiceNumber || 'Sin número';
  }
  getFirstBillAmount(item: RequestItem): string {
    return item.bills[0]?.amount
      ? this.currency.transform(
          item.bills[0].amount,
          'EUR',
          'symbol',
          '1.2-2',
        ) || '0 €'
      : '0 €';
  }
  getFirstIssueDate(item: RequestItem): string {
    return this.getFirstIssueDateValue(item);
  }
  getFirstDueDate(item: RequestItem): string {
    return this.getFirstDueDateValue(item);
  }
  getFirstBillAmountValue(item: RequestItem): string {
    return item.bills[0]?.amount ? String(item.bills[0].amount) : '0';
  }

  toNumber(v: any): number {
    if (typeof v === 'number') return v;
    if (typeof v === 'string') {
      const n = Number(v.replace(',', '.'));
      return Number.isFinite(n) ? n : 0;
    }
    return 0;
  }

  statusLabel(status?: string): string {
    const s = (status || '').toUpperCase();
    if (s === 'PENDING' || s === 'REVIEW') return 'Pendiente';
    if (s === 'APPROVED') return 'Validada';
    if (s === 'REJECTED') return 'Rechazada';
    return status || '';
  }
  statusClass(status?: string): string {
    const s = (status || '').toUpperCase();
    if (s === 'PENDING' || s === 'REVIEW') return 'st-pending';
    if (s === 'APPROVED') return 'st-approved';
    if (s === 'REJECTED') return 'st-rejected';
    return 'st-unknown';
  }

  canSelectRow(r: RequestItem): boolean {
    const s = (r.status || '').toUpperCase();
    const canSelect = s === 'REVIEW' || s === 'PENDING';
    if (!canSelect && r.selected) r.selected = false;
    return canSelect;
  }

  /* ========= Selección ========= */

  getTotalSelectedCountGroup(g: ClientGroup): number {
    return g.requests.filter((row) => row.selected).length;
  }
  hasSelectedRowsGroup(g: ClientGroup): boolean {
    return this.getTotalSelectedCountGroup(g) > 0;
  }
  isAllCurrentPageSelectedGroup(g: ClientGroup): boolean {
    if (g.paginated.length === 0) return false;
    const selectable = g.paginated.filter((r) => this.canSelectRow(r));
    if (selectable.length === 0) return false;
    return selectable.every((r) => r.selected);
  }
  isCurrentPageIndeterminateGroup(g: ClientGroup): boolean {
    if (g.paginated.length === 0) return false;
    const selectable = g.paginated.filter((r) => this.canSelectRow(r));
    if (selectable.length === 0) return false;
    const selectedCount = selectable.filter((r) => r.selected).length;
    return selectedCount > 0 && selectedCount < selectable.length;
  }
  toggleSelectAllCurrentPageGroup(g: ClientGroup, checked: boolean): void {
    const selectable = g.paginated.filter((r) => this.canSelectRow(r));
    selectable.forEach((r) => (r.selected = checked));
  }
  onCheckboxChange(_r: RequestItem): void {}

  totalSelectedBills(g: ClientGroup): number {
    return g.requests
      .filter((r) => r.selected)
      .reduce((sum, r) => sum + (r.bills?.length ?? 0), 0);
  }

  /* ========= Acciones ========= */

  private runApproveSelected(
    g: ClientGroup,
    onDone?: (completed: number, errors: number) => void,
  ): void {
    const selected = g.requests.filter((r) => r.selected);
    if (selected.length === 0) {
      onDone?.(0, 0);
      return;
    }

    let completed = 0,
      errors = 0;
    selected.forEach((r) => {
      this.api.approve(r.id).subscribe({
        next: () => {
          completed++;
          if (completed + errors === selected.length)
            onDone?.(completed, errors);
        },
        error: () => {
          errors++;
          if (completed + errors === selected.length)
            onDone?.(completed, errors);
        },
      });
    });
  }

  private runRejectSelected(
    g: ClientGroup,
    onDone?: (completed: number, errors: number) => void,
  ): void {
    const selected = g.requests.filter((r) => r.selected);
    if (selected.length === 0) {
      onDone?.(0, 0);
      return;
    }

    let completed = 0,
      errors = 0;
    selected.forEach((r) => {
      this.api.reject(r.id).subscribe({
        next: () => {
          completed++;
          if (completed + errors === selected.length)
            onDone?.(completed, errors);
        },
        error: () => {
          errors++;
          if (completed + errors === selected.length)
            onDone?.(completed, errors);
        },
      });
    });
  }

  /** ConfirmDialog (se mantienen, sin snackbars) */
  approveSelectedGroup(g: ClientGroup): void {
    const selected = g.requests.filter((r) => r.selected);
    if (selected.length === 0) return;

    this.dialog
      .open(ConfirmDialogComponent, {
        data: {
          title: 'Confirmación',
          message:
            selected.length > 1
              ? `La selección de estos ${selected.length} anticipos supera los parámetros de importe o vencimiento permitidos.`
              : `La selección de este anticipo supera los parámetros de importe o vencimiento permitidos.`,
          subMessage: `¿Desea confirmar la operación?`,
        },
      })
      .afterClosed()
      .subscribe((ok) => ok && this.runApproveSelected(g));
  }

  rejectSelectedGroup(g: ClientGroup): void {
    const selected = g.requests.filter((r) => r.selected);
    if (selected.length === 0) return;

    this.dialog
      .open(ConfirmDialogComponent, {
        data: {
          title: 'Cancelar',
          message: `Va a rechazar el anticipo de ${selected.length} solicitud(es)`,
          subMessage: `¿Desea confirmar la operación?`,
        },
      })
      .afterClosed()
      .subscribe((ok) => ok && this.runRejectSelected(g));
  }

  /* ========= Modales (web component) ========= */

  openAthModal(el: any): void {
    if (!el) return;
    if (typeof el.openModal === 'function') el.openModal();
    else el.setAttribute('open', 'true');
  }
  closeAthModal(el: any): void {
    if (!el) return;
    if (typeof el.closeModal === 'function') el.closeModal();
    else el.removeAttribute('open');
  }

  /** Aceptar ANTICIPAR → no cerrar; mostrar success/error y bloquear recargas */
  confirmAnticipar(g: ClientGroup, _el: any): void {
    this.lockReload = true;
    this.runApproveSelected(g, (completed, errors) => {
      g.anticiparResult = { completed, errors };
      g.anticiparState = errors === 0 ? 'success' : 'error';
    });
  }

  /** Aceptar RECHAZAR → no cerrar; mostrar success/error y bloquear recargas */
  confirmRechazar(g: ClientGroup, _el: any): void {
    this.lockReload = true;
    this.runRejectSelected(g, (completed, errors) => {
      g.rechazarResult = { completed, errors };
      g.rechazarState = errors === 0 ? 'success' : 'error';
    });
  }

  /**
   * Handler del aspa/cierre real de la modal (evento nativo `athClosed`)
   * - Resetea el estado
   * - Libera el lock
   * - Recarga el DOM (this.load())
   */
  onModalClosed(g: ClientGroup, kind: 'anticipar' | 'rechazar'): void {
    if (kind === 'anticipar') {
      g.anticiparState = 'confirm';
      g.anticiparResult = undefined;
    } else {
      g.rechazarState = 'confirm';
      g.rechazarResult = undefined;
    }
    this.lockReload = false;
    this.load();
  }

  /* ========= Búsqueda ========= */

  onSearchChange(value: string, g: ClientGroup): void {
    g.searchQuery = (value || '').trim();
    this.applyFiltersAndSortGroup(g);
  }
  applySearch(value: string, g: ClientGroup): void {
    g.searchQuery = (value || '').trim();
    this.applyFiltersAndSortGroup(g);
  }
  onSearchClear(g: ClientGroup, el?: any): void {
    if (el) el.value = '';
    g.searchQuery = '';
    this.applyFiltersAndSortGroup(g);
  }
  onStatusChange(g: ClientGroup): void {
    this.applyFiltersAndSortGroup(g);
  }

  /* ========= Detalle factura ========= */

  openBillDetail(item: RequestItem): void {
    if (item.bills && item.bills.length > 0) {
      const bill = item.bills[0];
      const dialogRef = this.dialog.open(BillDialogComponent, {
        data: bill,
        width: '600px',
      });
      dialogRef.afterClosed().subscribe((result) => {
        if (result) this.load();
      });
    }
  }

  /* ========= Paginación ========= */

  onAthPaginateGroup(g: ClientGroup, pageOneBased: number): void {
    g.pageIndex = Math.max(0, (pageOneBased ?? 1) - 1);
    this.updatePaginatedRowsGroup(g);
  }
  onAthItemsPerPageChangeGroup(g: ClientGroup, itemsPerPage: number): void {
    const size = Number(itemsPerPage) || 10;
    g.pageSize = size;
    g.pageIndex = 0;
    this.updatePaginatedRowsGroup(g);
  }
}
