import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-home-redirect',
  templateUrl: './home-redirect.component.html',
  styleUrls: ['./home-redirect.component.scss'],
})
export class HomeRedirectComponent implements OnInit {
  constructor(
    private auth: AuthService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    // Si no hay sesión → /login
    if (!this.auth.isAuthenticated()) {
      this.router.navigateByUrl('/login');
      return;
    }

    const user = this.auth.getUser();
    if (!user) {
      this.router.navigateByUrl('/login');
      return;
    }

    if (user.role === 'ADMIN') {
      this.router.navigateByUrl('/admin/dashboard');
    } else {
      this.router.navigateByUrl('/client/dashboard');
    }
  }
}
