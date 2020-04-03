import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConstants } from '@app/app-constants';

@Injectable({
  providedIn: 'root'
})
export class UploadAttachmentService {

  constructor(private http: HttpClient) { }

  uploadFile(file: File, url: string, description: string): Observable<any> {
    const fileName = file.name;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const options = {
      headers
    };

    const formData = new FormData();
    formData.append('file', file);
    formData.append('object_name', '');
    formData.append('object_key', '');
    formData.append('file_name', file.name);
    formData.append('file_description', description || '');
    return this.http.post(
      url,
      formData,
      options
    );
  }

  getData(url: string): Observable<any> {
    return this.http.get(url);
  }
}
