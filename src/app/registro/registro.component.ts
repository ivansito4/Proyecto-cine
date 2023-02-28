import { Component } from '@angular/core';
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

  formulario() {
    if (this.password != this.password2) {
      alert('Las contraseñas tienen que ser iguales');
    } else {
      const usuario = {
        nombre: this.nombre,
        apellidos: this.apellidos,
        email: this.email,
        login: this.login,
        password: this.password,
        telefono:this.telefono,
        dni:this.dni
      };
      this.usuarioServicio.login(usuario).subscribe((data) => {
        console.log(data);
      });
    }
  }
}
