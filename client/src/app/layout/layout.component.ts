import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { AuthService } from '../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  @ViewChild(MatSidenav) sidenav!: MatSidenav;

  constructor(
    public auth: AuthService,
    private router: Router,
  ) {}

  get user() {
    return this.auth.getUser(); // puede ser null
  }

  logout() {
    this.auth.logout();
  }

  navigate(path: string) {
    this.router.navigate([path]);
    if (this.sidenav?.mode === 'over') this.sidenav.close();
  }
}
