import { Component } from '@angular/core';
import { Usuario } from '../clases/usuario';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent {
  nombre: string = '';
  apellidos: string = '';
  email: string = '';
  login: string = '';
  password: string = '';
  password2: string = '';
  telefono: Number = 0;
  dni: string = '';

  constructor(public usuarioServicio: UsuariosService) {}

  async formulario() {
  
    if (this.password != this.password2) {
      alert('Las contraseñas tienen que ser iguales');
    } else {
      const usuario:Usuario = {
        "id":"",
        "nombre": this.nombre,
        "apellidos": this.apellidos,
        "email": this.email,
        "login": this.login,
        "password": this.password,
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
