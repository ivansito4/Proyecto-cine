import { Component, Input } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Input()
  email!: string;
  @Input()
  contra!: string;

  constructor(public usuarioServicio: UsuariosService) { 
    
  }

  validar(){
    let todoBien=true;
    if (!/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(this.email)){
      alert("La dirección de email es incorrecta.");
      todoBien=false;
    } 
    console.log(this.contra);
    if(this.contra==undefined || !/^[a-zA-Z0-9\s]+$/.test(this.contra)){
      alert("La contraseña es incorrecta");
      todoBien=false;
    }
    
    if(todoBien){
      this.formulario();
    }
  }

  async formulario() {
    const usuario = {
      email: this.email,
      password: this.contra,
    };
    alert("Usuario logeado correctamente");
  }
}
