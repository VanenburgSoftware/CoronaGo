import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConstants } from '@app/app-constants';
import { UtilService } from './util.service';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { AppLoaderService } from '@app/shared/services/app-loader.service';
import { NotificationService } from '@app/shared/services/notification.service';

@Injectable({
  providedIn: 'root'
})

export class BaseService {

  constructor(public http: HttpClient, public util: UtilService, private loader: AppLoaderService,
              private notification: NotificationService) {
  }

  public get(options: any, params?: any): any {

    if (options.showSpinner !== 'false') {
      this.loader.show();
    }


    const url = this.normalizeUrl(options.url, params);

    return this.http.get(url).pipe(
      tap(_ => {
        this.loader.hide();
      }),
      catchError((err: any, caught: Observable<any>) => {
        this.handleError(options, err);
        return throwError(this.handleError(options, err));
      })
    );
  }

  public post(options: any, params?: any, data?: any) {

    if (options.showSpinner !== 'false') {
      this.loader.show();
    }

    const httpOptions = this.getHttpHeaders(options);
    const url = this.normalizeUrl(options.url, params);
    return this.http.post(url, params, httpOptions).pipe(
      tap(_ => {
        this.loader.hide();
        if (options.showMessage !== 'false') {
          this.notification.success(options.successMsg ? options.successMsg : AppConstants.recordUpdatedMsg);
        }
      }),
      catchError((err: any, caught: Observable<any>) => {
        this.handleError(options, err);
        return throwError(this.handleError(options, err));
      })
    );

  }

  public put(options: any, params?: any, data?: any) {

    if (typeof options.showSpinner !== 'undefined' && !options.showSpinner) {
      this.loader.show();
    }

    const httpOptions = this.getHttpHeaders(options);
    const url = this.normalizeUrl(options.url, params);
    return this.http.put(url, params, httpOptions).pipe(
      tap(_ => {
        this.loader.hide();
        if (options.showMessage !== 'false') {
          this.notification.success(options.successMsg ? options.successMsg : AppConstants.recordUpdatedMsg);
        }
      }),
      catchError((err: any, caught: Observable<any>) => {
        this.handleError(options, err);
        return throwError(this.handleError(options, err));
      })
    );

  }

  public delete(options: any, params?: any) {

    if (!options.showSpinner) {
      this.loader.show();
    }

    const httpOptions = this.getHttpHeaders(options);
    const url = this.normalizeUrl(options.url, params);
    return this.http.delete(url, httpOptions).pipe(
      tap(_ => {
        this.loader.hide();
        if (options.showMessage !== 'false') {
          this.notification.success(options.successMsg ? options.successMsg : AppConstants.recordDeletedMsg);
        }
      }),
      catchError((err: any, caught: Observable<any>) => {
        this.handleError(options, err);
        return throwError(this.handleError(options, err));
      })
    );

  }

  private normalizeUrl(baseUrl: string, params?: any) {
    if (baseUrl.indexOf('{') === -1 || !params) {
      return `/${AppConstants.apihost}/${baseUrl}`;
    }
    const splitUrl = baseUrl.split('/');
    if (splitUrl.length > 1) {
      let buildUrl = AppConstants.apihost;
      let tempUrl: string;
      for (let index = 0, length = splitUrl.length; index < length; index++) {

        tempUrl = splitUrl[index];
        if (!tempUrl) { continue; }

        if (tempUrl[0] === '{' && tempUrl[tempUrl.length - 1] === '}') {

          const param = tempUrl.replace('{', '').replace('}', '');
          const urlParameter = params[param];
          if (urlParameter !== undefined && urlParameter != null) {
            buildUrl = buildUrl + '/' + urlParameter;
          }

        } else {

          if (buildUrl[buildUrl.length - 1] !== '/') {
            buildUrl = buildUrl + '/';
          }
          buildUrl = buildUrl + tempUrl;
        }
      }

      return encodeURI(buildUrl);
    }

  }

  public getServiceUrl(url: string){
    const serviceUrl = this.normalizeUrl(url);
    return serviceUrl;
  }

  private getHttpHeaders(options: any) {

    let contentTypeHeader: string = (options.headers ? options.headers.get('Content-Type') : '');

    if (!contentTypeHeader) {
      contentTypeHeader = AppConstants.defaultContentType;
    }

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  contentTypeHeader
      })
    };

    return httpOptions;
  }

  private handleError(options: any, err: any) {
    this.loader.hide();
    if (err.error instanceof ErrorEvent) {
      /** A client-side or network error occurred. */
      console.error('An error occurred:', err.error.message);
    } else if (!options.showErrorMsg) {
      let errorMsg = '';
      if ( err.data && err.data.validationErrors && err.data.validationErrors.length) {
        for ( err of err.data.validationErrors) {
          errorMsg += err.message;
        }
      } else if (err.formattedMsg) {
        errorMsg = err.formattedMsg;
      } else if (err.data && err.data.applicationMessage) {
        errorMsg = err.data.applicationMessage;
      } else if(err.error && err.error.MESSAGE){
        errorMsg = err.error.MESSAGE;
      }

      if(!errorMsg) {
        errorMsg = 'The record couldn\'t be updated. Please try again';
      }

      this.notification.error(errorMsg);
    }
  }


}
