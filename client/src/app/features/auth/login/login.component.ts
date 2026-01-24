import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  template: `
    <mat-card>
      <h2>Acceso</h2>

      <form [formGroup]="form" (ngSubmit)="onSubmit()">
        <mat-form-field appearance="outline" class="w-100">
          <mat-label>Email</mat-label>
          <input
            matInput
            formControlName="email"
            type="email"
            autocomplete="username"
          />
          <mat-error *ngIf="form.controls['email'].hasError('required')"
            >El email es obligatorio</mat-error
          >
          <mat-error *ngIf="form.controls['email'].hasError('email')"
            >Formato de email no válido</mat-error
          >
        </mat-form-field>

        <mat-form-field appearance="outline" class="w-100">
          <mat-label>Contraseña</mat-label>
          <input
            matInput
            formControlName="password"
            type="password"
            autocomplete="current-password"
          />
          <mat-error *ngIf="form.controls['password'].hasError('required')"
            >La contraseña es obligatoria</mat-error
          >
        </mat-form-field>

        <button
          mat-raised-button
          color="primary"
          type="submit"
          [disabled]="form.invalid || loading"
        >
          <mat-spinner
            *ngIf="loading"
            diameter="20"
            style="margin-right:8px"
          ></mat-spinner>
          <span *ngIf="!loading">Entrar</span>
        </button>
      </form>
    </mat-card>
  `,
  styles: [
    `
      .w-100 {
        width: 100%;
      }
      mat-card {
        max-width: 360px;
        margin: 60px auto;
        padding: 24px;
      }
    `,
  ],
})
export class LoginComponent {
  form: FormGroup;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private snack: MatSnackBar,
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  // ✅ Nombre del método alineado con el template
  onSubmit() {
    if (this.form.invalid || this.loading) return;

    const { email, password } = this.form.value;
    this.loading = true;

    this.auth.login(email, password).subscribe({
      next: (resp) => {
        // Guardar sesión
        this.auth.setSession(resp);

        // Redirigir según rol
        const role = this.auth.getUser()?.role;
        const target =
          role === 'ADMIN' ? '/admin/dashboard' : '/client/dashboard';
        this.router.navigate([target]);
      },
      error: (err) => {
        const msg = err?.error?.message || 'Credenciales incorrectas';
        this.snack.open(msg, 'Cerrar', { duration: 2500 });
        this.loading = false;
      },
      complete: () => {
        this.loading = false;
      },
    });
  }
}
