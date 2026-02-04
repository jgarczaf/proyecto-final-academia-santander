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

  applyFiltersAndSortGroup(group: IClientGroup): void {
    let filtered = group.requests;

    if (group.searchQuery) {
      const query: string = group.searchQuery.toLowerCase();
      filtered = filtered.filter((row) => {
        const debtorName: string = this.getFirstBillDebtor(row).toLowerCase();
        const userName: string = row.user?.name?.toLowerCase() || '';
        const companyName: string = row.user?.companyName?.toLowerCase() || '';
        return (
          debtorName.includes(query) ||
          userName.includes(query) ||
          companyName.includes(query)
        );
      });
    }

    if (group.selectedStatus) {
      filtered = filtered.filter((row) => row.status === group.selectedStatus);
    }

    filtered = this.sortData(filtered, group.sortColumn, group.sortDirection);
    group.filtered = filtered;
    group.pageIndex = 0;
    this.updatePaginatedRowsGroup(group);
  }

  sortData(
    data: IRequestItem[],
    sortColumn: SortColumn,
    sortDirection: SortDirection,
  ): IRequestItem[] {
    const sorted: IRequestItem[] = [...data].sort((a, b) => {
      let aVal, bVal;
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
          aVal = Number(this.getFirstBillAmountValue(a));
          bVal = Number(this.getFirstBillAmountValue(b));
          break;
        case 'issueDate':
          aVal = a.bills[0]?.issueDate
            ? new Date(a.bills[0].issueDate).getTime()
            : 0;
          bVal = b.bills[0]?.issueDate
            ? new Date(b.bills[0].issueDate).getTime()
            : 0;
          break;
        case 'dueDate':
          aVal = a.bills[0]?.dueDate
            ? new Date(a.bills[0].dueDate).getTime()
            : 0;
          bVal = b.bills[0]?.dueDate
            ? new Date(b.bills[0].dueDate).getTime()
            : 0;
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

  onSortGroup(group: IClientGroup, column: SortColumn): void {
    if (group.sortColumn === column)
      group.sortDirection = group.sortDirection === 'asc' ? 'desc' : 'asc';
    else {
      group.sortColumn = column;
      group.sortDirection = 'asc';
    }
    this.applyFiltersAndSortGroup(group);
  }

  getSortIconGroup(group: IClientGroup, column: SortColumn): string {
    if (group.sortColumn !== column) return 'unfold_more';
    return group.sortDirection === 'asc' ? 'arrow_upward' : 'arrow_downward';
  }

  updatePaginatedRowsGroup(group: IClientGroup): void {
    const start = group.pageIndex * group.pageSize;
    const end = start + group.pageSize;
    group.paginated = group.filtered.slice(start, end);
  }

  getFirstDateValue(item: IRequestItem, prop: 'issueDate' | 'dueDate'): string {
    const value = item.bills[0]?.[prop];

    return value ? this.date.transform(value, 'dd/MM/yyyy') || '' : '';
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

  getFirstBillAmountValue(item: IRequestItem): string {
    return item.bills[0]?.amount ? String(item.bills[0].amount) : '0';
  }

  statusLabel(status?: string): string {
    const upperCaseStatus: string = (status || '').toUpperCase();
    if (upperCaseStatus === 'REVIEW') return 'Pendiente';
    if (upperCaseStatus === 'APPROVED') return 'Validada';
    if (upperCaseStatus === 'REJECTED') return 'Rechazada';
    return status || '';
  }

  statusClass(status?: string): string {
    const upperCaseStatus: string = (status || '').toUpperCase();
    if (upperCaseStatus === 'REVIEW') return 'st-pending';
    if (upperCaseStatus === 'APPROVED') return 'st-approved';
    if (upperCaseStatus === 'REJECTED') return 'st-rejected';
    return 'st-unknown';
  }

  canSelectRow(rowItem: IRequestItem): boolean {
    const status: string = (rowItem.status || '').toUpperCase();
    const canSelect: boolean = status === 'REVIEW';

    if (!canSelect && rowItem.selected) rowItem.selected = false;
    return canSelect;
  }

  getTotalSelectedCountGroup(group: IClientGroup): number {
    return group.requests.filter((row) => row.selected).length;
  }

  hasSelectedRowsGroup(group: IClientGroup): boolean {
    return this.getTotalSelectedCountGroup(group) > 0;
  }

  isAllCurrentPageSelectedGroup(group: IClientGroup): boolean {
    if (group.paginated.length === 0) return false;

    const selectable = group.paginated.filter((row) => this.canSelectRow(row));
    if (selectable.length === 0) return false;

    return selectable.every((row) => row.selected);
  }

  isCurrentPageIndeterminateGroup(group: IClientGroup): boolean {
    if (group.paginated.length === 0) return false;

    const selectable = group.paginated.filter((row) => this.canSelectRow(row));
    if (selectable.length === 0) return false;

    const selectedCount = selectable.filter((row) => row.selected).length;
    return selectedCount > 0 && selectedCount < selectable.length;
  }

  toggleSelectAllCurrentPageGroup(group: IClientGroup, checked: boolean): void {
    const selectable = group.paginated.filter((row) => this.canSelectRow(row));
    selectable.forEach((row) => (row.selected = checked));
  }

  onCheckboxChange(_r: IRequestItem): void {}

  clearAllSelectionsGroup(group: IClientGroup): void {
    group.requests.forEach((row) => {
      if (row.selected) row.selected = false;
    });
    this.updatePaginatedRowsGroup(group);
  }

  confirmAnticipar(group: IClientGroup, _el: any): void {
    this.runApproveSelected(group, (completed, errors) => {
      group.anticiparResult = { completed, errors };
      group.anticiparState = errors === 0 ? 'success' : 'error';
    });
  }

  confirmRechazar(group: IClientGroup, _el: any): void {
    this.runRejectSelected(group, (completed, errors) => {
      group.rechazarResult = { completed, errors };
      group.rechazarState = errors === 0 ? 'success' : 'error';
    });
  }

  private runApproveSelected(
    group: IClientGroup,
    onDone?: (completed: number, errors: number) => void,
  ): void {
    const selected = group.requests.filter((row) => row.selected);
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
    group: IClientGroup,
    onDone?: (completed: number, errors: number) => void,
  ): void {
    const selected = group.requests.filter((row) => row.selected);
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

  onModalClosed(group: IClientGroup, kind: 'anticipar' | 'rechazar'): void {
    if (kind === 'anticipar') {
      group.anticiparState = 'confirm';
      group.anticiparResult = undefined;
    } else {
      group.rechazarState = 'confirm';
      group.rechazarResult = undefined;
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

  onSearchChange(value: string, group: IClientGroup): void {
    group.searchQuery = (value || '').trim();
    this.applyFiltersAndSortGroup(group);
  }

  applySearch(value: string, group: IClientGroup): void {
    group.searchQuery = (value || '').trim();
    this.applyFiltersAndSortGroup(group);
  }

  onSearchClear(group: IClientGroup, el?: any): void {
    if (el) el.value = '';
    group.searchQuery = '';
    this.applyFiltersAndSortGroup(group);
  }

  onStatusChange(group: IClientGroup): void {
    this.applyFiltersAndSortGroup(group);
  }

  onAthPaginateGroup(group: IClientGroup, pageOneBased: number): void {
    group.pageIndex = Math.max(0, (pageOneBased ?? 1) - 1);
    this.updatePaginatedRowsGroup(group);
  }

  onAthItemsPerPageChangeGroup(
    group: IClientGroup,
    itemsPerPage: number,
  ): void {
    const size = Number(itemsPerPage) || 10;
    group.pageSize = size;
    group.pageIndex = 0;
    this.updatePaginatedRowsGroup(group);
  }
}
