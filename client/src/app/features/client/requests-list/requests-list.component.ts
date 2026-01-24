import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../../../core/services/requests.service';
import { RequestItem } from '../../../core/models/models';

@Component({
  selector: 'app-requests-list',
  templateUrl: './requests-list.component.html',
})
export class RequestsListComponent implements OnInit {
  cols: string[] = ['id', 'status', 'createdAt', 'bills'];
  rows: RequestItem[] = [];

  constructor(private api: RequestsService) {}

  ngOnInit() {
    this.api.list().subscribe((r) => (this.rows = r));
  }
}
