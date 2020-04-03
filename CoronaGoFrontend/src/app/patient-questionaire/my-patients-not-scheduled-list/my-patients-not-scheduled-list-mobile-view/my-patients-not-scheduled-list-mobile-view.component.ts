import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-patients-not-scheduled-list-mobile-view',
  templateUrl: './my-patients-not-scheduled-list-mobile-view.component.html',
  styleUrls: ['./my-patients-not-scheduled-list-mobile-view.component.scss']
})

export class MyPatientsNotScheduledListMobileViewComponent implements OnInit {

  public mainContent = {};
  public innerContent = {};

  public name = 'MyPatientsNotScheduledListMobileViewComponent';

  constructor() { }

  ngOnInit() {
  }

}