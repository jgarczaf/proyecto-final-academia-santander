import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../../../core/services/requests.service';
import { DatePipe, CurrencyPipe } from '@angular/common';
import {
  IRequestItem,
  IBillRow,
  IClientGroup,
  SortColumn,
  SortDirection,
} from 'src/app/core/models/models';

@Component({
  selector: 'app-admin-review',
  templateUrl: './admin-review.component.html',
  styleUrls: ['./admin-review.component.scss'],
  providers: [DatePipe, CurrencyPipe],
})
export class AdminReviewComponent implements OnInit {
  allRows: IRequestItem[] = [];
  billDetail: IBillRow | null = null;
  groups: IClientGroup[] = [];
  loading: boolean = false;

  constructor(
    private requestService: RequestsService,
    private date: DatePipe,
    private currency: CurrencyPipe,
  ) {}

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.loading = true;
    this.requestService.list().subscribe({
      next: (res) => {
        this.allRows = res || [];
        this.buildGroups();
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      },
    });
  }

  buildGroups(): void {
    const map = new Map<number, IRequestItem[]>();
    for (const r of this.allRows) {
      const uid = r.user?.id ?? -1;
      if (!map.has(uid)) map.set(uid, []);
      map.get(uid)!.push(r);
    }

    this.groups = Array.from(map.entries()).map(([userId, requests]) => {
      const user = requests[0]?.user;
      const g: IClientGroup = {
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

  applyFiltersAndSortGroup(g: IClientGroup): void {
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
    data: IRequestItem[],
    sortColumn: SortColumn,
    sortDirection: SortDirection,
  ): IRequestItem[] {
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

  onSortGroup(g: IClientGroup, column: SortColumn): void {
    if (g.sortColumn === column)
      g.sortDirection = g.sortDirection === 'asc' ? 'desc' : 'asc';
    else {
      g.sortColumn = column;
      g.sortDirection = 'asc';
    }
    this.applyFiltersAndSortGroup(g);
  }

  getSortIconGroup(g: IClientGroup, column: SortColumn): string {
    if (g.sortColumn !== column) return 'unfold_more';
    return g.sortDirection === 'asc' ? 'arrow_upward' : 'arrow_downward';
  }

  updatePaginatedRowsGroup(g: IClientGroup): void {
    const start = g.pageIndex * g.pageSize;
    const end = start + g.pageSize;
    g.paginated = g.filtered.slice(start, end);
  }

  getFirstIssueDateValue(item: IRequestItem): string {
    return item.bills[0]?.issueDate
      ? this.date.transform(item.bills[0].issueDate, 'dd/MM/yyyy') || ''
      : '';
  }

  getFirstDueDateValue(item: IRequestItem): string {
    return item.bills[0]?.dueDate
      ? this.date.transform(item.bills[0].dueDate, 'dd/MM/yyyy') || ''
      : '';
  }

  getFirstBillDebtor(item: IRequestItem): string {
    return item.bills[0]?.debtor?.companyName || 'Desconocido';
  }

  getFirstInvoiceNumber(item: IRequestItem): string {
    return item.bills[0]?.invoiceNumber || 'Sin número';
  }

  getFirstBillAmount(item: IRequestItem): string {
    return item.bills[0]?.amount
      ? this.currency.transform(
          item.bills[0].amount,
          'EUR',
          'symbol',
          '1.2-2',
        ) || '0 €'
      : '0 €';
  }

  getFirstIssueDate(item: IRequestItem): string {
    return this.getFirstIssueDateValue(item);
  }

  getFirstDueDate(item: IRequestItem): string {
    return this.getFirstDueDateValue(item);
  }

  getFirstBillAmountValue(item: IRequestItem): string {
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

  canSelectRow(r: IRequestItem): boolean {
    const s = (r.status || '').toUpperCase();
    const canSelect = s === 'REVIEW' || s === 'PENDING';
    if (!canSelect && r.selected) r.selected = false;
    return canSelect;
  }

  getTotalSelectedCountGroup(g: IClientGroup): number {
    return g.requests.filter((row) => row.selected).length;
  }

  hasSelectedRowsGroup(g: IClientGroup): boolean {
    return this.getTotalSelectedCountGroup(g) > 0;
  }

  isAllCurrentPageSelectedGroup(g: IClientGroup): boolean {
    if (g.paginated.length === 0) return false;
    const selectable = g.paginated.filter((r) => this.canSelectRow(r));
    if (selectable.length === 0) return false;
    return selectable.every((r) => r.selected);
  }

  isCurrentPageIndeterminateGroup(g: IClientGroup): boolean {
    if (g.paginated.length === 0) return false;
    const selectable = g.paginated.filter((r) => this.canSelectRow(r));
    if (selectable.length === 0) return false;
    const selectedCount = selectable.filter((r) => r.selected).length;
    return selectedCount > 0 && selectedCount < selectable.length;
  }

  toggleSelectAllCurrentPageGroup(g: IClientGroup, checked: boolean): void {
    const selectable = g.paginated.filter((r) => this.canSelectRow(r));
    selectable.forEach((r) => (r.selected = checked));
  }

  onCheckboxChange(_r: IRequestItem): void {}

  totalSelectedBills(g: IClientGroup): number {
    return g.requests
      .filter((r) => r.selected)
      .reduce((sum, r) => sum + (r.bills?.length ?? 0), 0);
  }

  clearAllSelectionsGroup(g: IClientGroup): void {
    g.requests.forEach((r) => {
      if (r.selected) r.selected = false;
    });
    this.updatePaginatedRowsGroup(g);
  }

  private runApproveSelected(
    g: IClientGroup,
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
      this.requestService.approve(r.id).subscribe({
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
    g: IClientGroup,
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
      this.requestService.reject(r.id).subscribe({
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

  confirmAnticipar(g: IClientGroup, _el: any): void {
    this.runApproveSelected(g, (completed, errors) => {
      g.anticiparResult = { completed, errors };
      g.anticiparState = errors === 0 ? 'success' : 'error';
    });
  }

  confirmRechazar(g: IClientGroup, _el: any): void {
    this.runRejectSelected(g, (completed, errors) => {
      g.rechazarResult = { completed, errors };
      g.rechazarState = errors === 0 ? 'success' : 'error';
    });
  }

  onModalClosed(g: IClientGroup, kind: 'anticipar' | 'rechazar'): void {
    if (kind === 'anticipar') {
      g.anticiparState = 'confirm';
      g.anticiparResult = undefined;
    } else {
      g.rechazarState = 'confirm';
      g.rechazarResult = undefined;
    }
    this.load();
  }

  openBillDetail(item: IRequestItem): void {
    if (!item?.bills || item.bills.length === 0) return;
    const bill = item.bills[0];
    this.billDetail = bill;

    const modalEl = document.getElementById('billDetailModal') as any;
    if (modalEl && typeof modalEl.openModal === 'function') {
      modalEl.openModal();
    } else {
      modalEl?.setAttribute('open', 'true');
    }
  }

  onBillDetailClosed(): void {
    this.billDetail = null;
  }

  onSearchChange(value: string, g: IClientGroup): void {
    g.searchQuery = (value || '').trim();
    this.applyFiltersAndSortGroup(g);
  }

  applySearch(value: string, g: IClientGroup): void {
    g.searchQuery = (value || '').trim();
    this.applyFiltersAndSortGroup(g);
  }

  onSearchClear(g: IClientGroup, el?: any): void {
    if (el) el.value = '';
    g.searchQuery = '';
    this.applyFiltersAndSortGroup(g);
  }

  onStatusChange(g: IClientGroup): void {
    this.applyFiltersAndSortGroup(g);
  }

  onAthPaginateGroup(g: IClientGroup, pageOneBased: number): void {
    g.pageIndex = Math.max(0, (pageOneBased ?? 1) - 1);
    this.updatePaginatedRowsGroup(g);
  }

  onAthItemsPerPageChangeGroup(g: IClientGroup, itemsPerPage: number): void {
    const size = Number(itemsPerPage) || 10;
    g.pageSize = size;
    g.pageIndex = 0;
    this.updatePaginatedRowsGroup(g);
  }
}
