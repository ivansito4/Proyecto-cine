import { Component,OnInit } from '@angular/core';
import { Pelicula } from '../clases/pelicula';
import { LISTAPELICULAS } from '../pelicula-prueba';
import { GestionCineService } from '../services/gestionCine.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pelicula-detalle',
  templateUrl: './pelicula-detalle.component.html',
  styleUrls: ['./pelicula-detalle.component.css']
})
export class PeliculaDetalleComponent implements OnInit{
  
  pelicula:Pelicula={
    id:0,
    nombre:"",
    poster:"",
    tipo:"",
    duracion:"",
    fecha_estreno: new Date()
  };

  constructor(private route: ActivatedRoute,private cineServicio:GestionCineService){}
  ngOnInit() {
    this.obtenerPelicula();
  }

  async obtenerPelicula(){
    const id = Number(this.route.snapshot.paramMap.get('idPelicula'));
    this.pelicula= await this.cineServicio.getPelicula(id);
  }

  
}
