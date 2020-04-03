import { Component, OnInit, Input, ViewEncapsulation, ViewChild, Injector, ApplicationRef, ComponentFactoryResolver } from '@angular/core';
import { ContextMenuComponent, ContextMenuService } from 'ngx-contextmenu';
import { Subject, Observable, fromEvent } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { UtilService } from '../../core/util.service';
import { NotificationService } from '@shared/services/notification.service';

import { VsSearchService } from '../vs-search/vs-search.service';
import { AppConstants } from '@app/app-constants';
import { VsFormComponent } from '../vs-form/vs-form.component';
import { join } from 'lodash';

import { MaskApplierService } from 'ngx-mask';

@Component({
  selector: 'app-vs-grid',
  templateUrl: './vs-grid.component.html',
  styleUrls: [ './vs-grid.component.scss' ],
  encapsulation: ViewEncapsulation.None
})
export class VsGridComponent implements OnInit {
  public dtOptions: any = {};
  private dtInstance: any;
  private clickedRowData: any;
  private clickedRow: any;
  public currentRowOptions: any = [];
  private serviceInprogress = false;
  private draw = 0;
  private start = 0;
  private length: any;
  private params: any = {};
  private total: any;
  private filtered: any;
  private sortDirection: 'asc' | 'desc';
  private sortColumn: number;
  private tracker: any;
  public showLoading = false;
  private searchInitiated = false;

  public dtTrigger: Subject<any> = new Subject();
  private scrollSubscription: any;

  public snapshotFormConfig: any = {};
  public snapshotData: any = {};


  @Input() contextMenu: ContextMenuComponent;
  @Input() gridConfig: any;

  // @ViewChild(VsFormComponent) child;

  constructor(
    private util: UtilService,
    private notification: NotificationService,
    private contextMenuService: ContextMenuService,
    private http: HttpClient,
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private app: ApplicationRef,
    private search: VsSearchService,
    private maskService: MaskApplierService) {
  }

  ngOnInit(): void {
    const self = this;

    this.attachSearchEvents();

    // tslint:disable-next-line: no-string-literal
    $.fn.DataTable[ 'ext' ].errMode = 'throw';

    const options: any = {
      scrollX: true,
      bFilter: false,
      id: 'datatables_' + Math.floor(Math.random() * 100) + 1,
      rowId: this.gridConfig.uniqueIdField ? this.gridConfig.uniqueIdField : 'id',
      scrollY: this.gridConfig.scrollY ? this.gridConfig.scrollY : (window.innerHeight - 250),
      responsive: false,
      scrollCollapse: true,
      columns: this.getColumns(),
      ordering: this.gridConfig.ordering ? this.gridConfig.ordering : false,
      aaSorting: [],
      order: [],
      paging: false,
      deferRender: this.gridConfig.deferRender ? this.gridConfig.deferRender : true,
      pageLength: this.gridConfig.pageLength ? this.gridConfig.pageLength : 50,
      columnDefs: this.gridConfig.columnDefs ? this.gridConfig.columnDefs : [],
      fixedColumns: this.gridConfig.fixedColumns ? this.gridConfig.fixedColumns : '',
      colReorder: true,
      complexHeader: this.gridConfig.complexHeader ? this.gridConfig.complexHeader : '',
      rowCallback: (row: Node, data: any[] | object, index: number) => {
        self.onRowCallback(row, data, index);
      },
      drawCallback: (settings: object) => {
        // const api = this.api();
        self.onDrawCallback(settings);
      },
      initComplete: (settings: any, json: any) => {
        this.dtInstance = settings.oInstance.api();
        self.onInitComplete(this.dtInstance, settings, json);
      }
    };

    if (!this.gridConfig.disableSelection) {
      options.select = {
        style: 'multi',
        selector: 'td:first-child'
      };
    }

    if (this.gridConfig.rowMenuOptions && this.gridConfig.rowMenuOptions.length) {
      options.columns.push({
        data: '',
        className: 'grid_context_menu',
        title: '',
        orderable: false,
        render: (data: any, type: any, row: any, meta: any) => {
          return '<div class="grid_context_menu_icon"><i class="fa fa-ellipsis-v"></i></div>';
        }
      });
    }

    if (this.gridConfig.data) {

      // tslint:disable-next-line: no-string-literal
      $.fn.DataTable[ 'ext' ].errMode = 'none';
      this.dtOptions = $.extend(options, {
        data: this.gridConfig.data
      });

      setTimeout(() => {
        self.dtTrigger.next();
      }, 100);

    } else {

      this.dtOptions = $.extend(options, {});
      this.length = this.gridConfig.length ? this.gridConfig.length : 50;
      this.getParams();
      this.getData();
    }

  }

  private getColumns(): any {
    const self = this;
    const columns = [];
    for (const col of this.gridConfig.columns) {
      col.className = col.className ? (col.className + ' ' + col.data) : col.data;
      col.orderable = (col.orderable === false ? false : (this.gridConfig.orderable ? this.gridConfig.orderable : true));
      if (!col.orderable) {
        col.className += ' vs-ordering-disabled';
      } else {
        col.className += ' vs-ordering';
      }

      /*if (i === 0 && !this.gridConfig.disableSelection) {
        col.className = col.className + ' ' + 'select-checkbox';
      }*/

      const confRender = col.render;
      if (col.type === 'date') {
        col.render = (data: any, type: any, row: any, meta: any) => {
          return self.util.formatDate(data, col.format ? col.format : null);
        };
      } else if (col.type === 'datetime') {
        col.render = (data: any, type: any, row: any, meta: any) => {
          return self.util.formatDateTime(data, col.format ? col.format : null);
        };
      } else if (col.type === 'currency') {
        col.render = (data: any, type: any, row: any, meta: any) => {
          let cCode: any;
          const curFormatField = col.data + 'CurrencyFormat';
          if (row[ curFormatField ]) {
            cCode = row[ curFormatField ];
          } else {
            cCode = col.currencyCode ? col.currencyCode : null;
          }

          const cDigits = col.currencyDigits ? col.currencyDigits : null;
          const cSymbol = col.currencySymbol ? col.currencySymbol : null;
          return self.util.formatCurrency(data, cCode, cDigits);
        };
      } else if (col.conditionalColor) {
        col.render = (data: any, type: any, row: any, meta: any) => {
          const conditionalClrData = row[ col.conditionalColorField ];
          return '<div class="conditional_color_column ' + col.conditionalColor[ conditionalClrData ] + '">' + data + '</div>';
        };
      } else if (col.numberFormat) {
        col.render = (data: any, type: any, row: any, meta: any) => {
          // return self.util.formatNumber(data, col.numberFormat ? col.numberFormat : null);
          return col.numberFormat ? self.maskService.applyMask(data.toString(), col.numberFormat) : data;
        };
      } else {
        col.render = (data: any, type: any, row: any, meta: any) => {
          if (row && !row.hasOwnProperty(col.data)) {
            row[ col.data ] = data = '';
          }
          if (confRender) {
            return confRender(data, type, row, meta);
          }
          return data;
        };
      }
      columns.push(col);
    }

    if (!this.gridConfig.disableSelection) {
      columns.unshift({
        data: '',
        orderable: false,
        className: 'select-checkbox',
        render: (data: any, type: any, row: any, meta: any) => {
          return ' <i class="fa fa-chevron-down expand-row">&nbsp;</i>';
        }
      });
    }
    return columns;
  }

  public refreshGrid(): void {
    this.getData(false, false, true);
  }

  private getData(drawNextPage?: boolean, fromSorting?: boolean, fromRefresh?: boolean): void {
    this.showLoading = true;
    const params = this.params;

    if (fromSorting) {
      params.start = 0;
      params.length = 50;
      params.order = [ {
        column: this.sortColumn,
        dir: this.sortDirection
      } ];

    } else if (fromRefresh) {
      params.start = 0;
      params.length = 50;
      params.order = [];
    } else if (drawNextPage) {
      params.start = this.filtered;
      params.length = 50;
    }

    const subject = this.http.post(this.gridConfig.ajaxUrl, $.param(params), {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    });

    subject.subscribe((data: any) => {
      this.total = data.total ? data.total : '';
      this.filtered = data.filtered ? data.filtered : '';
      this.serviceInprogress = false;
      if (!drawNextPage) {
        if (this.dtInstance) {
          this.tracker.scroll(0, 0);
          this.dtInstance.clear();
          this.dtInstance.rows.add(data.results).draw();
        } else {
          this.dtOptions.data = data.results;
          this.dtTrigger.next();
        }
      } else {
        this.dtInstance.rows.add(data.results).draw();
      }
      if (this.gridConfig.ajaxSucess) {
        this.gridConfig.ajaxSucess(data.results);
      }
    }, (err) => {
      this.showLoading = false;
    });
  }

  private getParams(): void {
    const params: any = {};

    params.draw = this.draw;
    params.start = this.start;
    params.length = this.length;

    params.search = {};
    params.search.value = {};
    params.search.regex = false;

    params.columns = [];
    for (const col of this.gridConfig.columns) {
      const column: any = {};
      column.data = col.data;
      column.name = col.name;
      column.searchable = true;
      column.orderable = col.orderable === false ? false : (this.gridConfig.orderable ? this.gridConfig.orderable : true);

      column.search = {};
      column.search.value = {};
      column.search.regex = false;

      params.columns.push(column);
    }

    params.columns.order = [];

    this.params = params;
  }

  private onInitComplete(dtInstance: any, settings: any, json: any): void {

    const self = this;
    dtInstance.on('select', (e: any, dt: any, type: any, ix: any) => {
      const selected = dt.rows({ selected: true });
      const maxRows = self.gridConfig.maxRowsAllowedForSelection ? self.gridConfig.maxRowsAllowedForSelection : 10;
      if (selected.count() > maxRows) {
        self.notification.warn('MAX_ALLOWED_ROWS', { maxRows });
        dt.rows(ix).deselect();
      } else {
        this.gridConfig.onRowSelect(selected, ix);
      }
    });

    dtInstance.on('deselect', (e: any, dt: any, type: any, ix: any) => {

      setTimeout(() => {
        const selected = dt.rows({ selected: true });
        self.gridConfig.onRowDeselect(selected);
      }, 100);

    });

    this.attachInfiniteScroll(dtInstance, settings);
    if (this.gridConfig.ajaxUrl && this.gridConfig.customOrdering) {
      this.attachSorting(dtInstance);
    }

    if (this.gridConfig.onInitComplete) {
      this.gridConfig.onInitComplete(dtInstance, settings, json);
    }
  }

  private attachInfiniteScroll(dtInstance: any, settings: any) {

    this.tracker = document.getElementsByClassName('dataTables_scrollBody')[ 0 ];

    const windowYOffsetObservable = fromEvent(this.tracker, 'scroll').map(() => {
      return this.tracker.scrollTop;
    });

    this.scrollSubscription = windowYOffsetObservable.subscribe((scrollPos) => {
      const limit = (this.tracker.scrollHeight - this.tracker.clientHeight) * 0.90;
      if (scrollPos >= limit && this.total > this.filtered) {
        if (!this.serviceInprogress) {
          this.serviceInprogress = true;
          this.getData(true);
        }
      }
    });
  }

  private attachSorting(dtInstance: any): void {
    const self = this;
    const headerEl = self.dtInstance.header()[ 0 ];

    const headNode = $(headerEl).find('th');
    headNode.off('click');
    headNode.on('click', (e) => {
      const curTarget = $(e.currentTarget);
      if (curTarget.hasClass('vs-ordering-disabled')) { return; }

      const sortDirection = curTarget.hasClass('asc') ? 'desc' : 'asc';
      const colOrder = parseInt(curTarget.attr('colorder'));

      this.dtOptions.columns[ colOrder ].sortDirection = sortDirection;
      this.sortColumn = colOrder;
      this.sortDirection = sortDirection;
      this.getData(false, true);

    });
  }

  private rowClickHandler(info: any, event: any, presstype?: any): void {
    const targetEl = $(event.currentTarget);
    const target = $(event.target);
    if (target.hasClass('expand-row')) {
      if (target.hasClass('expand-row-active')) {
        targetEl.parent('tr').removeClass('row-expanded');
        target.removeClass('expand-row-active');
      } else {
        targetEl.parent('tr').addClass('row-expanded');
        target.addClass('expand-row-active');
      }
      event.stopPropagation();
      return;
    }
    if ((targetEl.hasClass('select-checkbox') || targetEl.hasClass('grid_context_menu')) && !AppConstants.isMobile) {
      return;
    }

    if (targetEl.hasClass('select-checkbox') && presstype === 'longpress' && AppConstants.isMobile) {
      if ($(event.currentTarget.parentElement).hasClass('selected')) {
        this.dtInstance.row(event.currentTarget.parentElement).deselect();
      } else {
        this.dtInstance.row(event.currentTarget.parentElement).select();
      }
      return;
    }


    /* if (this.gridConfig.type === 'snapshot') {
      this.showSnapshot(info);
      return;
    } */
    if (this.gridConfig.onRowClick) {
      const uniqueIdField = this.gridConfig.uniqueIdField ? this.gridConfig.uniqueIdField : 'sid';
      this.gridConfig.onRowClick(event, info[ uniqueIdField ]);
    }
  }

  public onContextMenu($event: any, item: any): void {
    setTimeout(() => {
      this.contextMenuService.show.next({
        anchorElement: $event.target,
        contextMenu: this.contextMenu,
        event: $event as any,
        item: null
      });
      $event.preventDefault();
      $event.stopPropagation();
    }, 100);

  }

  private onRowCallback(row: Node | any, data: any[] | object, index: number) {

    $('td', row).off('click');
    $('td', row).on('click', (event: any) => {
      this.rowClickHandler(data, event);
    });

    $('td', row).on('contextmenu', (event: any) => {
      event.preventDefault();
      this.rowClickHandler(data, event, 'longpress');
      event.stopPropagation();
    });

    /* $('td', row).on('', (event: any) => {
      console.log(data, event);
      this.rowClickHandler(data, event);
    }); */

    if (this.gridConfig.rowMenuOptions) {
      $('td .grid_context_menu_icon', row).off('click');
      $('td .grid_context_menu_icon', row).on('click', (e) => {
        if (this.gridConfig.beforeRowMenuShow) {
          this.currentRowOptions = $.extend(true, [], this.gridConfig.rowMenuOptions);
          for (const option of this.currentRowOptions) {
            const extendedProps = this.gridConfig.beforeRowMenuShow(option, data, row);
            this.clickedRowData = data;
            this.clickedRow = row;
            $.extend(option, extendedProps);
          }
        }
        this.onContextMenu(e, this.currentRowOptions);
      });
    }

    if (AppConstants.isMobile) {
      if (this.gridConfig.mobileTemplate) {
        const detailTarget = $($(row).children('td')[ 0 ]).get(0);
        const componentName = this.gridConfig.mobileTemplate;
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentName);

        const componentRef = componentFactory.create(this.injector, [], detailTarget);

        let dataSplit = {
          mainContent: {},
          innerContent: {}
        };
        this.gridConfig.columns.map((column, i) => {
          const tItem = (column.data.replace(/\.?([A-Z]+)/g, (x, y) => '_' + y.toLowerCase()).replace(/^_/, '')).toUpperCase();
          if (i < 3) {
            dataSplit.mainContent[ tItem ] = {
              data: this.getDataByType(column, data)
            };
          } else {
            dataSplit.innerContent[ tItem ] = {
              data: this.getDataByType(column, data)
            };
          }
        });
        /* Object.keys(data).map((item, i) => {
          const tItem = (item.replace(/\.?([A-Z]+)/g, (x, y) => '_' + y.toLowerCase()).replace(/^_/, '')).toUpperCase();

          if (!dataSplit.innerContent.hasOwnProperty(tItem)) {
            dataSplit.innerContent[tItem] = {
              data: data[item]
            };
          }
        }); */

        if (this.gridConfig.mobileContent) {
          dataSplit = this.gridConfig.mobileContent(row, data, index, dataSplit);
        }
        (componentRef.instance as any).mainContent = dataSplit.mainContent;
        (componentRef.instance as any).innerContent = dataSplit.innerContent;
        this.app.attachView(componentRef.hostView);
      } else {
        const mobileContent = this.drawMobileColumn(data);

        $($(row).children('td')[ 0 ]).html(mobileContent);
      }
    }
    return row;
  }

  public getDataByType(col, data) {
    const _data = data[ col.data ]
    if (col.type === 'date') {
      return this.util.formatDate(_data, col.format ? col.format : null);
    } else if (col.type === 'datetime') {
      return this.util.formatDateTime(_data, col.format ? col.format : null);
    } else if (col.numberFormat) {
      return col.numberFormat ? this.maskService.applyMask(_data.toString(), col.numberFormat) : _data;
    }

    return _data;
  }

  public drawMobileColumn(data) {
    const content = [];
    const innerContent = [];
    content.push('<div class="row mobile-row">');
    content.push('<i class="fa fa-chevron-down expand-row">&nbsp;</i>');

    let i = 0;
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        const element = data[ key ];
        const addClass = i === 0 ? 'first-elem' : key === 'status' ? 'status-col' : i > 2 ? 'hidden-cols' : '';
        const toInsert = `<div class="col-6 mobile-cols ${addClass}"><span>${element}</span><label translate>${key}</label></div>`;

        if (i < 4) {
          content.push(toInsert);
        } else {
          innerContent.push(toInsert);
        }
        i++;
      }
    }

    content.push(`<div class='inner-div col-12'><div class='row'>${innerContent.join('')}</div></div>`);
    content.push('</div>');
    return content.join('');
  }

  public onRowMenuOptionClick(event: any, item: any) {
    if (this.gridConfig.onRowMenuClick && !item.disabled) {
      this.gridConfig.onRowMenuClick(item, this.clickedRow, this.clickedRowData);
    }
  }

  private onDrawCallback(settings: any) {
    if (this.gridConfig.drawCallback) {
      this.gridConfig.drawCallback(settings);
    }
    this.showLoading = false;
  }

  private fireSearch(searchObj) {
    if (this.gridConfig.ajaxUrl) {
      this.params.search = {};
      this.params.search.value = (!Object.keys(searchObj).length
        || !Object.values(searchObj).length
        || !join(Object.values(searchObj)).length)
        ? JSON.stringify({})
        : JSON.stringify(searchObj);
      this.params.search.regex = false;

      if (this.searchInitiated) {
        this.getData(false, false, true);
      } else {
        this.searchInitiated = true;
      }

    } else {
      if (this.dtInstance) {
        this.dtInstance.search(searchObj).draw();
      }
    }
  }

  private attachSearchEvents() {
    this.search.gSearchObj.subscribe(key => {
      const searchVal = {
        _global: key
      };
      this.fireSearch(searchVal);
    });

    this.search.advSearchObj.subscribe(key => {
      const searchVal = key;
      this.fireSearch(searchVal);
    });

  }

  private showSnapshot(data: any) {

  }

  onDestroy(): void {
    this.dtTrigger.unsubscribe();
    this.scrollSubscription.unsubscribe();
  }


}
