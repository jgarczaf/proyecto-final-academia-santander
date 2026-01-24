import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { RequestItem } from '../models/models';

@Injectable({ providedIn: 'root' })
export class RequestsService {
  private base = `${environment.apiBaseUrl}/requests`;

  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<RequestItem[]>(this.base);
  }
  get(id: number) {
    return this.http.get<RequestItem>(`${this.base}/${id}`);
  }
  create(billIds: number[]) {
    return this.http.post<RequestItem>(this.base, { billIds });
  }
  approve(id: number) {
    return this.http.post<RequestItem>(`${this.base}/${id}/approve`, {});
  }
  reject(id: number, reason?: string) {
    return this.http.post<RequestItem>(`${this.base}/${id}/reject`, { reason });
  }
}
