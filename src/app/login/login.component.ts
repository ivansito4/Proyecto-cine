import { Component } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string = "";
  password: string = "";

  constructor(public usuarioServicio: UsuariosService) { }

  async formulario() {
    const usuario = {
      email: this.email,
      password: this.password,
    };
    const resultado = await this.usuarioServicio.register(usuario);
    alert("Usuario logeado correctamente");
  }
}
