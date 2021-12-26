import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-session-item',
  templateUrl: './session-item.component.html',
  styleUrls: ['./session-item.component.css']
})
export class SessionItemComponent implements OnInit {
  alignemnt='left';
  @Input() session:any;
  constructor() { }

  ngOnInit(): void {
  }

}
