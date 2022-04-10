import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  setStorage(key: string, value: any){
    localStorage.setItem(key, JSON.stringify(value));
  }

  getStorage(key: string): any {
    let value = localStorage.getItem(key);
    return  (value)? JSON.parse( value ) : null;
  }

  removeItem(key: string): void{
    localStorage.removeItem(key);
  }

  clearStorage(): void{
    localStorage.clear();
  }

}
