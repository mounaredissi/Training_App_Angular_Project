import { Component, OnInit } from '@angular/core';
import { FakeSessionItemService } from '../FakeSessionItemService';

@Component({
  selector: 'app-session-item-list',
  templateUrl: './session-item-list.component.html',
  styleUrls: ['./session-item-list.component.css']
})
export class SessionItemListComponent implements OnInit {
  sessionItems :any ;
  constructor(private sessionItemService : FakeSessionItemService) { 

  }

  ngOnInit(): void {
    this.sessionItems= this.sessionItemService.get();
  }

}
