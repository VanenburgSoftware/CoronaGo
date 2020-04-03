import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { BaseService } from '@core/base.service';
import { ApiConstants } from '@app/api-constants';

@Injectable({
  providedIn: 'root'
})
export class StockLevelByItemService {

  constructor(private baseService: BaseService) { }

  private getRandomData(items: any): string {
    return items[Math.floor(Math.random() * items.length)];
  }

  getRandomIndex(arr) {
    return Math.round(Math.random() * (arr.length - 1));
  }

  // CRUD operations starts
  getPrototypingData(columns: any): any {
    const gridData = [];

    const dummyData = {
      hospital: [
        'Anna Jaques Hospital',
        'Atlanta Medical Center',
        'BRANDON REGIONAL HOSPITAL',
        'Bay Area Medical Center',
        'Beaumont Hospital, Dearborn',
        'Bon Secours St. Francis Hospital',
        'CHI St. Joseph Health Regional',
        'Carroll Hospital Center',
        'City Hospital at White Rock',
        'Columbus Community Hospital'
      ],
      email: ['jack@test.com', 'hugo@vg.com', 'tom@gmail.com', 'hanks@gmail.com', 'tony@gmail.com'],
      customer: ['Valeo', 'Google', 'Ford', 'BMW', 'MS', 'Daimler'],
      vehicle: ['Ford', 'BMW', 'Daimler'],
      global: ['ABC', 'Customer', 'Vendor', 'XYZ', 'Viewport', 'Service', 'Basic', 'Vehicle'],
      status: ['Draft', 'In Progress', 'Waiting', 'Approved', 'Completed'],
      number: [100, 200, 300, 400, 500],
      date: [new Date().getTime(), new Date().getTime(), new Date().getTime(), new Date().getTime()],
      name: ['Tom', 'Hanks', 'Jack', 'Slayer', 'Hugo', 'Tony']
    };

    const possibleValues = {
    };

    const currencyCodes = {
    };

    // const status = ['Draft', 'In Progress', 'Completed', 'Waiting', 'New Status', 'New Status One'];

    for (let i = 0; i < 20; i++) {
      const data: any = {};
      data.firstName = dummyData.name[this.getRandomIndex(dummyData.name)];
      data.lastName = dummyData.name[this.getRandomIndex(dummyData.name)];
      data.sId = i;
      for (const column of columns) {
        if (possibleValues[column.data]) {
          data[column.data] = this.getRandomData(possibleValues[column.data]);
        } else if (currencyCodes[column.data]) {
          data[column.data] = Math.random() * 100;
          const formatField = column.data + 'CurrencyFormat';
          data[formatField] = this.getRandomData(currencyCodes[column.data]);
        } else if (column.type === 'string' || !column.type) {
          let colName = '';
          if (column.name.indexOf('email') > -1) {
            colName = dummyData.email[this.getRandomIndex(dummyData.email)];
          } else if (column.name.indexOf('customer') > -1) {
            colName = dummyData.customer[this.getRandomIndex(dummyData.customer)];
          } else if (column.name.indexOf('vehicle') > -1) {
            colName = dummyData.vehicle[this.getRandomIndex(dummyData.vehicle)];
          } else if (column.name.indexOf('name') > -1) {
            colName = dummyData.name[this.getRandomIndex(dummyData.name)];
          } else if (column.name.indexOf('hospital') > -1) {
            colName = dummyData.hospital[this.getRandomIndex(dummyData.hospital)];
          } else {
            colName = dummyData.global[this.getRandomIndex(dummyData.global)];
          }
          data[column.data] = colName;
        } else if (column.type === 'number' || column.type === 'currency') {
          data[column.data] = dummyData.number[this.getRandomIndex(dummyData.number)];
        } else if (column.type === 'date' || column.type === 'datetime') {
          data[column.data] = dummyData.date[this.getRandomIndex(dummyData.date)];
        } else if (column.type === 'boolean') {
          data[column.data] = (Math.round((Math.random() * 1) + 0) === 0);
        }

      }

      gridData.push(data);
    }

    return gridData;
  }

  public createStockLevelByItem(params: any): any {
    const serviceOpts = ApiConstants.createStockLevelByItem;
    const subject = new Observable(observer => {
      this.baseService[serviceOpts.method.toLowerCase()](serviceOpts, params).subscribe((response) => {
        observer.next(response);
      },
        (err) => {
          observer.error(err);
        });
    });

    return subject;
  }
  public getStockLevelByItemAll_StockLevelByItem(params: any): any {
    const serviceOpts = ApiConstants.getStockLevelByItemAll_StockLevelByItem;
    const subject = new Observable(observer => {
      this.baseService[serviceOpts.method.toLowerCase()](serviceOpts, params).subscribe((response) => {
        observer.next(response);
      },
        (err) => {
          observer.error(err);
        });
    });

    return subject;
  }
  public updateStockLevelByItem(params: any): any {
    const serviceOpts = ApiConstants.updateStockLevelByItem;
    const subject = new Observable(observer => {
      this.baseService[serviceOpts.method.toLowerCase()](serviceOpts, params).subscribe((response) => {
        observer.next(response);
      },
        (err) => {
          observer.error(err);
        });
    });

    return subject;
  }
  public deleteStockLevelByItem(params: any): any {
    const serviceOpts = ApiConstants.deleteStockLevelByItem;
    const subject = new Observable(observer => {
      this.baseService[serviceOpts.method.toLowerCase()](serviceOpts, params).subscribe((response) => {
        observer.next(response);
      },
        (err) => {
          observer.error(err);
        });
    });

    return subject;
  }
  public getStockLevelByItemBySid(params: any): any {
    const serviceOpts = ApiConstants.getStockLevelByItemBySid;
    const subject = new Observable(observer => {
      this.baseService[serviceOpts.method.toLowerCase()](serviceOpts, params).subscribe((response) => {
        observer.next(response);
      },
        (err) => {
          observer.error(err);
        });
    });

    return subject;
  }
}
