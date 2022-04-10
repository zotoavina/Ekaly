import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.css']
})
export class DefaultLayoutComponent implements OnInit {

  constructor(
    private router : Router,
    private storageServ: StorageService
  ) { }

  ngOnInit(): void {
  }

  seeBasket(){
    console.log("See cart");
    this.router.navigateByUrl("ekaly/app/users/cart");
  }

  deconnect(){
    this.storageServ.clearStorage();
    this.router.navigateByUrl("ekaly/login");
  }

}

