import { Component, OnInit, Input, ViewEncapsulation, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VsTabmenuIntegrationService } from '@app/widget/vs-tabmenu-integration.service';

@Component({
  selector: 'app-vs-tab-new-item',
  templateUrl: './vs-tab-new-item.component.html',
  styleUrls: ['./vs-tab-new-item.component.scss']
})
export class VsTabNewItemComponent implements OnInit {

  @Input() tab: any;
  @Input() tabConfig: any;
  @Input() tabParentConfig: any;
  @Input() parentId: string | number;

  @ViewChild('rla') rla: any;

  constructor(private activatedRoute: ActivatedRoute, private tabMenuIntegration: VsTabmenuIntegrationService) { }

  checkIfDetailPage(path, url) {
    if (!path) return false;
    const detailPagePath = path.substring(path.lastIndexOf('/') + 1);
    if (url.indexOf('fp=' + detailPagePath) > -1) {
      return true;
    }
    return false;
  }

  checkIfActive(tab) {
   // console.log(tab);
    const path = tab.path;
    const url = window.location.href;
    if (url.indexOf(path) > -1) {
      return true;
    } else if (this.checkIfDetailPage(path, url)) {
      return true;
    }

    return false;
  }

  ngOnInit() {
  }

}
