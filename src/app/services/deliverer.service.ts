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
export class DelivererService {

  constructor(
    private httpClient : HttpClient,
    private dataService : DataService
  ) { }


  getAllDeliverers(): Observable<ResponseData>{
    return this.dataService.getData("deliverers");
  }

  addDeliverer(data : FormData): Observable<ResponseData>{
    return this.dataService.postData("deliverers", data);
  }

}
