import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  form: FormGroup;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    public router: Router,
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
