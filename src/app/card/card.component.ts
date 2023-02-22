import { Component } from '@angular/core';
import { Pelicula } from '../pelicula';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  pelicula:Pelicula={
    id:1,
    nombre:'Gato con botas',
    poster:'https://www.lahiguera.net/cinemania/pelicula/10179/el_gato_con_botas_el_ultimo_deseo-cartel-10596.jpg',
    tipo:'Accion',
    duracion:'90m',
    //fecha_estreno:??
  }
}
