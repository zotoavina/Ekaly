import { Injectable } from '@angular/core';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UrlService {
  private api = baseUrl.api;
  private base = baseUrl.base;

  constructor() { }

  apiUrl(url: string, basic : boolean = false){
    return (basic)? this.api.concat(url) : this.base.concat(url) ;
  }

}
