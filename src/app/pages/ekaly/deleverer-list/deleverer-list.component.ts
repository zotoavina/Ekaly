import { Component, OnInit } from '@angular/core';
import { Profil } from 'src/app/models/profil';

@Component({
  selector: 'app-deleverer-list',
  templateUrl: './deleverer-list.component.html',
  styleUrls: ['./deleverer-list.component.css']
})
export class DelevererListComponent implements OnInit {
  currentDeliverer ?: Profil;
  deliverers: Array<Profil> = [];

  constructor() { }

  ngOnInit(): void {
  }

  getAllDeliverers(){

  }

}
