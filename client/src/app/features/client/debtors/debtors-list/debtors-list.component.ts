import { Component, OnInit, ViewChild } from '@angular/core';
import { DebtorsService } from '../../../../core/services/debtors.service';
import { IDebtor } from '../../../../core/models/models';
import { MatDialog } from '@angular/material/dialog';
import { DebtorDialogComponent } from '../debtor-dialog/debtor-dialog.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmDialogComponent } from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-debtors-list',
  templateUrl: './debtors-list.component.html',
  styleUrls: ['./debtors-list.component.scss'],
})
export class DebtorsListComponent implements OnInit {
  cols: string[] = [
    'createdAt',
    'companyName',
    'contactName',
    'country',
    'limit',
    'actions',
  ];
  rows: IDebtor[] = [];
  page = 1;
  limit = 10;
  total = 0;
  search = '';
  status = '';

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private api: DebtorsService,
    private dialog: MatDialog,
    private snack: MatSnackBar,
  ) {}

  ngOnInit() {
    this.load();
  }

  load() {
    this.api
      .listPaginated({
        page: this.page,
        limit: this.limit,
        search: this.search,
        status: this.status,
      })
      .subscribe((res) => {
        this.rows = res.data;
        this.total = res.meta.total;
      });
  }

  onPage(e: any) {
    this.page = e.pageIndex + 1;
    this.limit = e.pageSize;
    this.load();
  }

  openDialog(row?: IDebtor) {
    this.dialog
      .open(DebtorDialogComponent, { width: '520px', data: row })
      .afterClosed()
      .subscribe((ok) => ok && this.load());
  }

  canDeleteDebtor(d: IDebtor): boolean {
    if (typeof (d as any).billsCount === 'number') {
      return (d as any).billsCount === 0;
    }

    if ((d as any).canDelete !== undefined) {
      return !!(d as any).canDelete;
    }

    return true;
  }

  delete(d: IDebtor) {
    if (!this.canDeleteDebtor(d)) return;

    this.dialog
      .open(ConfirmDialogComponent, {
        data: {
          title: 'Eliminar deudor',
          message: `¿Desea eliminar al deudor ${d.companyName}? Esta acción no se puede deshacer.`,
        },
      })
      .afterClosed()
      .subscribe((ok) => {
        if (!ok) return;

        this.api.delete(d.id).subscribe({
          next: () => {
            this.snack.open('Deudor eliminado', 'OK', { duration: 1500 });
            this.load();
          },
          error: (err) => {
            const msg = err?.error?.message || 'No se pudo eliminar el deudor';
            this.snack.open(msg, 'Cerrar', { duration: 2500 });
          },
        });
      });
  }
}
