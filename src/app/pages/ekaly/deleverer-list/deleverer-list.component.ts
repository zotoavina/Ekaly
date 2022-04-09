import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Profil } from 'src/app/models/profil';
import { DelivererService } from 'src/app/services/deliverer.service';

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

  constructor(
    private delivererServ : DelivererService,
    private builder : FormBuilder
  ) {
    this.delivererForm = this.builder.group({

    })
  }

  ngOnInit(): void {
    this.getAllDeliverers();
  }

  getAllDeliverers(){
    this.delivererServ.getAllDeliverers().subscribe( response => {
      console.log(response);
    })
  }

  changeCurrentDeliverer(deliverer : Profil){}

  chooseDelivererToDelete(deliverer: Profil){}

  selectFile($event: any){

  }

  addDeliverer(){}

  confirmDelete(){}

  initiateForm(){}

}
