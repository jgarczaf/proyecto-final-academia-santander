import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../../../core/services/requests.service';
import { RequestItem } from '../../../core/models/models';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../../shared/components/confirm-dialog/confirm-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-admin-review',
  template: `
    <h2>Solicitudes en revisión</h2>
    <table mat-table [dataSource]="rows" class="mat-elevation-z2">
      <ng-container matColumnDef="id"
        ><th mat-header-cell *matHeaderCellDef>ID</th>
        <td mat-cell *matCellDef="let r">{{ r.id }}</td></ng-container
      >
      <ng-container matColumnDef="bills"
        ><th mat-header-cell *matHeaderCellDef>Facturas</th>
        <td mat-cell *matCellDef="let r">
          {{ r.bills?.length }}
        </td></ng-container
      >
      <ng-container matColumnDef="createdAt"
        ><th mat-header-cell *matHeaderCellDef>Fecha</th>
        <td mat-cell *matCellDef="let r">
          {{ r.createdAt | date: 'short' }}
        </td></ng-container
      >
      <ng-container matColumnDef="actions"
        ><th mat-header-cell *matHeaderCellDef>Acciones</th>
        <td mat-cell *matCellDef="let r">
          <button mat-raised-button color="primary" (click)="approve(r)">
            Anticipar
          </button>
          <button mat-button color="warn" (click)="reject(r)">Cancelar</button>
        </td></ng-container
      >

      <tr mat-header-row *matHeaderRowDef="cols"></tr>
      <tr mat-row *matRowDef="let row; columns: cols"></tr>
    </table>
  `,
})
export class AdminReviewComponent implements OnInit {
  cols = ['id', 'bills', 'createdAt', 'actions'];
  rows: RequestItem[] = [];

  constructor(
    private api: RequestsService,
    private dialog: MatDialog,
    private snack: MatSnackBar,
  ) {}

  ngOnInit() {
    this.load();
  }

  load() {
    // el backend ya filtra por rol ADMIN devolviendo todas, incluídas REVIEW;
    // si quieres traer solo REVIEW, podrías crear un endpoint específico o filtrar aquí.
    this.api
      .list()
      .subscribe((r) => (this.rows = r.filter((x) => x.status === 'REVIEW')));
  }

  approve(r: RequestItem) {
    this.dialog
      .open(ConfirmDialogComponent, {
        data: {
          title: 'Confirmación',
          message: `¿Está seguro de anticipar ${r.bills?.length} factura(s)?`,
        },
      })
      .afterClosed()
      .subscribe((ok) => {
        if (!ok) return;
        this.api.approve(r.id).subscribe({
          next: () => {
            this.snack.open('Operación confirmada', 'Cerrar', {
              duration: 1500,
            });
            this.load();
          },
          error: () =>
            this.snack.open('No se pudo aprobar', 'Cerrar', { duration: 2500 }),
        });
      });
  }

  reject(r: RequestItem) {
    this.dialog
      .open(ConfirmDialogComponent, {
        data: {
          title: 'Cancelar',
          message: '¿Está seguro de cancelar la solicitud?',
        },
      })
      .afterClosed()
      .subscribe((ok) => {
        if (!ok) return;
        this.api.reject(r.id).subscribe({
          next: () => {
            this.snack.open('Operación confirmada', 'Cerrar', {
              duration: 1500,
            });
            this.load();
          },
          error: () =>
            this.snack.open('No se pudo cancelar', 'Cerrar', {
              duration: 2500,
            }),
        });
      });
  }
}
