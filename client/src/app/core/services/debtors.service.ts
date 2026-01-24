import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Debtor } from '../models/models';

interface Paginated<T> {
  data: T[];
  meta: { page: number; limit: number; total: number; pages: number };
}

@Injectable({ providedIn: 'root' })
export class DebtorsService {
  private base = `${environment.apiBaseUrl}/debtors`;

  constructor(private http: HttpClient) {}

  listPaginated(query: any) {
    let params = new HttpParams();
    Object.keys(query).forEach((k) => {
      if (query[k] !== null && query[k] !== undefined && query[k] !== '') {
        params = params.set(k, query[k]);
      }
    });
    return this.http.get<Paginated<Debtor>>(`${this.base}/paginated`, {
      params,
    });
  }

  create(body: Partial<Debtor>) {
    return this.http.post<Debtor>(this.base, body);
  }
  update(id: number, body: Partial<Debtor>) {
    return this.http.patch<Debtor>(`${this.base}/${id}`, body);
  }
  delete(id: number) {
    return this.http.delete<void>(`${this.base}/${id}`);
  }
}
