export class Profil {
  id: string;
  type: string;
  firstname ?: string;
  lastname ?: string;
  email: string;
  password: string;
  phonenumber?: string;
  avatar ?: string;
  token ?: string;
  plat ?: Array<any>;

  constructor(
    id: string,
    type: string,
    email: string,
    password: string,
    firstname ?: string,
    lastname ?: string,
    phonenumber ?: string,
    avatar ?:string
  ){
    this.id = id;
    this.type = type;
    this.email = email;
    this.password = password;
    this.firstname = firstname;
    this.lastname = lastname;
    this.phonenumber = phonenumber;
    this.avatar = avatar;
  }

  checkProfil(profil: string): boolean{
    return this.type == profil;
  }
}
