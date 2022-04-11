import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/cart';
import { Profil } from 'src/app/models/profil';
import { ResponseData } from 'src/app/models/response-data';
import { DelivererService } from 'src/app/services/deliverer.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  public commands: Array<Cart> = [];
  public cart!: Cart;
  public deliverers: Array<Profil> = [];
  public deliverer!: Profil;

  constructor(
    private orderServ: OrderService,
    private delivererServ: DelivererService
  ) { }

  ngOnInit(): void {
    this.findEkalyCommand();
    this.findDeliverer();
  }

  findEkalyCommand(){
    this.orderServ.findEkalyCommands().subscribe((res: ResponseData) => {
        if(res.code === 202){
          this.commands = res.data;
        }
      });
  }

  findDeliverer(){
    this.delivererServ.getAllDeliverers().subscribe((res: ResponseData) =>{
      if(res.code === 202){
        this.deliverers = res.data;
      }
    });

  }

  changeDeliverer(event: any){
    let ind = event.target.value;
    this.deliverer = this.deliverers[ind];
  }

  assignCommand(){
    if(this.deliverer != null){
      this.deliverer.password="password";
      let request={
        orderId: this.cart.id,
        deliverer: this.deliverer
      }
      this.orderServ.AssignCommandDeliverer(request).subscribe((res: ResponseData) =>{
        if(res.code === 202){
            console.log(res.message);
        }
      });
    }
  }

  detail(command: Cart){
    this.cart = command;
  }
}
