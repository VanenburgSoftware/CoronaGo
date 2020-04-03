import { Component, OnInit, Input, ComponentFactoryResolver, Injector, ApplicationRef, ElementRef, ViewChild } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-vs-kanban',
  templateUrl: './vs-kanban.component.html',
  styleUrls: ['./vs-kanban.component.scss']
})
export class VsKanbanComponent implements OnInit {

  @Input() data: any[];
  @Input() fieldMap: any[];
  @Input() options: any = {};

  @ViewChild('kanbanCard') kanbanCard: ElementRef;

  public statusHolders = {};
  public groups = {};
  public groupByMap = {};
  public groupMap = [];
  public showGroup = {};
  public groupOptions = [];
  public laneOptions = [];
  public groupBy;
  public lanes = [];
  public laneBy;
  public fieldsMap: any[];

  public laneColors = ['#ffce75', '#ff7052', '#2f61d5', '#9b7ae8', '#3fb6dc', '#43d7cc'];


  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private app: ApplicationRef,
    private http: HttpClient
  ) { }

  fillStatusHolders(lanes) {

    const obj = {};
    lanes.map(lane => {
      obj[lane] = {};
      return lane;
    });
    this.statusHolders = obj;
  }

  loadGroupOptions(data) {
    if (!data[0]) {
      return [];
    }
    return [...Object.keys(data[0]), 'None'];
  }

  drawKanban(data, groupBy) {
    const laneAndGroups = this.loadGroupOptions(data);
    this.groupOptions = laneAndGroups;
    this.laneOptions = laneAndGroups;

    if (!this.fieldsMap || !this.fieldsMap.length) {
      this.fieldsMap = this.groupOptions;
    }

    if (!groupBy) {
      groupBy = 'None'; //groupBy = this.groupOptions[0];
      this.groupBy = groupBy;
    }
    if (!this.laneBy) {
      this.laneBy = this.laneOptions.indexOf('status') > -1 ? 'status' : this.laneOptions[0];
    }

    if (this.groupBy === 'None') {
      this.groupMap = ['None'];
    }

    data.map(item => {

      const gpBy = item[groupBy] ? item[groupBy] : 'None';
      if (!this.groupByMap.hasOwnProperty(gpBy)) {
        if (this.groupMap.indexOf(gpBy) === -1) {
          this.groupMap.push(gpBy);
        }
        this.groupByMap[gpBy] = {};

      }

      this.lanes.map(lane => {
        if (!this.groupByMap[gpBy].hasOwnProperty(lane)) {
          this.groupByMap[gpBy][lane] = [];
        }
        if (item[this.laneBy].toString() === lane.toString()) {
          this.groupByMap[gpBy][lane].push(item);
          if (!this.showGroup[gpBy]) {
            this.showGroup[gpBy] = {};
          }
          this.showGroup[gpBy] = true;
        }
      });
    });

  }

  loadKanbanView(groupBy) {
    if (this.options.url) {
      const params = {
        start: 0,
        length: 200
      }
      const subject = this.http.post(this.options.url, $.param(params), {
        headers: new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded'
        })
      });

      subject.subscribe((data: any) => {
        this.options.data = data.results;
        this.drawKanban(data.results, groupBy);
      }, (err) => {
        console.log(err);
      })
    } else {
      this.drawKanban(this.options.data, groupBy);
    }
  }

  getId(item, lane) {
    if (!item) {
      return '';
    }
    return (item.toString().replace(/ /g, '')).toLowerCase() + '_' + (lane.toString().replace(/ /g, '')).toLowerCase();
  }

  getConnectedTo(item, lane, lanes) {
    if (!item) {
      return;
    }
    const returnArr = [];
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < lanes.length; i++) {
      if (lanes[i] !== lane) {
        returnArr.push((item.toString().replace(/ /g, '')).toLowerCase() + '_' + (lanes[i].toString().replace(/ /g, '')).toLowerCase());
      }
    }
    return returnArr;
  }

  addToList(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  getDropListData(item, lane) {
    //console.log('Item :', item, ' Lane: ', lane);
    //console.log('groupByMap: ', this.groupByMap[item]);
    if (!this.groupByMap[item]) {
      this.groupByMap[item] = {};
    }

    return this.groupByMap[item][lane];
  }

  toggleGroupVisibility(item) {
    this.showGroup[item] = !this.showGroup[item];
  }

  reinitLaneAndGroup() {
    this.groupByMap = {};
    this.groupMap = [];
  }

  handleGroupChange(e) {
    this.reinitLaneAndGroup();
    this.groupBy = e.target.value;
    this.loadKanbanView(this.groupBy);
  }

  handleLaneChange(e) {
    this.reinitLaneAndGroup();
    this.laneBy = e.target.value;
    this.lanes = [];
    this.options.data.map(item => {
      if (this.lanes.indexOf(item[this.laneBy]) === -1) {
        this.lanes.push(item[this.laneBy]);
      }
    });
    this.fillStatusHolders(this.lanes);
    this.loadKanbanView(this.groupBy);
  }

  hexToRGB(hex, alpha) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    if (alpha) {
      return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')';
    } else {
      return 'rgb(' + r + ', ' + g + ', ' + b + ')';
    }
  }

  getRandomColor(lane, index, density?) {

    if (index > this.laneColors.length - 1) {
      index = index % this.laneColors.length;
    }

    if (density === 'lighten') {
      return (this.hexToRGB(this.laneColors[index], 0.5));
    }
    return (this.laneColors[index]);
  }

  getRecordCount(arr) {
    return [].concat.apply([], Object.values(arr)).length;
  }

  getTranslatable(item) {
    return (item.replace(/\.?([A-Z]+)/g, (x, y) => '_' + y.toLowerCase()).replace(/^_/, '')).toUpperCase();
  }

  ngOnInit() {
    this.laneBy = this.options.laneBy;
    this.groupBy = this.options.groupBy;
    this.lanes = this.options.lanes;
    this.fieldsMap = this.options.fieldMap || [];

    this.fillStatusHolders(this.lanes);
    this.loadKanbanView(this.groupBy);
  }

}
