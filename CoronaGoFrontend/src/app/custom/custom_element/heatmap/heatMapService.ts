import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { BaseService } from '@core/base.service';
import { ApiConstants } from '@app/api-constants';

@Injectable({
  providedIn: 'root'
})
export class HeatMapService {

  constructor(private baseService: BaseService) { }

  public getHeatMap(params: any): any {
    const serviceOpts = ApiConstants.getHeatMap;
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

  public getLatLongFromZip(params: any): any {
    const serviceOpts = ApiConstants.getLatLong;
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
