import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { IRequestItem } from '../models/models';

@Injectable({ providedIn: 'root' })
export class RequestsService {
  private base = `${environment.apiBaseUrl}/requests`;

  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<IRequestItem[]>(this.base);
  }

  approve(id: number) {
    return this.http.post<IRequestItem>(`${this.base}/${id}/approve`, {});
  }

  reject(id: number, reason?: string) {
    return this.http.post<IRequestItem>(`${this.base}/${id}/reject`, {
      reason,
    });
  }

  get(id: number) {
    return this.http.get<IRequestItem>(`${this.base}/${id}`);
  }

  create(billIds: number[]) {
    const ids = (billIds || [])
      .map((x) => Number(x))
      .filter((x) => Number.isFinite(x));
    return this.http.post<IRequestItem>(`${this.base}`, { billIds: ids });
  }
}
