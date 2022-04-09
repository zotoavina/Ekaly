import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';
import { ResponseData } from '../models/response-data';
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root'
})
export class DelivererService {
  private url = baseUrl.api;

  constructor(
    private httpClient : HttpClient,
    private urlService: UrlService
  ) { }


  getAllDeliverers(): Observable<ResponseData>{
    return this.httpClient.get<ResponseData>( this.urlService.apiUrl("deliverers") );
  }

  addDeliverer(data : FormData): Observable<ResponseData>{
    return this.httpClient.post<ResponseData>(this.urlService.apiUrl("deliverers"), data);
  }

}
