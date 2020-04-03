import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-patients-scheduled-list-mobile-view',
  templateUrl: './my-patients-scheduled-list-mobile-view.component.html',
  styleUrls: ['./my-patients-scheduled-list-mobile-view.component.scss']
})

export class MyPatientsScheduledListMobileViewComponent implements OnInit {

  public mainContent = {};
  public innerContent = {};

  public name = 'MyPatientsScheduledListMobileViewComponent';

  constructor() { }

  ngOnInit() {
  }

}