import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-patients-not-scheduled-list-mobile-view',
  templateUrl: './all-patients-not-scheduled-list-mobile-view.component.html',
  styleUrls: ['./all-patients-not-scheduled-list-mobile-view.component.scss']
})

export class AllPatientsNotScheduledListMobileViewComponent implements OnInit {

  public mainContent = {};
  public innerContent = {};

  public name = 'AllPatientsNotScheduledListMobileViewComponent';

  constructor() { }

  ngOnInit() {
  }

}