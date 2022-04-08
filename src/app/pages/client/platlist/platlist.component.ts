import { Component, OnInit } from '@angular/core';
import { Plat } from 'src/app/models/plat';

@Component({
  selector: 'app-platlist',
  templateUrl: './platlist.component.html',
  styleUrls: ['./platlist.component.css']
})
export class PlatlistComponent implements OnInit {
  plats ?: Array<Plat>;

  constructor() { }

  ngOnInit(): void {
  }

}
