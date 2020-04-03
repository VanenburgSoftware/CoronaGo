import { StockLevelByHospitalService } from './../../../stock-level-by-hospital/stock-level-by-hospital.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Chart } from 'chart.js';
import * as _ from 'lodash';
@Component({
  selector: 'app-stocklevelbyhospital',
  templateUrl: './stocklevelbyhospital.component.html',
  styleUrls: [ './stocklevelbyhospital.component.scss' ]
})
export class StockLevelByHospitalComponent implements OnInit, AfterViewInit {
  barChart = [];
  selectedHospital: any;
  hospitalNames = [];
  hospitalItems = [];
  dataInHandItem = [];
  dataNeedItem = [];
  barChartData = {
    type: 'horizontalBar',
    data: {
      labels: this.hospitalItems,
      datasets: [
        {
          label: 'Stock In Hand',
          backgroundColor: 'lightblue',
          borderColor: 'blue',
          borderWidth: 1,
          data: this.dataInHandItem
        },
        {
          label: 'Stock Needed',
          backgroundColor: 'pink',
          borderColor: 'red',
          borderWidth: 1,
          data: this.dataNeedItem
        }
      ]
    },
    options: {
      responsive: true,
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: 'Stock-in-Hand at ' + (this.selectedHospital ? this.getHospitalName(this.selectedHospital) : "")
      },
      scales: {
        yAxes: [ {
          categoryPercentage: 0.7,
          barPercentage: 1.0,
          ticks: {
            beginAtZero: true
          }
        } ]
      }
    }
  }

  constructor(private stockLevelByHospitalService: StockLevelByHospitalService) { }
  //
  getHospitals() {
    const service = this.stockLevelByHospitalService.getHospitals();
    service.subscribe(res => {
      this.hospitalNames = res;
      this.selectedHospital = this.hospitalNames[ 0 ].hospitalId;
      this.getStockLevelByHospitalBySid();
    });
  }
  getHospitalItems() {
    const service = this.stockLevelByHospitalService.getHospitalItems();
    service.subscribe(res => {
      this.hospitalItems = res;
    });
  }
  filterByItem (e) {
  }
  /*  filterByItem = function (value) {
     this.selectedHospital = value.target.selectedOptions[ 0 ].value;
     this.getStockLevelByHospitalBySid();
   }; */

  getHospitalName(id) {
    const item = _.find(this.hospitalNames, (obj => {
      return obj.hospitalId === id;
    }));
    return item.hospitalName;
  }

  processGraphData(res: any, self) {
    self.hospitalItems = res.map(({ itemName }) => itemName);
    self.dataInHandItem = res.map(({ stockInHand }) => stockInHand != null ? stockInHand : 0);
    self.dataNeedItem = res.map(({ stockRequired }) => stockRequired != null ? stockRequired : 0);
    if (self.barChartData && self.barChartData.data) {
      self.barChartData.data.labels = self.hospitalItems;
      self.barChartData.data.datasets[ 0 ].data = self.dataInHandItem;
      self.barChartData.data.datasets[ 1 ].data = self.dataNeedItem;
      self.barChartData.options.title.text = 'Stock-in-Hand at ' + (self.selectedHospital ? self.getHospitalName(self.selectedHospital) : "");
      self.barChart = new Chart('canvas', self.barChartData);
    }
  }

  getStockLevelByHospitalBySid() {
    var self = this;
    const params = {
      id: this.selectedHospital
    };
    const service = this.stockLevelByHospitalService.getStockLevelByHospitalBySid(params);
    service.subscribe(res => {
      this.processGraphData(res, self);
    });
  }

  ngOnInit() {
    this.getHospitals();
    this.getHospitalItems();
  }

  // tslint:disable-next-line: indent
  ngAfterViewInit() {
    this.barChart = new Chart('canvas', this.barChartData);
  }
}
