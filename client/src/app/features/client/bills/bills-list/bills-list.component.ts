import { Component, OnDestroy, OnInit } from '@angular/core';
import { BillsService } from '../../../../core/services/bills.service';
import { RequestsService } from '../../../../core/services/requests.service';
import { Bill } from '../../../../core/models/models';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../../../shared/components/confirm-dialog/confirm-dialog.component';
import { SocketService } from '../../../../core/services/socket.service';
import { Subscription } from 'rxjs';
import { BillDialogComponent } from '../bill-dialog/bill-dialog.component';

@Component({
  selector: 'app-bills-list',
  templateUrl: './bills-list.component.html',
  styleUrls: ['./bills-list.component.scss'],
})
export class BillsListComponent implements OnInit, OnDestroy {
  cols: string[] = [
    'select',
    'invoiceNumber',
    'debtor',
    'amount',
    'issueDate',
    'dueDate',
    'status',
    'actions',
  ];
  rows: Bill[] = [];
  search = '';
  status = '';
  selectedIds: number[] = [];
  private sub?: Subscription;

  constructor(
    private bills: BillsService,
    private reqs: RequestsService,
    private snack: MatSnackBar,
    private dialog: MatDialog,
    private socket: SocketService,
  ) {}

  ngOnInit() {
    this.load();
    // 🔔 refrescar cuando llega un evento de request.updated
    this.sub = this.socket.onRequestUpdated().subscribe(() => this.load());
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }

  load() {
    this.bills
      .listPaginated({
        page: 1,
        limit: 50,
        search: this.search,
        status: this.status,
      })
      .subscribe((res) => {
        this.rows = res.data;
      });
  }

  toggle(r: Bill) {
    const i = this.selectedIds.indexOf(r.id);
    if (i >= 0) this.selectedIds.splice(i, 1);
    else this.selectedIds.push(r.id);
  }

  proceed() {
    if (this.selectedIds.length === 0) return;

    this.dialog
      .open(ConfirmDialogComponent, {
        data: {
          title: 'Confirmación',
          message: `¿Está seguro de solicitar el anticipo de ${this.selectedIds.length} factura(s)?`,
        },
      })
      .afterClosed()
      .subscribe((ok) => {
        if (!ok) return;

        const ids = this.selectedIds.slice();
        this.reqs.create(ids).subscribe({
          next: () => {
            this.snack.open('Solicitud enviada', 'OK', { duration: 1500 });
            this.selectedIds = [];
            this.load();
          },
          error: (err) => {
            const msg = err?.error?.message || 'No se pudo enviar la solicitud';
            this.snack.open(msg, 'Cerrar', { duration: 2500 });
          },
        });
      });
  }

  openBillDialog(row?: Bill) {
    this.dialog
      .open(BillDialogComponent, { width: '600px', data: row ?? null })
      .afterClosed()
      .subscribe((ok) => ok && this.load());
  }

  delete(r: Bill) {
    if (r.status !== 'PENDING') return; // protección extra en cliente

    this.dialog
      .open(ConfirmDialogComponent, {
        data: {
          title: 'Eliminar factura',
          message: `¿Desea eliminar la factura ${r.invoiceNumber}? Esta acción no se puede deshacer.`,
        },
      })
      .afterClosed()
      .subscribe((ok) => {
        if (!ok) return;

        this.bills.delete(r.id).subscribe({
          next: () => {
            this.snack.open('Factura eliminada', 'OK', { duration: 1500 });
            // refrescar tabla
            this.load();
            // por si estaba seleccionada para solicitud, quitarla
            const i = this.selectedIds.indexOf(r.id);
            if (i >= 0) this.selectedIds.splice(i, 1);
          },
          error: (err) => {
            const msg = err?.error?.message || 'No se pudo eliminar la factura';
            this.snack.open(msg, 'Cerrar', { duration: 2500 });
          },
        });
      });
  }
}
