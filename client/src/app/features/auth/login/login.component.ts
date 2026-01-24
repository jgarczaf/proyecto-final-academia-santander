import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
          <input matInput formControlName="email" type="email" />
        </mat-form-field>

        <mat-form-field appearance="outline" class="w-100">
          <mat-label>Contraseña</mat-label>
          <input matInput formControlName="password" type="password" />
        </mat-form-field>

        <button mat-raised-button color="primary" [disabled]="form.invalid">
          Entrar
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
  form = this.fb.group({
    email: ['client@empresa.com', [Validators.required, Validators.email]],
    password: ['123456', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private snk: MatSnackBar,
    private router: Router,
  ) {}

  onSubmit() {
    if (this.form.invalid) return;
    const { email, password } = this.form.value;
    this.auth.login(email!, password!).subscribe({
      next: (resp) => {
        this.auth.setSession(resp);
        const role = resp.user.role;
        this.snk.open('Bienvenido', 'OK', { duration: 1500 });
        this.router.navigate([role === 'ADMIN' ? '/admin' : '/client']);
      },
      error: () =>
        this.snk.open('Credenciales inválidas', 'Cerrar', { duration: 2500 }),
    });
  }
}
