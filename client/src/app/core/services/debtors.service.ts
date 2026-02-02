import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { IDebtor } from '../models/models';

interface Paginated<T> {
  data: T[];
  meta: { page: number; limit: number; total: number; pages: number };
}

@Injectable({ providedIn: 'root' })
export class DebtorsService {
  private base = `${environment.apiBaseUrl}/debtors`;

  constructor(private http: HttpClient) {}

  listAll() {
    return this.http.get<IDebtor[]>(`${this.base}`);
  }

  listPaginated(query: any) {
    let params = new HttpParams();
    Object.keys(query).forEach((k) => {
      if (query[k] !== null && query[k] !== undefined && query[k] !== '') {
        params = params.set(k, query[k]);
      }
    });
    return this.http.get<Paginated<IDebtor>>(`${this.base}/paginated`, {
      params,
    });
  }

  create(body: Partial<IDebtor>) {
    return this.http.post<IDebtor>(this.base, body);
  }
  update(id: number, body: Partial<IDebtor>) {
    return this.http.patch<IDebtor>(`${this.base}/${id}`, body);
  }
  delete(id: number) {
    return this.http.delete<void>(`${this.base}/${id}`);
  }
}
