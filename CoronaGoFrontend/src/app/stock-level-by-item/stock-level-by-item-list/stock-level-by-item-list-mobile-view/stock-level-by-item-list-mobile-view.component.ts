import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-level-by-item-list-mobile-view',
  templateUrl: './stock-level-by-item-list-mobile-view.component.html',
  styleUrls: ['./stock-level-by-item-list-mobile-view.component.scss']
})

export class StockLevelByItemListMobileViewComponent implements OnInit {

  public mainContent = {};
  public innerContent = {};

  public name = 'StockLevelByItemListMobileViewComponent';

  constructor() { }

  ngOnInit() {
  }

}