import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Profil } from 'src/app/models/profil';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.css']
})
export class DefaultLayoutComponent implements OnInit {

  connectedUser ?: Profil;

  constructor(
    private router : Router,
    private storageServ: StorageService
  ) { }

  ngOnInit(): void {
    this.getConnectedUser();
  }

  getConnectedUser(){
    this.connectedUser = this.storageServ.getStorage("profil");
    console.log(this.connectedUser);

  }

  seeBasket(){
    console.log("See cart");
    this.router.navigateByUrl("app/users/cart");
  }

  logOut(){
    this.storageServ.clearStorage();
    this.router.navigateByUrl("login");
  }

}

