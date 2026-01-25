import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../../../core/services/auth.service';

function matchPassword(group: AbstractControl) {
  const pass = group.get('password')?.value;
  const conf = group.get('confirm')?.value;
  return pass && conf && pass === conf ? null : { mismatch: true };
}

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  form: FormGroup;
  loading = false;
  hide = true;
  hide2 = true;
  roles: Array<'CLIENT' | 'ADMIN'> = ['CLIENT', 'ADMIN'];

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private snack: MatSnackBar,
  ) {
    this.form = this.fb.group({
      // Identidad
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],

      // Rol
      role: ['CLIENT', [Validators.required]],

      // Empresa (solo obligatorio si es CLIENT)
      companyName: [''],

      // Credenciales
      credentials: this.fb.group(
        {
          password: ['', [Validators.required, Validators.minLength(6)]],
          confirm: ['', [Validators.required]],
        },
        { validators: matchPassword },
      ),
    });

    // 👉 Reglas dinámicas: companyName obligatorio si role === 'CLIENT'
    this.form.get('role')!.valueChanges.subscribe((role) => {
      const ctrl = this.form.get('companyName')!;
      if (role === 'CLIENT') {
        ctrl.setValidators([Validators.required, Validators.minLength(2)]);
      } else {
        ctrl.clearValidators();
      }
      ctrl.updateValueAndValidity();
    });
  }

  get f() {
    return this.form.controls;
  }
  get fc() {
    return (this.form.get('credentials') as FormGroup).controls;
  }

  submit() {
    if (this.form.invalid || this.loading) return;
    this.loading = true;

    const { name, email, role, companyName } = this.form.value;
    const { password } = this.form.value.credentials;

    this.auth
      .register({
        name: String(name).trim(),
        email: String(email).trim(),
        password: String(password),
        role,
        companyName:
          role === 'CLIENT' ? String(companyName || '').trim() : null,
      })
      .subscribe({
        next: () => {
          this.snack.open('Cuenta creada correctamente. Inicia sesión.', 'OK', {
            duration: 2500,
          });
          this.router.navigate(['/login']);
        },
        error: (err) => {
          const msg = err?.error?.message || 'No se pudo crear la cuenta';
          this.snack.open(msg, 'Cerrar', { duration: 3000 });
          this.loading = false;
        },
        complete: () => {
          this.loading = false;
        },
      });
  }

  cancel() {
    this.router.navigate(['/login']);
  }
}
