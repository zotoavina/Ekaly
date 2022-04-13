import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/cart';
import { Order } from 'src/app/models/order';
import { Profil } from 'src/app/models/profil';
import { ResponseData } from 'src/app/models/response-data';
import { OrderService } from 'src/app/services/order.service';
import { StorageService } from 'src/app/services/storage.service';
import { OrderStatus } from 'src/environments/environment';


@Component({
  selector: 'app-deliverer',
  templateUrl: './deliverer.component.html',
  styleUrls: ['./deliverer.component.css']
})
export class DelivererComponent implements OnInit {

  public orders!:Array<Cart>;
  public ordersDelivering!:Array<Cart>;
  public ordersDelivered!:Array<Cart>;

  public user!: Profil;

    constructor(
      private orderSrev: OrderService,
      private storageServ : StorageService
    ) { }

  ngOnInit(): void {
    this.getDelivererCommands();
  }

  drop(event: CdkDragDrop<Cart[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,event.container.data,event.previousIndex,event.currentIndex);
       this.setStatus(event.container.id, event.container.data, event.currentIndex);
    }
  }

  getDelivererCommands(){
    this.user = this.storageServ.getStorage("profil");
    this.orderSrev.findDelivererOrders(this.user.id).subscribe((res: ResponseData) => {
      if(res.code === 202){
        console.log(res.data);
        let str = JSON.stringify(res.data);
        const ordersTemp = JSON.parse(str);
        this.orders  = ordersTemp.filter((order: any) => order.status === OrderStatus.order);
        this.ordersDelivering  = ordersTemp.filter((order: any) => order.status === OrderStatus.delivering);
        this.ordersDelivered  = ordersTemp.filter((order: any) => order.status === OrderStatus.delivered);
      }
    });
  }

  setStatus(containerId: string, data: any, index: number){
    console.log(data);
    if(containerId === "delivering") this.setDelivering(index, data);
    if(containerId === "delivered") this.setDelivered(index, data);
  }

  setDelivering(index: number,data: any){
    let status = {orderId: data[index].id, status: OrderStatus.delivering};
    console.log(status);
    this.orderSrev.updateOrderStatus(status).subscribe((res: ResponseData) => {
      console.log(res);
    });
    data[index].status = OrderStatus.delivering;
  }

  setDelivered(index: number,data: any){
    let status = {orderId: data[index].id, status: OrderStatus.delivered};
    console.log(status);
    this.orderSrev.updateOrderStatus(status).subscribe((res: ResponseData) => {
      console.log(res);
    });
    data[index].status = OrderStatus.delivered;
  }


}
