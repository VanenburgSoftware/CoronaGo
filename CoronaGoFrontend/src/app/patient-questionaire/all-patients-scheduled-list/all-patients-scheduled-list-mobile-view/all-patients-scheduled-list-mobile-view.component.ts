import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-patients-scheduled-list-mobile-view',
  templateUrl: './all-patients-scheduled-list-mobile-view.component.html',
  styleUrls: ['./all-patients-scheduled-list-mobile-view.component.scss']
})

export class AllPatientsScheduledListMobileViewComponent implements OnInit {

  public mainContent = {};
  public innerContent = {};

  public name = 'AllPatientsScheduledListMobileViewComponent';

  constructor() { }

  ngOnInit() {
  }

}