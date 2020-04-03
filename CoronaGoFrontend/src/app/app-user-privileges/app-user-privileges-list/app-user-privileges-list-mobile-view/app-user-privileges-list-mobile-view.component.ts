import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-user-privileges-list-mobile-view',
  templateUrl: './app-user-privileges-list-mobile-view.component.html',
  styleUrls: ['./app-user-privileges-list-mobile-view.component.scss']
})

export class AppUserPrivilegesListMobileViewComponent implements OnInit {

  public mainContent = {};
  public innerContent = {};

  public name = 'AppUserPrivilegesListMobileViewComponent';

  constructor() { }

  ngOnInit() {
  }

}