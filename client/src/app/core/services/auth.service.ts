import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { SocketService } from './socket.service';

interface LoginResponse {
  access_token: string;
  user: { id: number; email: string; role: 'ADMIN' | 'CLIENT' };
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private base = environment.apiBaseUrl;
  private tokenKey = environment.storageKeys.token;
  private userKey = environment.storageKeys.user;

  constructor(
    private http: HttpClient,
    private router: Router,
    private socket: SocketService,
  ) {}

  login(email: string, password: string) {
    return this.http.post<LoginResponse>(`${this.base}/auth/login`, {
      email,
      password,
    });
  }

  setSession(resp: LoginResponse) {
    localStorage.setItem(this.tokenKey, resp.access_token);
    localStorage.setItem(this.userKey, JSON.stringify(resp.user));
    // Conectar socket tras login, pasándole el token
    this.socket.connect(resp.access_token);
  }

  logout() {
    // Desconectar socket al salir
    this.socket.disconnect();
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.userKey);
    this.router.navigate(['/login']);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  getUser(): { id: number; email: string; role: 'ADMIN' | 'CLIENT' } | null {
    const raw = localStorage.getItem(this.userKey);
    return raw ? JSON.parse(raw) : null;
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  hasRole(roles: Array<'ADMIN' | 'CLIENT'>): boolean {
    const user = this.getUser();
    if (!user) return false;
    return roles.includes(user.role);
  }

  register(payload: {
    email: string;
    password: string;
    role: 'ADMIN' | 'CLIENT';
    name: string;
    companyName?: string | null;
  }) {
    return this.http.post(`${this.base}/auth/register`, payload);
  }
}
