import { Component } from '@angular/core';
import { Pelicula } from '../clases/pelicula';
import { LISTAPELICULAS } from '../pelicula-prueba';
import { PeliculaService } from '../services/pelicula.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  //peliculas:Pelicula[];
  peliculas=LISTAPELICULAS;

  constructor(private peliculaServicio:PeliculaService){
    //this.peliculas=[];
  }

  /*ngOninit(){
    this.getPeliculas();
  }

  async getPeliculas(){
    this.peliculas=await this.peliculaServicio.getPeliculas();
  }*/

  peliculaClickada(pelicula: Pelicula): void {
    location.href="/detalles";
  }

}
