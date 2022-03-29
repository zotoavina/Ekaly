import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})


export class UserService {
   url = environment.baseUrl;
  constructor(private httpClient: HttpClient) { }

  getAllUser(){
    return this.httpClient.get(this.url.concat("/api/user/all"));
  }


}
