import { Component } from '@angular/core';
import { LISTACOMIDA } from '../pelicula-prueba';
import { Comida } from '../clases/comida';

@Component({
  selector: 'app-complementos',
  templateUrl: './complementos.component.html',
  styleUrls: ['./complementos.component.css']
})
export class ComplementosComponent {
  comidas:Comida[]=LISTACOMIDA;
  constructor(){ }

  
}
