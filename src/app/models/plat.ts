export class Plat {
  public _id: string;
  public id!: string;
  public designation: string;
  public sellprice: number;
  public buyprice: number;
  public description: string;
  public avatar: string;
  public parentresto!: string;
  public status : boolean;

  constructor(
      id: string,
      name: string,
      price: number,
      bought: number,
      description: string,
      photo: string,
      status: boolean
  ){
      this._id = id;
      this.designation = name;
      this.sellprice = price;
      this.buyprice = bought;
      this.description = description;
      this.avatar = photo;
      this.status = status
  }
}
