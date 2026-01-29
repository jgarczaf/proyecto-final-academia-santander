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

/** Grupo por empresa cedente (cliente) */
interface ClientGroup {
  userId: number;
  user?: UserLite;
  /** Todas las solicitudes del cliente */
  requests: RequestItem[];
  /** Estado de filtros/ordenación por grupo */
  searchQuery: string;
  selectedStatus: RequestStatus | null;
  sortColumn: SortColumn;
  sortDirection: SortDirection;
  /** Derivados */
  filtered: RequestItem[];
  paginated: RequestItem[];
  pageSize: number;
  pageIndex: number;
}

@Component({
  selector: 'app-admin-review',
  templateUrl: './admin-review.component.html',
  styleUrls: ['./admin-review.component.scss'],
  providers: [DatePipe, CurrencyPipe],
})
export class AdminReviewComponent implements OnInit, OnDestroy {
  // Datos crudos
  allRows: RequestItem[] = [];

  // Grupos por cliente (empresa cedente)
  groups: ClientGroup[] = [];

  // Control general
  loading = false;
  expanded = new Set<number>();

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
        this.allRows = res || [];
        this.buildGroups();
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

  /** Construye grupos por usuario (empresa cedente) y aplica filtros/orden/paginación por grupo */
  buildGroups(): void {
    const map = new Map<number, RequestItem[]>();

    // Agrupar por user.id (si no existe, agrupar en -1)
    for (const r of this.allRows) {
      const uid = r.user?.id ?? -1;
      if (!map.has(uid)) map.set(uid, []);
      map.get(uid)!.push(r);
    }

    // Crear estructura de grupo con defaults
    this.groups = Array.from(map.entries()).map(([userId, requests]) => {
      const user = requests[0]?.user; // todos comparten el mismo user
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
      };
      this.applyFiltersAndSortGroup(g);
      return g;
    });
  }

  /** Aplica filtros y ordenación a un grupo */
  applyFiltersAndSortGroup(g: ClientGroup): void {
    let filtered = g.requests;

    // Filtro por búsqueda (deudor, nombre de usuario o companyName del usuario)
    if (g.searchQuery) {
      const query = g.searchQuery.toLowerCase();
      filtered = filtered.filter((r) => {
        const debtorName = this.getFirstBillDebtor(r).toLowerCase();
        const userName = r.user?.name?.toLowerCase() || '';
        const companyName = r.user?.companyName?.toLowerCase() || '';
        return (
          debtorName.includes(query) ||
          userName.includes(query) ||
          companyName.includes(query)
        );
      });
    }

    // Filtro por estado
    if (g.selectedStatus) {
      filtered = filtered.filter((r) => r.status === g.selectedStatus);
    }

    // Ordenación
    filtered = this.sortData(filtered, g.sortColumn, g.sortDirection);

    // Asignar y paginar
    g.filtered = filtered;
    g.pageIndex = 0; // reset al cambiar filtros/orden
    this.updatePaginatedRowsGroup(g);
  }

  /** Ordena según columna/dirección dadas */
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

  /** Cambia la ordenación del grupo */
  onSortGroup(g: ClientGroup, column: SortColumn): void {
    if (g.sortColumn === column) {
      g.sortDirection = g.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
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

  /* ========= Display Methods ========= */

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
    if (s === 'PENDING') return 'Pendiente';
    if (s === 'REVIEW') return 'Pendiente';
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
    if (!canSelect && r.selected) {
      r.selected = false;
    }
    return canSelect;
  }

  /* ========= Selección (por grupo) ========= */

  getTotalSelectedCountGroup(g: ClientGroup): number {
    return g.requests.filter((row) => row.selected).length;
  }

  hasSelectedRowsGroup(g: ClientGroup): boolean {
    return this.getTotalSelectedCountGroup(g) > 0;
  }

  isAllCurrentPageSelectedGroup(g: ClientGroup): boolean {
    if (g.paginated.length === 0) return false;
    const selectableRows = g.paginated.filter((r) => this.canSelectRow(r));
    if (selectableRows.length === 0) return false;
    return selectableRows.every((r) => r.selected);
  }

  isCurrentPageIndeterminateGroup(g: ClientGroup): boolean {
    if (g.paginated.length === 0) return false;
    const selectableRows = g.paginated.filter((r) => this.canSelectRow(r));
    if (selectableRows.length === 0) return false;
    const selectedCount = selectableRows.filter((r) => r.selected).length;
    return selectedCount > 0 && selectedCount < selectableRows.length;
  }

  toggleSelectAllCurrentPageGroup(
    g: ClientGroup,
    event: MatCheckboxChange,
  ): void {
    const checked = event.checked;
    const selectableRows = g.paginated.filter((r) => this.canSelectRow(r));
    selectableRows.forEach((r) => {
      r.selected = checked;
    });
  }

  /* ========= Acciones (por grupo) ========= */

  approveSelectedGroup(g: ClientGroup): void {
    const selected = g.requests.filter((r) => r.selected);
    if (selected.length === 0) return;

    const totalBills = selected.reduce(
      (sum, r) => sum + (r.bills?.length ?? 0),
      0,
    );

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
                  {
                    duration: 1500,
                  },
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
                  {
                    duration: 2500,
                  },
                );
                this.load();
              }
            },
          });
        });
      });
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
                  {
                    duration: 1500,
                  },
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
                  {
                    duration: 2500,
                  },
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
}
