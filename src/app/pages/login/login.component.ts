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
    console.log("initialisation");
    this.login();
  }

  getAllUser(){
    this.userServ.getAllUser().subscribe( response => {
      console.log(response);
    })
  }

  inscription(){
    const user = {
      firstname :"Rasoaharisoa",
      lastname:"Nantenaina",
      email:"zotoavinanantenaina@gmail.com",
      password:"123456"
    };
    this.userServ.insert(user).subscribe( response => {
      console.log(response);
    });
  }

  login(){
    const credentials = {
      email:"zotoavinanantenaina@gmail.com",
      password:"123456"
    };
    this.userServ.login(credentials).subscribe( response => {
      console.log(response);
    })
  }



}
