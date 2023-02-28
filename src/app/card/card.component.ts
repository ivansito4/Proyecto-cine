import { Component,OnInit, Pipe,PipeTransform} from '@angular/core';
import { Pelicula } from '../clases/pelicula';
import { LISTAPELICULAS } from '../pelicula-prueba';
import { GestionCineService } from '../services/gestionCine.service';


  

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  peliculas:Pelicula[]=[];

  constructor(private peliculaServicio:GestionCineService){ }

  ngOnInit(){
    this.obtenerPeliculas();
  }

  async obtenerPeliculas(){
    this.peliculas=await this.peliculaServicio.getPeliculas();
  }

  filterPelicula="";
  order = "";
}


