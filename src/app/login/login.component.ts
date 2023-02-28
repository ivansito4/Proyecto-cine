import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email:string="";
  password:string="";

  constructor(){}

  formulario(){
    const usuario = {
      email: this.email,
      password: this.password
    }
    alert(this.email+" "+this.password);
  }
}
