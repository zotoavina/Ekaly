import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.css']
})
export class DefaultLayoutComponent implements OnInit {

  constructor(
    private router : Router,
  ) { }

  ngOnInit(): void {
  }

  seeBasket(){
    console.log("See cart");
    this.router.navigateByUrl("ekaly/app/users/cart");
  }

}

