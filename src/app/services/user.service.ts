import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { baseUrl } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})


export class UserService {
   url = baseUrl.value
  constructor(private httpClient: HttpClient) { }

  getAllUser(){
    return this.httpClient.get(this.url.concat("/user/all"));
  }


}
