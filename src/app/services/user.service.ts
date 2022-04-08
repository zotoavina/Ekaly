import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { baseUrl } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ResponseData } from '../models/response-data';


@Injectable({
  providedIn: 'root'
})


export class UserService {
   private url = baseUrl.api
  constructor(private httpClient: HttpClient) { }

  getAllUser(){
    return this.httpClient.get(this.url.concat("user/all"));
  }


  login(userData : any): Observable<ResponseData>{
    return this.httpClient.post<ResponseData>(this.url.concat("user/login"), userData);
  }

  insert(user : any){
    return this.httpClient.post(this.url.concat("user"), user);
  }




}
