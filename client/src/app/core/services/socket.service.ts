import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { environment } from '../../../environments/environment';
import { Subject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SocketService {
  private socket?: Socket;

  private requestUpdated$ = new Subject<any>();
  private adminRequestCreated$ = new Subject<any>();
  private adminRequestsChanged$ = new Subject<any>();

  connect(token?: string) {
    if (this.socket) return;

    const tk = token || localStorage.getItem(environment.storageKeys.token);
    if (!tk) return;

    this.socket = io(environment.apiBaseUrl, {
      transports: ['websocket'],
      query: { token: tk },
    });

    this.socket.on('request.updated', (payload) =>
      this.requestUpdated$.next(payload),
    );
    this.socket.on('request.created', (payload) =>
      this.adminRequestCreated$.next(payload),
    );
    this.socket.on('requests.changed', (payload) =>
      this.adminRequestsChanged$.next(payload),
    );
  }

  disconnect() {
    if (this.socket) {
      this.socket.removeAllListeners();
      this.socket.disconnect();
      this.socket = undefined;
    }
  }

  onRequestUpdated(): Observable<any> {
    return this.requestUpdated$.asObservable();
  }
  onAdminRequestCreated(): Observable<any> {
    return this.adminRequestCreated$.asObservable();
  }
  onAdminRequestsChanged(): Observable<any> {
    return this.adminRequestsChanged$.asObservable();
  }
}
