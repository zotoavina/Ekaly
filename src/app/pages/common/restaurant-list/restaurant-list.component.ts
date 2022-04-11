import { ElementSchemaRegistry } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Profil } from 'src/app/models/profil';
import { ResponseData } from 'src/app/models/response-data';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { StorageService } from 'src/app/services/storage.service';
import { UrlService } from 'src/app/services/url.service';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.scss']
})
export class RestaurantListComponent implements OnInit {
  spinActive : boolean = true;
  restaurants: Array<any> = [];
  currentResto !: Profil;
  restoForm: FormGroup;
  userConnected !: Profil;
  clientType !: Boolean;
  restoData : FormData = new FormData();
  fileName : string = "Choose an image";

  constructor(
     private restaurantServ: RestaurantService,
     private urlServ: UrlService,
     private formBuilder: FormBuilder,
     private storageServ: StorageService,
     private router: Router
     ) {
       this.restoForm = formBuilder.group({
         firstname: ["", Validators.required],
         email:["", Validators.required],
         phonenumber:["", Validators.required],
         password:["", Validators.required],
         avatar: ["", Validators.required]
       })
     }

  ngOnInit(): void {
    this.getConnectedUser();
    this.getRestaurants();
  }

  getRestaurants(){
    this.restaurantServ.getRestaurant().subscribe( (response : ResponseData) => {
        if(response.code == 202){
          this.restaurants = response.data;
          console.log(this.restaurants);
          this.restaurants.forEach( (element:any) => {
            element.avatar = this.urlServ.apiUrl(element.avatar, false);
          });
          console.log(this.restaurants);
          this.spinActive = false;
        }
    })
  }

  getConnectedUser(){
    this.userConnected = this.storageServ.getStorage("profil");
    console.log(this.userConnected);
    this.clientType = this.userConnected.type === "client";
  }

  addRestaurant(){
    if(!this.restoForm.valid) return;
    var resto = this.restoForm.value;
    resto.type = "restaurant";
    resto.plats = [];
    this.restoData.set("restaurant", JSON.stringify(resto));
    this.restaurantServ.insertRestaurant(this.restoData).subscribe( (response: ResponseData) => {
      console.log(response);
      if(response.code == 202){
        response.data.avatar = this.urlServ.apiUrl(response.data.avatar, false);
        this.restaurants.push( response.data );
      }else{
        console.log(response);
      }
    })
  }

  initiateForm(){}

  changeCurrentResto(resto: any){

  }

  confirmDelete(){
    var resto = { id : this.currentResto.id };
    this.restaurantServ.deleteRestaurant(resto).subscribe( (response: ResponseData ) => {
        this.restaurants.splice(  this.findResto() );
    })
  }

  chooseRestoToDelete(resto: any){
    this.currentResto = resto;
  }

  selectFile(event: any){
    const files = event.target.files;
    if(files && files.length > 0){
      this.restoData.set("avatar", files[0]);
      console.log(files[0]);
      this.fileName = files[0].name;
    }
  }

  findResto(){
    for(var i = 0; i < this.restaurants.length; i++){
      if(this.currentResto.id == this.restaurants[i].id) return i;
    }
    return -1;
  }


  seePlates(resto: any){
    console.log("see plates");
    console.log(resto);
    console.log(this.clientType);
    if(this.clientType) {
      this.router.navigate(["app/plats/", {id: resto.id}]);
    }else{
      this.router.navigate(["app/restaurants/",  resto.id]);
    }
  }


}
