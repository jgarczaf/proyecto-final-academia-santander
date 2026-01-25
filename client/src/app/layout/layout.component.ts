import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { AuthService } from '../core/services/auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

interface UserInfo {
  id: number;
  email: string;
  role: 'ADMIN' | 'CLIENT';
  name?: string;
  companyName?: string;
}

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  @ViewChild(MatSidenav) sidenav!: MatSidenav;

  user: UserInfo | null = null;

  constructor(
    public auth: AuthService,
    private router: Router,
    private http: HttpClient,
  ) {}

  ngOnInit(): void {
    this.user = this.auth.getUser() as UserInfo | null;

    if (
      this.user &&
      (!this.user.companyName || !this.user.name) &&
      this.auth.getToken()
    ) {
      this.http
        .get<UserInfo>(`${environment.apiBaseUrl}/auth/profile`)
        .subscribe({
          next: (profile) => {
            if (!profile) return;
            const merged: UserInfo = {
              ...this.user!,
              name: profile.name ?? this.user!.name,
              companyName: profile.companyName ?? this.user!.companyName,
            };
            localStorage.setItem(
              environment.storageKeys.user,
              JSON.stringify(merged),
            );
            this.user = merged;
          },
          error: () => {},
        });
    }
  }

  logout(): void {
    this.auth.logout();
  }

  navigate(path: string): void {
    this.router.navigate([path]);
    if (this.sidenav?.mode === 'over') {
      this.sidenav.close();
    }
  }
}
