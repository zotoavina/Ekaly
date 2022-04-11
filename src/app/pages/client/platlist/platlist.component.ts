import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from 'src/app/models/order';
import { Plat } from 'src/app/models/plat';
import { Profil } from 'src/app/models/profil';
import { ResponseData } from 'src/app/models/response-data';
import { CartService } from 'src/app/services/cart.service';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { UrlService } from 'src/app/services/url.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-platlist',
  templateUrl: './platlist.component.html',
  styleUrls: ['./platlist.component.css']
})
export class PlatlistComponent implements OnInit {
  initial : boolean = true;
  restaurant!: Profil;
  plats: Array<Plat> | undefined= [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private cartServ: CartService,
    private profilService : UserService,
    private urlServ : UrlService
  ) { }

  ngOnInit(): void {
    this.getRestaurantParameter();
  }

  getRestaurantParameter(){
    if(!this.initial) return;
    this.profilService.getById( this.activatedRoute.snapshot.paramMap.get("id") ).subscribe( (response : ResponseData) => {
       if(response.code = 202){
         this.restaurant = response.data;
         this.plats = this.restaurant?.plats;
         this.plats?.forEach( (plat:any) => {
          plat.avatar = this.urlServ.apiUrl(plat.avatar, false);
        });
       }
    })
  }

  addToCart(plat: Plat){
    plat.parentresto = this.restaurant.id;
    let order : Order = new Order(plat,1);
    this.cartServ.addToCart(order);
  }

}
