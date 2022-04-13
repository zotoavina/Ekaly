import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
  plat: Plat =  new Plat("","Burger",10000,20000,"Burger Burger","Burger", true); // initialisation formulaire
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
    private urlServ: UrlService,
    private toastServ: ToastrService
  ) { this.setForm();}

  ngOnInit(): void {
    this.getConnectedUser();
    this.getRestaurantParameter();
  }

  setRestaurant(restaurant: Profil){
    this.restaurant = restaurant;
    console.log(this.plats);
    this.plats?.forEach( (plat:any) => {
        plat.avatar = this.urlServ.apiUrl(plat.avatar, false);
    });
    this.plats = this.plats?.filter(plat => plat.status == true)
  }

  getRestaurantParameter(){
    this.profilService.getById( this.activatedRoute.snapshot.paramMap.get("id") ).subscribe( (response : ResponseData) => {
       if(response.code = 202){
          this.setRestaurant(response.data);
        }
      });
  }

  getConnectedUser(){
    this.connectedUser = this.storageService.getStorage("profil");
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
    this.plat = new Plat("","Burger",10000,2000,"Burger Double cheese","Burger", true);
    this.action = true;
    this.setForm();
  }

  addPlate(): void{
    let plat: Plat = this.platesForm.value;
    this.formData.set("id",this.restaurant.id);
    this.formData.set("plat",JSON.stringify(plat));
    this.restaurantServ.insertPlat(this.formData).subscribe(
      (response: ResponseData) =>{
        if(response.code == 202){
          this.setRestaurant(response.data);
          this.toastServ.success("Add plate with success", "SUCCESS");
        }
      }
    );
  }

  public selectFile(event: any){
    const files = event.target.files;
    if(files && files.length > 0){
      this.formData.set("avatar", files[0]);
      this.fileName = files[0].name;
    }
  }

  choosePlatDelete(plat: Plat){
    this.plat = plat;
  }

  confirmDelete(){
    const resto = {
      "id": this.restaurant.id,
      "plat": this.plat._id
    }
    this.restaurantServ.deletePlat(resto).subscribe( (response: ResponseData) => {
      if(response.code == 202){
        this.plats?.splice( this.plats?.findIndex((pl) => pl.id = this.plat.id) );
        this.toastServ.success("Delete plate with success", "SUCCESS");
      }else{

      }
    })
  }

  setModalStatus(plat: Plat){
    this.action = false;
    this.plat = plat
    this.setForm();
  }




}
