import { Component, OnInit } from '@angular/core';
import { AppLoaderService } from '@shared/services/app-loader.service';

@Component({
  selector: 'app-loader',
  template: `
    <div class="spinner-container" [ngClass]="{'disable-mask': !loader.showMask}" *ngIf="loader.loading == true">
      <div class="spinner"></div>
    </div>
  `,
  styles: []
})
export class AppLoaderComponent implements OnInit {

  constructor(public loader: AppLoaderService) { }

  ngOnInit() {
  }

}
