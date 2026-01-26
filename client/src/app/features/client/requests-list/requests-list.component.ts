import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { RequestsService } from '../../../core/services/requests.service';

interface BillRow {
  id: number;
  invoiceNumber: string;
  amount: number;
  debtor?: { companyName?: string };
}

interface RequestItem {
  id: number;
  status: 'REVIEW' | 'APPROVED' | 'REJECTED';
  createdAt: string | Date;
  bills: BillRow[];
}

@Component({
  selector: 'app-requests-list',
  templateUrl: './requests-list.component.html',
  styleUrls: ['./requests-list.component.scss'],
  providers: [CurrencyPipe, DatePipe],
})
export class RequestsListComponent implements OnInit {
  cols = ['expand', 'id', 'status', 'createdAt', 'billsCount', 'totalAmount'];
  rows: RequestItem[] = [];
  expanded = new Set<number>();

  constructor(
    private api: RequestsService,
    private snack: MatSnackBar,
    private currency: CurrencyPipe,
    private datePipe: DatePipe,
  ) {}

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.api.list().subscribe({
      next: (res) => {
        // depuración segura (sin flechas en plantilla)
        console.log('[requests] length=', res?.length);
        this.rows = res ?? [];
      },
      error: () =>
        this.snack.open('No se pudieron cargar las solicitudes', 'Cerrar', {
          duration: 2500,
        }),
    });
  }

  // ========= helpers =========
  hasRows(): boolean {
    return this.rows.length > 0;
  }
  isExpanded(id: number): boolean {
    return this.expanded.has(id);
  }

  toggleRow(r: RequestItem): void {
    if (this.isExpanded(r.id)) {
      this.expanded.delete(r.id);
      console.log('[toggle] collapse id=', r.id);
    } else {
      this.expanded.add(r.id);
      console.log(
        '[toggle] expand id=',
        r.id,
        'bills.length=',
        r.bills?.length,
      );
    }
  }

  expandAll(): void {
    this.rows.forEach((r) => this.expanded.add(r.id));
  }
  collapseAll(): void {
    this.expanded.clear();
  }

  /** Fila de detalle: solo si está expandida (firma correcta: (index,row) => boolean) */

  isDetailRow = (_: number, row: RequestItem) => {
    return this.expanded.has(row.id);
  };

  billsCount(r: RequestItem): number {
    return r.bills?.length ?? 0;
  }

  fmtDate(v: string | Date): string {
    return this.datePipe.transform(v, 'dd/MM/yyyy') ?? '';
  }
  fmtAmount(v: number): string {
    return this.currency.transform(v || 0, 'EUR', 'symbol', '1.2-2') ?? '';
  }

  // (opcional) depuración: string de IDs sin usar arrow en plantilla
  idsStr(): string {
    return (this.rows || []).map((r) => r.id).join(', ');
  }

  /** Convierte cualquier amount (string|number) a number seguro */
  toNumber(value: any): number {
    if (typeof value === 'number') return value;
    if (typeof value === 'string') {
      const n = Number(value.replace(',', '.'));
      return Number.isFinite(n) ? n : 0;
    }
    return 0;
  }

  totalAmount(r: RequestItem): number {
    return (r.bills ?? []).reduce((sum, b) => sum + this.toNumber(b.amount), 0);
  }

  fmtBillAmount(value: any): string {
    return this.fmtAmount(this.toNumber(value));
  }
}
