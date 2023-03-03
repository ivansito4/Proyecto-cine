import { Component } from '@angular/core';
import { Pelicula } from '../clases/pelicula';

import { ActivatedRoute } from '@angular/router';
import { GestionCineService } from '../services/gestionCine.service';
import { Sesion } from '../clases/sesion';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css']
})
export class EntradaComponent {
  constructor(private route: ActivatedRoute,private cineServicio:GestionCineService) {}

  pelicula:Pelicula={
    id:0,
    nombre:"",
    poster:"",
    tipo:"",
    duracion:"",
    fecha_estreno: new Date()
  };
  sesion:Sesion={
    id:"",
    pelicula_id:0,
    sala:0,
    hora_peli:"",
    fecha_peli:new Date
  };
  butaca:number=0;


    ngOnInit(){
      this.obtenerPelicula();
      this.obtenerSesion();
      this.getbutaca();
    }

    async obtenerPelicula(){
      const id = Number(this.route.snapshot.paramMap.get('idPelicula'));
      this.pelicula= await this.cineServicio.getPelicula(id);
    }

    async obtenerSesion(){
      const id = Number(this.route.snapshot.paramMap.get('idSesion'));
      this.sesion= await this.cineServicio.getSesion(id);
    }
    getbutaca(){
      this.butaca = Number(this.route.snapshot.paramMap.get('idButaca'));
    }

    

    
  
}
