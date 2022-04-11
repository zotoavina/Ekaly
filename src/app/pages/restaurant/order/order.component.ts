import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/cart';
import { Order } from 'src/app/models/order';
import { Profil } from 'src/app/models/profil';
import { ResponseData } from 'src/app/models/response-data';
import { CartService } from 'src/app/services/cart.service';
import { DelivererService } from 'src/app/services/deliverer.service';
import { OrderService } from 'src/app/services/order.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {


  public commands: Array<Cart> = [];
  public cart!: Cart;
  public connectedUser!: Profil;

  constructor(
    private orderServ: OrderService,
    private storageServ: StorageService,
    private cartServ: CartService
  ) { }

  ngOnInit(): void {
    this.getConnectedUser();
    this.findRestaurantCommand();
  }

  getConnectedUser(){
    this.connectedUser = this.storageServ.getStorage("profil");
  }

  findRestaurantCommand(){
    this.orderServ.findRestaurantCommands(this.connectedUser.id).subscribe((res: any) => {
      if(res.code === 202){
          this.commands = res.data;
          console.log(this.commands);
          this.commands.forEach(command => {
            let orderTemp = command.plats.filter((pl) =>  pl.plat.parentresto === this.connectedUser.id);
            command.plats = orderTemp;
            this.cartServ.setTotalPrice(command);
          });
          console.log(this.commands);
        }
      });
  }

  detail(command: Cart){
    this.cart = command;
  }

}
