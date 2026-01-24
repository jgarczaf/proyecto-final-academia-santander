import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { formatDate } from '@angular/common';

import { BillsService } from '../../../../core/services/bills.service';
import { DebtorsService } from '../../../../core/services/debtors.service';
import { Bill, Debtor } from '../../../../core/models/models';

// Si usas DTOs tipados:
interface CreateBillPayload {
  debtorId: number;
  invoiceNumber: string;
  amount: number;
  issueDate: string; // 'YYYY-MM-DD'
  dueDate: string; // 'YYYY-MM-DD'
  // status opcional, normalmente se fija a PENDING en backend
}

interface UpdateBillPayload extends Partial<CreateBillPayload> {}

@Component({
  selector: 'app-bill-dialog',
  templateUrl: './bill-dialog.component.html',
  styleUrls: ['./bill-dialog.component.scss'],
})
export class BillDialogComponent implements OnInit {
  form: FormGroup;
  debtors: Debtor[] = [];
  readOnly = false; // si status !== PENDING, solo lectura

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Bill | null,
    private ref: MatDialogRef<BillDialogComponent>,
    private fb: FormBuilder,
    private bills: BillsService,
    private debtorsApi: DebtorsService,
    private snack: MatSnackBar,
  ) {
    this.readOnly = !!(data && data.status && data.status !== 'PENDING');

    this.form = this.fb.group({
      debtorId: [
        { value: data?.debtor?.id ?? null, disabled: this.readOnly },
        [Validators.required],
      ],
      invoiceNumber: [
        { value: data?.invoiceNumber ?? '', disabled: this.readOnly },
        [Validators.required],
      ],
      amount: [
        { value: data?.amount ?? 0, disabled: this.readOnly },
        [Validators.required, Validators.min(0)],
      ],
      issueDate: [
        {
          value: data ? new Date(data.issueDate) : null,
          disabled: this.readOnly,
        },
        [Validators.required],
      ],
      dueDate: [
        {
          value: data ? new Date(data.dueDate) : null,
          disabled: this.readOnly,
        },
        [Validators.required],
      ],
    });
  }

  ngOnInit(): void {
    // cargar deudores del cliente
    this.debtorsApi.listAll().subscribe({
      next: (rows) => (this.debtors = rows),
      error: () =>
        this.snack.open('No se pudieron cargar los deudores', 'Cerrar', {
          duration: 2500,
        }),
    });
  }

  close(ok = false) {
    this.ref.close(ok);
  }

  save() {
    if (this.form.invalid) return;

    // formatea fechas al formato que espera el backend (YYYY-MM-DD)
    const toISO = (d: Date | string): string =>
      typeof d === 'string' ? d : formatDate(d, 'yyyy-MM-dd', 'en');

    const raw = this.form.getRawValue();
    const payload: CreateBillPayload | UpdateBillPayload = {
      debtorId: Number(raw.debtorId),
      invoiceNumber: String(raw.invoiceNumber).trim(),
      amount: Number(raw.amount),
      issueDate: toISO(raw.issueDate),
      dueDate: toISO(raw.dueDate),
    };

    const req$ = this.data
      ? this.bills.update(this.data.id, payload) // UPDATE
      : this.bills.create(payload); // CREATE

    req$.subscribe({
      next: () => {
        this.snack.open('Factura guardada', 'OK', { duration: 1500 });
        this.close(true);
      },
      error: (err) => {
        const msg = err?.error?.message || 'No se pudo guardar la factura';
        this.snack.open(msg, 'Cerrar', { duration: 2500 });
      },
    });
  }
}
