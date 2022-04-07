import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';
import { ResponseData } from '../models/response-data';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  private url = baseUrl.api;

  constructor(private httpClient : HttpClient) { }

  getRestaurant(): Observable<ResponseData>{
    return this.httpClient.get<ResponseData>(this.url.concat('restaurants'));
  }


}
