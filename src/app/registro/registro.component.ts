import { Component, Input } from '@angular/core';
import { empty, isEmpty } from 'rxjs';
import { Usuario } from '../clases/usuario';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent {
  @Input() email!: string;
  @Input() contra!: string;
  @Input() nombre!: string;
  @Input() apellidos!: string;
  @Input() login!: string;
  @Input() telefono!: number;
  contra2: string = '';
  dni: string = '';

  constructor(public usuarioServicio: UsuariosService) {}

  ngOnInit(){
  }

  validar(){
    let todoBien=true;
    if (!/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(this.email)){
      alert("La dirección de email es incorrecta.");
      todoBien=false;
    } 
    if(this.nombre==undefined || !/^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/.test(this.nombre)){
      alert("La contraseña es incorrecta");
      todoBien=false;
    }
    if ( this.contra==undefined || !/^[a-zA-Z0-9\s]+$/.test(this.contra)){
      alert("El nombre es incorrecto.");
      todoBien=false;
    } 
    if ( this.apellidos==undefined || !/^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/.test(this.apellidos)){
      alert("Los apellidos son incorrectos.");
      todoBien=false;
    } 
    
    if ( this.login==undefined || !/^[a-zA-Z0-9\s]+$/.test(this.login)){
      alert("El login es incorrecto.");
      todoBien=false;
    } 
    if ( this.telefono==undefined || isNaN(this.telefono)){
      alert("El telefono es incorrecto.");
      todoBien=false;
    } 
    
    if(todoBien){
      this.formulario();
    }
  }

  async formulario() {
  
    if (this.contra != this.contra2) {
      alert('Las contraseñas tienen que ser iguales');
    } else {
      const usuario:Usuario = {
        "id":"",
        "nombre": this.nombre,
        "apellidos": this.apellidos,
        "email": this.email,
        "login": this.login,
        "password": this.contra,
        "telefono":this.telefono,
        "dni":this.dni,
        "roles":JSON.parse('["ROLE_USER"]'),
        "foto":""
      };
      const resultado=await this.usuarioServicio.register(usuario);
        alert("Usuario registrado correctamente");
    }
  }
}
