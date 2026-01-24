import { Component, OnInit, ViewChild } from '@angular/core';
import { DebtorsService } from '../../../../core/services/debtors.service';
import { Debtor } from '../../../../core/models/models';
import { MatDialog } from '@angular/material/dialog';
import { DebtorDialogComponent } from '../debtors-dialog/debtors-dialog.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-debtors-list',
  templateUrl: './debtors-list.component.html',
  styleUrls: ['./debtors-list.component.scss'],
})
export class DebtorsListComponent implements OnInit {
  cols: string[] = ['companyName', 'fiscalId', 'country', 'status', 'actions'];
  rows: Debtor[] = [];
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

  openDialog(row?: Debtor) {
    this.dialog
      .open(DebtorDialogComponent, { width: '520px', data: row })
      .afterClosed()
      .subscribe((ok) => ok && this.load());
  }

  remove(row: Debtor) {
    if (!confirm('¿Seguro que deseas eliminar este deudor?')) return;
    this.api.delete(row.id).subscribe({
      next: () => {
        this.snack.open('Deudor eliminado', 'OK', { duration: 1500 });
        this.load();
      },
      error: () =>
        this.snack.open('No se pudo eliminar', 'Cerrar', { duration: 2500 }),
    });
  }
}
