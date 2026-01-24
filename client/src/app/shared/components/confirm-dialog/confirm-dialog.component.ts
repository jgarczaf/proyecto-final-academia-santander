import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  template: `
    <h2 mat-dialog-title>{{ data?.title || 'Confirmación' }}</h2>
    <mat-dialog-content>
      <p>{{ data?.message || '¿Confirma la operación?' }}</p>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button (click)="ref.close(false)">Cancelar</button>
      <button mat-raised-button color="primary" (click)="ref.close(true)">
        Aceptar
      </button>
    </mat-dialog-actions>
  `,
})
export class ConfirmDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public ref: MatDialogRef<ConfirmDialogComponent>,
  ) {}
}
