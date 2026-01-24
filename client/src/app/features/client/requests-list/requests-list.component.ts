import { Component, OnDestroy, OnInit } from '@angular/core';
import { RequestsService } from '../../../core/services/requests.service';
import { RequestItem } from '../../../core/models/models';
import { Subscription } from 'rxjs';
import { SocketService } from 'src/app/core/services/socket.service';

@Component({
  selector: 'app-requests-list',
  templateUrl: './requests-list.component.html',
})
export class RequestsListComponent implements OnInit, OnDestroy {
  cols = ['id', 'status', 'createdAt', 'bills'];
  rows: RequestItem[] = [];
  private sub?: Subscription;

  constructor(
    private api: RequestsService,
    private socket: SocketService,
  ) {}

  ngOnInit() {
    this.load();
    this.sub = this.socket.onRequestUpdated().subscribe(() => this.load());
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }

  load() {
    this.api.list().subscribe((r) => (this.rows = r));
  }
}
