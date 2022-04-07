import { ElementSchemaRegistry } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ResponseData } from 'src/app/models/response-data';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { UrlService } from 'src/app/services/url.service';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {
  spinActive : boolean = true;
  restaurants: any;
  currentResto: any;
  restoForm: FormGroup;

  constructor(private restaurantServ: RestaurantService,
     private urlServ: UrlService,
     private formBuilder: FormBuilder) {
       this.restoForm = formBuilder.group({})
     }

  ngOnInit(): void {
    this.getRestaurants();
  }

  getRestaurants(){
    this.restaurantServ.getRestaurant().subscribe( (response : ResponseData) => {
        if(response.code == 202){
          this.restaurants = response.data;
          console.log(this.restaurants);
          this.restaurants.forEach( (element:any) => {
            element.avatar = this.urlServ.apiUrl(element.avatar);
          });
          console.log(this.restaurants);
          // this.spinActive = false;
        }
    })
  }

  addRestaurant(){}

  initiateForm(){}

  changeCurrentResto(resto: any){

  }

  confirmDelete(resto: any){}




}
