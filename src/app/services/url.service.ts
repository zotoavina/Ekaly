import { Injectable } from '@angular/core';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UrlService {
  private api = baseUrl.api;
  private base = baseUrl.base;

  constructor() { }

  apiUrl(url: string, isApi : boolean = true){
    return (isApi)? this.api.concat(url) : this.base.concat(url) ;
  }

}
