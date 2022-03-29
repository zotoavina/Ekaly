import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userServ: UserService) { }

  ngOnInit(): void {
    this.getAllUser();
  }

  getAllUser(){
    this.userServ.getAllUser().subscribe( response => {
      console.log(response);
    })
  }



}
