import { Injectable } from '@angular/core';
import {HttpClient, HttpParams, HttpRequest, HttpEvent} from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UploadServiceService {
  private baseUrl = 'http://datlanh.herokuapp.com/';

  constructor(private http: HttpClient) { }

  // file from event.target.files[0]
  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('POST', `${this.baseUrl}/addProduct`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }
}
