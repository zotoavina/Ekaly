import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Plat } from 'src/app/models/plat';
import { Profil } from 'src/app/models/profil';
import { ResponseData } from 'src/app/models/response-data';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { StorageService } from 'src/app/services/storage.service';
import { UrlService } from 'src/app/services/url.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {

  restaurant!: Profil;
  plats : Array<Plat> | undefined = [];
  plat: Plat =  new Plat("Burger",100,200,"Burger Burger","Burger"); // initialisation formulaire
  platesForm!: FormGroup;
  connectedUser!: Profil;
  formData : FormData = new FormData();
  fileName : string = "Choose an image";
  clientType !: Boolean;
  public action: boolean = true; //true pour l'ajout, false pour la modif

  constructor(
    private builder : FormBuilder,
    private activatedRoute : ActivatedRoute,
    private profilService : UserService,
    private storageService : StorageService,
    private restaurantServ: RestaurantService,
    private urlServ: UrlService
  ) { this.setForm();}

  ngOnInit(): void {
    console.log("Bonjour");
    this.getConnectedUser();
    this.getRestaurantParameter();
  }

  getRestaurantParameter(){
    console.log(this.activatedRoute.snapshot.paramMap.get("id"));
    this.profilService.getById( this.activatedRoute.snapshot.paramMap.get("id") ).subscribe( (response : ResponseData) => {
       if(response.code = 202){
         this.restaurant = response.data;
         this.plats = this.restaurant.plats;
         this.plats?.forEach( (plat:any) => {
          plat.avatar = this.urlServ.apiUrl(plat.avatar, false);
        });
         console.log(this.restaurant);
         console.log(this.plats);
       }
    })
  }

  getConnectedUser(){
    this.connectedUser = this.storageService.getStorage("profil");
    console.log(this.connectedUser);
    this.clientType = this.connectedUser.type === "client";
  }

  public setForm(): void{
    this.platesForm = this.builder.group({
      designation : [this.plat.designation,Validators.required],
      sellprice : [this.plat.sellprice,Validators.required],
      buyprice : [this.plat.buyprice,Validators.required],
      description : [this.plat.description,Validators.required],
      avatar:[this.plat.avatar,Validators.required]
    });
  }

  public initForm(): void{
    this.plat =  new Plat("Burger",100,200,"Burger Burger",""),
    this.action = true;
    this.setForm();
  }

  addPlate(): void{
    let plat: Plat = this.platesForm.value;
    this.formData.set("id",this.restaurant.id);
    this.formData.set("plat",JSON.stringify(plat));
    console.log(this.formData.get("restaurant"));
    this.restaurantServ.insertPlat(this.formData).subscribe((res: ResponseData) =>console.log(res));
  }

  public selectFile(event: any){
    let file = event.target.files;
    this.formData.set("avatar", file[0]);
  }

  choosePlatDelete(plat: Plat){
    console.log(plat);
    this.plat = plat;
  }

  confirmDelete(){
    const resto = {
      "id": this.restaurant.id,
      "plat": this.plat._id
    }
    console.log(resto);
    this.restaurantServ.deletePlat(resto).subscribe( (response: ResponseData) => {
      console.log(response);
    })
  }

  setModalStatus(plat: Plat){
    this.action = false;
    this.plat = plat
    this.setForm();
  }




}
