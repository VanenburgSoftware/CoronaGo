import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { BaseService } from '@core/base.service';
import { ApiConstants } from '@app/api-constants';

@Injectable({
  providedIn: 'root'
})
export class CountyStateLoginService {

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
      email: ['jack@test.com', 'hugo@vg.com', 'tom@gmail.com', 'hanks@gmail.com', 'tony@gmail.com'],
      customer: ['Valeo', 'Google', 'Ford', 'BMW', 'MS', 'Daimler'],
      vehicle: ['Ford', 'BMW', 'Daimler'],
      global: ['ABC', 'Customer', 'Vendor', 'XYZ', 'Viewport', 'Service', 'Basic', 'Vehicle' ],
      status: ['Draft', 'In Progress', 'Waiting', 'Approved', 'Completed'],
      number: [100, 200, 300, 400, 500],
      date: [new Date().getTime(), new Date().getTime(), new Date().getTime(), new Date().getTime()],
      name: ['Tom', 'Hanks', 'Jack', 'Slayer', 'Hugo', 'Tony']
    };

	const possibleValues = {
		county : ['County 1','County 2']
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
          }  else if (column.name.indexOf('name') > -1) {
            colName = dummyData.name[this.getRandomIndex(dummyData.name)];
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

  public deleteCountyStateLogin(params: any): any {
    const serviceOpts=ApiConstants.deleteCountyStateLogin;
    const subject = new Observable(observer => {
      this.baseService[ serviceOpts.method.toLowerCase() ](serviceOpts,params).subscribe((response) => {
        observer.next(response);
      },
      (err) => {
        observer.error(err);
      });
    });

    return subject;
  }
  public getCountyStateLoginBySid(params: any): any {
    const serviceOpts=ApiConstants.getCountyStateLoginBySid;
    const subject = new Observable(observer => {
      this.baseService[ serviceOpts.method.toLowerCase() ](serviceOpts,params).subscribe((response) => {
        observer.next(response);
      },
      (err) => {
        observer.error(err);
      });
    });

    return subject;
  }
  public createCountyStateLogin(params: any): any {
    const serviceOpts=ApiConstants.createCountyStateLogin;
    const subject = new Observable(observer => {
      this.baseService[ serviceOpts.method.toLowerCase() ](serviceOpts,params).subscribe((response) => {
        observer.next(response);
      },
      (err) => {
        observer.error(err);
      });
    });

    return subject;
  }
  public updateCountyStateLogin(params: any): any {
    const serviceOpts=ApiConstants.updateCountyStateLogin;
    const subject = new Observable(observer => {
      this.baseService[ serviceOpts.method.toLowerCase() ](serviceOpts,params).subscribe((response) => {
        observer.next(response);
      },
      (err) => {
        observer.error(err);
      });
    });

    return subject;
  }
}
