import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { ResponseData } from '../models/response-data';
import { StorageService } from './storage.service';
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(protected http: HttpClient,private storageService: StorageService, private urlService : UrlService) { }

  postData(url: string, dataObject: any): Observable<ResponseData> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        // 'Authorization': 'Bearer ' + sessionStorage.getItem('token')
        'Authorization': 'Bearer ' + this.storageService.getStorage("profil").token
      })
    };
    return this.http.post<ResponseData>(this.urlService.apiUrl(url), dataObject, httpOptions).pipe(retry(1));
  }

  getData(url: string): Observable<ResponseData> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        // 'Authorization': 'Bearer ' + sessionStorage.getItem('token')
        'Authorization': 'Bearer ' + this.storageService.getStorage("profil").token
      })
    };
    return this.http.get<ResponseData>(this.urlService.apiUrl(url), httpOptions).pipe(retry(1));
  }

}
