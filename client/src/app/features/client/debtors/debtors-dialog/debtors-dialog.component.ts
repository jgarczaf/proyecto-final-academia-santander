import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DebtorsService } from '../../../../core/services/debtors.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Debtor } from '../../../../core/models/models';

@Component({
  selector: 'app-debtor-dialog',
  templateUrl: './debtors-dialog.component.html',
  styleUrls: ['./debtors-dialog.component.scss'],
})
export class DebtorDialogComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private api: DebtorsService,
    private snack: MatSnackBar,
    private ref: MatDialogRef<DebtorDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Debtor | null,
  ) {
    this.form = this.fb.group({
      companyName: [data?.companyName ?? '', Validators.required],
      fiscalId: [data?.fiscalId ?? '', Validators.required],
      country: [data?.country ?? 'ES', Validators.required],
      limit: [data?.limit ?? 0, [Validators.required, Validators.min(0)]],
      status: [data?.status ?? 'ACTIVE', Validators.required],
      contactName: [data?.contactName ?? '', Validators.required],
      contactEmail: [
        data?.contactEmail ?? '',
        [Validators.required, Validators.email],
      ],
    });
  }

  save(): void {
    if (this.form.invalid) return;

    const payload: Partial<Debtor> = this.form.value;

    const request$ = this.data
      ? this.api.update(this.data.id, payload)
      : this.api.create(payload);

    request$.subscribe({
      next: () => {
        this.snack.open('Guardado', 'OK', { duration: 1500 });
        this.ref.close(true);
      },
      error: () => {
        this.snack.open('Error al guardar', 'Cerrar', { duration: 2500 });
      },
    });
  }
}
