import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'  // <- ADD THIS
})
export class SearchService {

  constructor(private http: HttpClient) { }

  /**
   * Construct the url along with queryparams for searching and pagination
   * @param url 
   * @param queryString 
   */
  getUrl(url: string, queryString: string): string {
    return url + queryString;
  }

  /**
   * return the http observable to the caller
   * @param url 
   * @param queryString 
   */
  search(url: string, queryString: string): Observable<any> {
    let _URL = this.getUrl(url, queryString);
    return this.http.get(_URL);
  }

}
