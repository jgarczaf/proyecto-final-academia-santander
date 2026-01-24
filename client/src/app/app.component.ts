import { Component, OnInit } from '@angular/core';
import { AuthService } from './core/services/auth.service';
import { SocketService } from './core/services/socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(
    private auth: AuthService,
    private socket: SocketService,
  ) {}

  ngOnInit(): void {
    const token = this.auth.getToken();
    if (token) {
      this.socket.connect(token);
    }
  }
}
