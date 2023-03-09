import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {

  @Input()
  email!: string;
  @Input()
  comentario!: string;

  constructor() { }

  formulario() {
    let todoBien=true;
    if (!/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(this.email)){
      alert("La dirección de email es incorrecta.");
      todoBien=false;
    } 
    if ( this.comentario==undefined || !/^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü0-9\s]+$/.test(this.comentario)){
      alert("Comentario inválido.");
      todoBien=false;
    } 
    if(todoBien){
      const formulario = {
        email: this.email,
        comentario: this.comentario,
      };
      //hacer cosas con el contenido
      
      alert("Comentario enviado a los administradores");
    }

  }
}
