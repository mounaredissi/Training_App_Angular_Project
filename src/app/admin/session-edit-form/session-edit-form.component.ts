import { Component, OnInit } from '@angular/core';
import { Session } from '../session';
import { SessionItemComponent } from '../session-item/session-item.component';
import { FakeSessionItemService } from '../FakeSessionItemService';
import {ActivatedRoute} from '@angular/router';
import { Observable} from 'rxjs';


@Component({
  selector: 'app-session-edit-form',
  templateUrl: './session-edit-form.component.html',
  styleUrls: ['./session-edit-form.component.css']
})
export class SessionEditFormComponent implements OnInit {
  id :any;
  private sub :any;
  
  tracks = ['MEAN', 'Angular',
  'NodeJS', 'Android', 'Swift', 'Xamarin'];
   session = new Session(1, 'Web', this.tracks[0], new Date('2018-06-11'), 10, 'Lyon', 0, false);
  constructor(private route : ActivatedRoute,private sessionItemService: FakeSessionItemService) { }
    ngOnInit() {
      this.sub = this.route.params.subscribe(params => {
        this.id = params['id']; 
    });
  }
}
