import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';
import { ResponseData } from '../models/response-data';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private api = baseUrl.api;

  constructor(
    private dataService: DataService,
    private http: HttpClient
    ) { }

    public findEkalyCommands(): Observable<ResponseData>{
      return this.dataService.getData('orders');
    }

    public AssignCommandDeliverer(request: any): Observable<ResponseData>{
      return this.dataService.postData('orders/deliverer', request);
    }

}
