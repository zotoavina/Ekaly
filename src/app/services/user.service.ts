import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { baseUrl } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ResponseData } from '../models/response-data';
import { DataService } from './data.service';


@Injectable({
  providedIn: 'root'
})


export class UserService {
  private url = baseUrl.api
  constructor(private dataService: DataService, private httpClient : HttpClient) { }

  getAllUser(): Observable<ResponseData>{
    return this.dataService.getData("user/all");
  }


  login(userData : any): Observable<ResponseData>{
    return this.httpClient.post<ResponseData>(this.url.concat("user/login"), userData);
  }

  insert(user : any): Observable<ResponseData>{
    return this.httpClient.post<ResponseData>(this.url.concat("user"), user);
  }

  getById(profilId: any): Observable<ResponseData>{
    return this.dataService.getData("user/" + profilId );
  }


}
