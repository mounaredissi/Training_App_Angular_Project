import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FakeSessionItemService } from '../FakeSessionItemService';
@Component({
  selector: 'app-session-add-form',
  templateUrl: './session-add-form.component.html',
  styleUrls: ['./session-add-form.component.css']
})
export class SessionAddFormComponent implements OnInit {

  constructor(private sessionItemService: FakeSessionItemService) { }

  ngOnInit(): void {

  }
  addSession(sessionItem: NgForm):void {
    
    //console.log("Logs...."+JSON.stringify(sessionItem.value));
    console.log(sessionItem);
    this.sessionItemService.add(sessionItem);
    }
}
