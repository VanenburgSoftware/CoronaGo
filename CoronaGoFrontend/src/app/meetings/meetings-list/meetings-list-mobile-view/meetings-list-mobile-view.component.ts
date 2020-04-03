import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meetings-list-mobile-view',
  templateUrl: './meetings-list-mobile-view.component.html',
  styleUrls: ['./meetings-list-mobile-view.component.scss']
})

export class MeetingsListMobileViewComponent implements OnInit {

  public mainContent = {};
  public innerContent = {};

  public name = 'MeetingsListMobileViewComponent';

  constructor() { }

  ngOnInit() {
  }

}