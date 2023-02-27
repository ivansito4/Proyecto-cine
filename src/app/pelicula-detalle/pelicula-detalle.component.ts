import { Component,OnInit } from '@angular/core';
import { Pelicula } from '../clases/pelicula';
import { LISTAPELICULAS } from '../pelicula-prueba';
import { ActivatedRoute, UrlTree } from '@angular/router';

@Component({
  selector: 'app-pelicula-detalle',
  templateUrl: './pelicula-detalle.component.html',
  styleUrls: ['./pelicula-detalle.component.css']
})
export class PeliculaDetalleComponent /*implements OnInit*/{
  pelicula:Pelicula=LISTAPELICULAS[0];
  /*constructor(private route:ActivatedRoute,){}
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.pelicula = LISTAPELICULAS[+params.get('peliculaId')];
    });
  }*/
  //pelicula clickada?
  buscarSalas(id:Number):void {
    location.href="Sesiones/"+id;
  }
}
