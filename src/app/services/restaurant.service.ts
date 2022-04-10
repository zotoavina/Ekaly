import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';
import { ResponseData } from '../models/response-data';
import { DataService } from './data.service';
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  private url = baseUrl.api;

  constructor(
    private httpClient : HttpClient,
    private urlService: UrlService,
    private dataService: DataService
  ) { }

  getRestaurant(): Observable<ResponseData>{
    return this.dataService.getData('restaurants');
  }

  insertRestaurant(restoData : FormData): Observable<ResponseData>{
    return this.dataService.postData('restaurants', restoData);
  }

  deleteRestaurant(resto: any) : Observable<ResponseData>{
    return this.dataService.postData('restaurants/delete', resto);
  }

  insertPlat(restoData : FormData): Observable<ResponseData>{
    return this.dataService.postData('restaurants/addPlat', restoData);
  }

  deletePlat(resto : any): Observable<ResponseData>{
    return this.dataService.postData("restaurants/delete/plat", resto);
  }


}
