import { Plat } from "./plat";

export class Order {
  public id!: string;
  public plat: Plat;
  public quantity!:number;
  public totalbuyprice!: number;
  public totalsellprice!: number;

  constructor(plat: Plat, quantity: number = 1){
      this.plat = plat;
      this.quantity = quantity;
      this.totalbuyprice = this.plat.buyprice * this.quantity;
      this.totalsellprice = this.plat.sellprice * this.quantity;
  }
}
