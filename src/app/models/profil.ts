export class Profil {
  id: string;
  type: number | 0;
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
    type: number,
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
}
