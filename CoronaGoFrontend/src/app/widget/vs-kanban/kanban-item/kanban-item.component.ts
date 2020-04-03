import { Component, OnInit, Input, ComponentFactoryResolver, Injector, ApplicationRef, ViewChild, ElementRef, TemplateRef } from '@angular/core';
import { UtilService } from '@app/core/util.service';
import { MaskApplierService } from 'ngx-mask';

@Component({
  selector: 'app-kanban-item',
  templateUrl: './kanban-item.component.html',
  styleUrls: ['./kanban-item.component.scss']
})
export class KanbanItemComponent implements OnInit {

  @Input() card: any;
  @Input() fieldMap: any;
  @Input() template: any;
  @Input() cardId: any;
  @Input() columns: any;

  @ViewChild('kanbanItem') kanbanItem: ElementRef;

  public itemContent: any[] = [];
  public cId: any;
  public isExpanded = false;
  private toIgnoreFields = ['sid', 'modifiedBy', 'modifiedDate', 'createdBy', 'createdDate', 's_id', 'S_ID'];

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private app: ApplicationRef,
    private util: UtilService,
    private maskService: MaskApplierService
  ) { }

  getFormattedData(col, data) {
    let colInfo = this.columns.filter(c => c.data === col);
    const _data = data[col];
    if(!colInfo || !colInfo.length) {
      return _data;
    }
    colInfo = colInfo[0];
    if (colInfo.type === 'date') {
      return this.util.formatDate(_data, colInfo.format ? colInfo.format : null);
    } else if (colInfo.type === 'datetime') {
      return this.util.formatDateTime(_data, colInfo.format ? colInfo.format : null);
    } else if (colInfo.numberFormat) {
      return colInfo.numberFormat ? this.maskService.applyMask(_data.toString(), colInfo.numberFormat) : _data;
    }

    return _data;
  }

  loadCardItem() {
    for (const key in this.card) {
      if (this.card.hasOwnProperty(key) && this.toIgnoreFields.indexOf(key) === -1) {
        const element = this.getFormattedData(key, this.card);
        if (this.fieldMap.indexOf(key) > -1) {
          this.itemContent.push({
            key: (key.replace(/\.?([A-Z]+)/g, (x, y) => '_' + y.toLowerCase()).replace(/^_/, '')).toUpperCase(),
            element
          });
        }
      }
    }
  }

  expandCard() {
    this.isExpanded = !this.isExpanded;
  }

  ngOnInit() {
    this.cId = 'card_' + this.cardId;
    if (this.template) {
      const detailTarget = this.kanbanItem.nativeElement;
      const componentName = this.template;
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentName);
      const componentRef = componentFactory.create(this.injector, [], detailTarget);
      this.app.attachView(componentRef.hostView);
    } else {
      this.loadCardItem();
    }
  }

}
