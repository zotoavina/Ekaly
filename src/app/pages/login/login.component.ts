import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Profil } from 'src/app/models/profil';
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
  connectedUser ?: Profil;
  errorLogin : string = "";
  errorRegister : string = "";

  constructor(
    private userServ: UserService,
    private formBuilder : FormBuilder,
    private router: Router,
    private stroageServ: StorageService,
    private toastServ: ToastrService
    ) {
    this.inscriptionForm = formBuilder.group({
      firstName:["Rasoaharisoa", Validators.required],
      lastName:["Zotoavina",Validators.required],
      email:["zotoavinanantenaina@gmail.com",Validators.required],
      address:["K04 052 BIS Ivato Aéroport", Validators.required],
      phoneNumber:["0328818232", Validators.required],
      password:["123456", [Validators.required, Validators.minLength(6)]]
    });

    this.loginForm = formBuilder.group({
      email : ["zotoavinanantenaina@gmail.com", Validators.required],
      password: ["123456", Validators.required]
    });

   }

  ngOnInit(): void {
  }

  get firstName() { return this.inscriptionForm.get('firstName'); }
  get email() { return this.inscriptionForm.get('email'); }
  get password() { return this.inscriptionForm.get('password'); }

  stopLoading(){
    this.load = false;
  }

  getAllUser(){
    this.userServ.getAllUser().subscribe( response => {})
  }

  inscription(){
    this.errorRegister = "";
    if(!this.inscriptionForm.valid) return;
    const user = {
      firstname : this.inscriptionForm.get("firstName")?.value,
      lastname: this.inscriptionForm.get("lastName")?.value,
      email: this.inscriptionForm.get("email")?.value,
      phonenumber: this.inscriptionForm.get("phoneNumber")?.value,
      password: this.inscriptionForm.get("password")?.value,
      type: "client"
    };
    this.userServ.insert(user).subscribe( (response: ResponseData) => {
      if(response.code == 202){
        this.addProfilToStorage(response.data);
         this.redirection();
      }else{
        this.errorRegister = response.message;
      }
    });
  }

  login(){
    this.errorLogin = "";
    const credentials = {
      email: this.loginForm.get("email")?.value,
      password: this.loginForm.get("password")?.value
    };
    this.userServ.login(credentials).subscribe( (response: ResponseData) => {
      if(response.code == 202){
        this.addProfilToStorage(response.data);
        this.redirection();
      }else{
        this.errorLogin = response.message;
      }
    })
  }

  changeState(): void{
    this.isLogin = !this.isLogin;
  }

  addProfilToStorage(profil: Profil){
    profil.password ="password";
    this.stroageServ.setStorage("profil", profil);
    this.connectedUser = profil;
  }

  redirection(){
    const url = 'app/restaurants';
    if(this.connectedUser?.type === "client") this.router.navigateByUrl(url);
    if(this.connectedUser?.type === "restaurant") this.router.navigate([url + '/', this.connectedUser.id]);
    if(this.connectedUser?.type === "ekaly") this.router.navigateByUrl(url);
  }

}
