import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Profil } from 'src/app/models/profil';
import { ResponseData } from 'src/app/models/response-data';
import { DelivererService } from 'src/app/services/deliverer.service';
import { UrlService } from 'src/app/services/url.service';

@Component({
  selector: 'app-deleverer-list',
  templateUrl: './deleverer-list.component.html',
  styleUrls: ['./deleverer-list.component.css']
})
export class DelevererListComponent implements OnInit {
  currentDeliverer ?: Profil;
  deliverers: Array<Profil> = [];
  delivererForm: FormGroup;
  fileName : String = "choose an image";
  delivererData : FormData  = new FormData();

  constructor(
    private delivererServ : DelivererService,
    private builder : FormBuilder,
    private urlService : UrlService
  ) {
    this.delivererForm = this.builder.group({
      "firstname":[],
      "lastname": [],
      "phonenumber":[],
      "email":[],
      "password":[],
      "avatar":[]
    })
  }

  ngOnInit(): void {
    this.getAllDeliverers();
  }

  getAllDeliverers(){
    this.delivererServ.getAllDeliverers().subscribe( response => {
      if(response.code == 202){
        this.deliverers = response.data;
        this.deliverers.forEach( (deliverer:any) => {
          deliverer.avatar = this.urlService.apiUrl( deliverer.avatar, false );
        })
      }
    })
  }

  changeCurrentDeliverer(deliverer : Profil){}

  chooseDelivererToDelete(deliverer: Profil){}

  selectFile(event: any){
    const files = event.target.files;
    if(files && files.length > 0){
      this.delivererData.set("avatar", files[0]);p
      this.fileName = files[0].name;
    }
  }

  addDeliverer(){
    var deliverer = this.delivererForm.value;
    this.delivererData.set("deliverer", JSON.stringify( deliverer) );

    this.delivererServ.addDeliverer(this.delivererData).subscribe( (response : ResponseData) =>{
      if(response.code == 202){
        this.delivererData.delete("avatar");
        this.delivererData.delete("deliverer");
      }
    })
  }

  confirmDelete(){}

  initiateForm(){}



}
