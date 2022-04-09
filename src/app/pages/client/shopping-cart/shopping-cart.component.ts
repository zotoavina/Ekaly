import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/cart';
import { ResponseData } from 'src/app/models/response-data';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  public cart!: Cart;
  public message: string ="";
  public totalWithFrais: number = 0;
  public cartExist: boolean = true;

  constructor(
    private cartServ: CartService
  ) { }

  ngOnInit(): void {
    this.checkCart();
  }

  checkCart(){
    if(!this.cartServ.checkCart()){
      this.cartExist = true;
      this.cart = this.cartServ.getCart();
      this.totalWithFrais = this.cartServ.setTotalWithFrais(this.cart);
      console.log(this.cart);
    }else{
      this.cartExist = false;
      this.message = "Vous n'avez rien dans le panier!!!";
    }
  }

  setQuantity(event: any, index: number){
    console.log(event.target.value);
    let quantity: number = Number.parseInt(event.target.value);
    this.cart.plats[index] = this.cartServ.setQuantityOrder(this.cart.plats[index],quantity);
    this.cartServ.setTotalPrice(this.cart);
    this.totalWithFrais = this.cartServ.setTotalWithFrais(this.cart);
    this.cartServ.setCart(this.cart);
  }

  removeToCart(indice: number){
   this.cart.plats.splice(indice,1);
   this.cartServ.setTotalPrice(this.cart);
   this.totalWithFrais = this.cartServ.setTotalWithFrais(this.cart);
   this.cartServ.setCart(this.cart);
  }

  confirmCommand(){
    console.log("commandé");
    this.cartServ.addCommand(this.cart).subscribe((res: ResponseData) => {
        if(res.code === 202){
          this.message = "Votre commande a été validé";
          this.cartExist = false;
          this.cart = this.cartServ.getCart();
        }
      });
  }

}
