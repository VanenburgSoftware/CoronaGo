import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-in-hospital-list-mobile-view',
  templateUrl: './stock-in-hospital-list-mobile-view.component.html',
  styleUrls: ['./stock-in-hospital-list-mobile-view.component.scss']
})

export class StockInHospitalListMobileViewComponent implements OnInit {

  public mainContent = {};
  public innerContent = {};

  public name = 'StockInHospitalListMobileViewComponent';

  constructor() { }

  ngOnInit() {
  }

}