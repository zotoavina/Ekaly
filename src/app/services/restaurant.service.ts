import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';
import { ResponseData } from '../models/response-data';
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  private url = baseUrl.api;

  constructor(
    private httpClient : HttpClient,
    private urlService: UrlService
  ) { }

  getRestaurant(): Observable<ResponseData>{
    return this.httpClient.get<ResponseData>(this.url.concat('restaurants'));
  }

  insertRestaurant(restoData : FormData): Observable<ResponseData>{
    return this.httpClient.post<ResponseData>(this.urlService.apiUrl('restaurants'), restoData);
  }

  deleteRestaurant(resto: any) : Observable<ResponseData>{
    return this.httpClient.post<ResponseData>(this.urlService.apiUrl('restaurants/delete'), resto);
  }

  insertPlat(restoData : FormData): Observable<ResponseData>{
    return this.httpClient.post<ResponseData>(this.urlService.apiUrl('restaurants/addPlat'), restoData);
  }


}
