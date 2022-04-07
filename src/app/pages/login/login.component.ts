import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ResponseData } from 'src/app/models/response-data';
import { StorageService } from 'src/app/services/storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLogin: boolean = true;
  load: boolean = true;
  inscriptionForm : FormGroup;
  loginForm : FormGroup;

  constructor(
    private userServ: UserService,
    private formBuilder : FormBuilder,
    private router: Router,
    private stroageServ: StorageService
    ) {
    this.inscriptionForm = formBuilder.group({
      firstName:["Rasoaharisoa", Validators.required],
      lastName:["Zotoavina",Validators.required],
      email:["zotoavinanantenaina@gmail.com",Validators.required],
      address:["K04 052 BIS Ivato Aéroport", Validators.required],
      phoneNumber:["0328818232", Validators.required],
      password:["123456", Validators.required]
    });

    this.loginForm = formBuilder.group({
      email : ["zotoavinanantenaina@gmail.com", Validators.required],
      password: ["123456", Validators.required]
    });

   }

  ngOnInit(): void {
    console.log("initialisation");
    // this.login();
  }

  stopLoading(){
    this.load = false;
  }

  getAllUser(){
    this.userServ.getAllUser().subscribe( response => {
      console.log(response);
    })
  }

  inscription(){
    const user = {
      firstname : this.inscriptionForm.get("firstName")?.value,
      lastname: this.inscriptionForm.get("lastName")?.value,
      email: this.inscriptionForm.get("email")?.value,
      phonenumber: this.inscriptionForm.get("phoneNumber")?.value,
      password: this.inscriptionForm.get("password")?.value
    };
    console.log(user);
    this.userServ.insert(user).subscribe( response => {
      console.log(response);
    });
  }

  login(){
    const credentials = {
      email: this.loginForm.get("email")?.value,
      password: this.loginForm.get("password")?.value
    };
    console.log(credentials);
    this.userServ.login(credentials).subscribe( (response: ResponseData) => {
      if(response.code == 202){
        console.log(response);
        this.stroageServ.setStorage("profil", response.data);
        console.log("Redirection");
        this.router.navigateByUrl('/ekaly/app/restaurants');
      }
    })
  }



  changeState(): void{
    this.isLogin = !this.isLogin;
  }

}
