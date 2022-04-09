import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl, environment } from 'src/environments/environment';
import { Cart } from '../models/cart';
import { Order } from '../models/order';
import { Profil } from '../models/profil';
import { ResponseData } from '../models/response-data';
import { StorageService } from './storage.service';
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private url = baseUrl.api;

  constructor(
  private storageServ: StorageService,
  private http: HttpClient,
  private urlService: UrlService
  ) { }

  checkCart(){
    return (localStorage.getItem("cart") == null);
  }

  addToCart(order : Order){
    let cart: Cart;
    if(this.checkCart()){
      let profil : Profil = this.storageServ.getStorage("profil");
      let or = new Array<Order>();
      or.push(order);
      cart = new Cart(profil,or);
    }else{
      cart = this.getCart();
      let index = cart.plats.findIndex((element:Order) => element.plat._id === order.plat._id);
      console.log(index);
      if(index === -1){
        cart.plats.push(order);
      }
    }
    this.setTotalPrice(cart);
    this.setCart(cart);
  }

  getCart(): Cart{
    return JSON.parse(localStorage.getItem("cart")  || '{}');
  }

  setCart(cart: Cart){
    localStorage.setItem("cart",JSON.stringify(cart));
  }

  setQuantityOrder(order: Order, quantity: number): Order{
    order = new Order(order.plat, quantity);
    return order;
  }

  setTotalPrice(cart: Cart){
    cart.totalbuyprice = 0;
    cart.totalsellprice = 0;
    cart.plats.forEach(order => {
      cart.totalbuyprice = cart.totalbuyprice + order.totalbuyprice;
      cart.totalsellprice = cart.totalsellprice + order.totalsellprice;
    });
  }

  setTotalWithFrais(cart: Cart){
    return (cart.totalsellprice + cart.frais);
  }

  public addCommand(cart: Cart): Observable<ResponseData>{
    return this.http.post<ResponseData>(this.urlService.apiUrl('orders'), cart);
  }

}
