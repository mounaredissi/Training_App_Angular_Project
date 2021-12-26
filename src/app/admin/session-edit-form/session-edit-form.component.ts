import { Component, OnInit } from '@angular/core';
import { Session } from '../session';
import { SessionItemComponent } from '../session-item/session-item.component';
@Component({
  selector: 'app-session-edit-form',
  templateUrl: './session-edit-form.component.html',
  styleUrls: ['./session-edit-form.component.css']
})
export class SessionEditFormComponent implements OnInit {
  tracks = ['MEAN', 'Angular',
  'NodeJS', 'Android', 'Swift', 'Xamarin'];
  session = new Session(1, 'Web', this.tracks[0], new
  Date('2018-06-11'), 10, 'Lyon', 0, false);
  constructor() { }
  ngOnInit() { }
  editSession(sessionItem: any ) {
  console.log(sessionItem);}
  
 

}
