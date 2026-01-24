import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Bill } from '../models/models';

interface Paginated<T> {
  data: T[];
  meta: { page: number; limit: number; total: number; pages: number };
}

@Injectable({ providedIn: 'root' })
export class BillsService {
  private base = `${environment.apiBaseUrl}/bills`;

  constructor(private http: HttpClient) {}

  listPaginated(query: any) {
    let params = new HttpParams();
    Object.keys(query).forEach((k) => {
      if (query[k] !== null && query[k] !== undefined && query[k] !== '') {
        params = params.set(k, query[k]);
      }
    });
    return this.http.get<Paginated<Bill>>(`${this.base}/paginated`, { params });
  }

  create(body: any) {
    return this.http.post<Bill>(this.base, body);
  }
  update(id: number, body: any) {
    return this.http.patch<Bill>(`${this.base}/${id}`, body);
  }
  delete(id: number) {
    return this.http.delete<void>(`${this.base}/${id}`);
  }
}
