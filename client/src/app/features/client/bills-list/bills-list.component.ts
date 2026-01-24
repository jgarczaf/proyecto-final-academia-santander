import { Component, OnInit } from '@angular/core';
import { BillsService } from '../../../core/services/bills.service';
import { RequestsService } from '../../../core/services/requests.service';
import { Bill } from '../../../core/models/models';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../../shared/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-bills-list',
  templateUrl: './bills-list.component.html',
  styleUrls: ['./bills-list.component.scss'],
})
export class BillsListComponent implements OnInit {
  cols: string[] = [
    'select',
    'invoiceNumber',
    'debtor',
    'amount',
    'issueDate',
    'dueDate',
    'status',
  ];
  rows: Bill[] = [];
  search = '';
  status = '';
  selectedIds: number[] = [];

  constructor(
    private bills: BillsService,
    private reqs: RequestsService,
    private snack: MatSnackBar,
    private dialog: MatDialog,
  ) {}

  ngOnInit() {
    this.load();
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
        this.reqs.create(this.selectedIds).subscribe({
          next: () => {
            this.snack.open('Solicitud enviada', 'OK', { duration: 1500 });
            this.selectedIds = [];
            this.load();
          },
          error: () =>
            this.snack.open('No se pudo enviar la solicitud', 'Cerrar', {
              duration: 2500,
            }),
        });
      });
  }
}
