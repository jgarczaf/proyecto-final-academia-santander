import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import {
  ClientDashboardResponse,
  AdminDashboardResponse,
} from '../models/models';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DashboardService {
  private base = `${environment.apiBaseUrl}/dashboard`;

  constructor(private http: HttpClient) {}

  getClient(): Observable<ClientDashboardResponse> {
    return this.http.get<ClientDashboardResponse>(`${this.base}/client`);
  }

  getAdmin(): Observable<AdminDashboardResponse> {
    return this.http.get<AdminDashboardResponse>(`${this.base}/admin`);
  }
}
