export class Plat {
  public designation: string;
  public sellprice: number;
  public buyprice: number;
  public description: string;
  public avatar: string;

  constructor(
      name: string,
      price: number,
      bought: number,
      description: string,
      photo: string
  ){
      this.designation = name;
      this.sellprice = price;
      this.buyprice = bought;
      this.description = description;
      this.avatar = photo
  }
}
