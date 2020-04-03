import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { AppConstants } from '@app/app-constants';
import { forkJoin } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UploadAttachmentService {

  constructor(private http: HttpClient) { }

  private actualUpload(file: File, url: string, description: string, objectId: any) {
    const headers = new HttpHeaders({
      'Content-Type': null
    });
    const options = {
      headers
    };

    if (!url) {
      url = `${AppConstants.apihost}/attachments/upload`;
    }

    const fileName = file.name;
    const formData = new FormData();
    formData.append('files', file);
    // tslint:disable-next-line:no-string-literal
    formData.append('modelName', file['objectKey']);
    formData.append('modelKey', objectId);
    // tslint:disable-next-line:no-string-literal
    formData.append('fieldName', file['fieldName']);
    formData.append('fileDesc', description || '');
    return this.http.post(
      url,
      formData
    );

  }

  // tslint:disable-next-line:variable-name
  uploadFile(file: File | any, url: string, description: string, objectId: any, form?: any): Observable<any> {

    if (file instanceof File) {

      return this.actualUpload(file, url, description, objectId);

    } else if (file instanceof Array) {
      console.log('here');

      const allFileUploadArray = [];
      for (const singleFile of file) {
        if (singleFile instanceof File) {
          allFileUploadArray.push(this.actualUpload(singleFile, url, description, objectId));
        } else {
          allFileUploadArray.push(of(singleFile));
        }
      }
      if (allFileUploadArray.length === 0) {
        allFileUploadArray.push(of([]));
      }
      return forkJoin(allFileUploadArray);

    } else {
      return of([]);
    }
  }

  getData(url: string): Observable<any> {
    return this.http.get(url);
  }

  saveAddedFiles(splittedData, id, form) {
    return Observable.create(observer => {
      const dataToResend = {};
      if (splittedData.files) {
        const totalFiles = Object.keys(splittedData.files).length;
        let index = 1;
        for (const file in splittedData.files) {
          if (splittedData.files.hasOwnProperty(file)) {
            this.uploadFile(splittedData.files[file], '', '', id, form)
              .subscribe(res => {
                if (res !== 'Nil') {
                  const curFiles = splittedData.files[file];
                  let fieldName = '';
                  let fieldValue;

                  fieldName = file;
                  if (curFiles instanceof Array) {
                    fieldValue = res; // res.join(',').split(',');
                  } else {
                    fieldValue = res[0];
                  }
                  dataToResend[fieldName] = fieldValue;
                  if (index === totalFiles) {
                    console.log('finished : ', dataToResend);
                    const finalData = { data: { ...splittedData.data, ...dataToResend } };
                    observer.next(dataToResend);
                    observer.complete();
                  }
                }
                index = index + 1;
              }, err => {
                console.log('Error == ', err);
              });
          }
        }
      }
    });
  }
}
