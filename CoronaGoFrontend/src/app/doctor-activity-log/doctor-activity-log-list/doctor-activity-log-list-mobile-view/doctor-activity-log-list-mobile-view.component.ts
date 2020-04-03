import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-activity-log-list-mobile-view',
  templateUrl: './doctor-activity-log-list-mobile-view.component.html',
  styleUrls: ['./doctor-activity-log-list-mobile-view.component.scss']
})

export class DoctorActivityLogListMobileViewComponent implements OnInit {

  public mainContent = {};
  public innerContent = {};

  public name = 'DoctorActivityLogListMobileViewComponent';

  constructor() { }

  ngOnInit() {
  }

}