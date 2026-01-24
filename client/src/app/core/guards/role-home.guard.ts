import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({ providedIn: 'root' })
export class RoleHomeGuard implements CanActivate {
  constructor(
    private auth: AuthService,
    private router: Router,
  ) {}

  canActivate(): boolean | UrlTree {
    // Si no hay sesión, a /login
    if (!this.auth.isAuthenticated()) {
      return this.router.parseUrl('/login');
    }
    const user = this.auth.getUser();
    if (!user) return this.router.parseUrl('/login');

    // Redirige dinámicamente según rol
    if (user.role === 'ADMIN') {
      return this.router.parseUrl('/admin/dashboard');
    }
    return this.router.parseUrl('/client/dashboard');
  }
}
