import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLogin: boolean = true;
  option ='{"delay":5000, "timer":false,"animation":"kenburns", "transition":"swirlLeft", "slides":[{"src": "./assets/img/4.jpg"}, {"src": "./assets/img/4.jpg"}, {"src": "./assets/img/4.jpg"}]}'

  constructor(private userServ: UserService) { }

  ngOnInit(): void {
    console.log("initialisation");
    // this.login();
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

  changeState(): void{
    this.isLogin = !this.isLogin;
  }



}
