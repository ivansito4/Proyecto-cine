import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Sesion } from '../clases/sesion';
import { Pelicula } from '../clases/pelicula';
import { GestionCineService } from '../services/gestionCine.service';
import { empty, isEmpty } from 'rxjs';

@Component({
  selector: 'app-sesiones',
  templateUrl: './sesiones.component.html',
  styleUrls: ['./sesiones.component.css']
})
export class SesionesComponent {
  sesiones:Sesion[]=[];
  pelicula:Pelicula={
    id:0,
    nombre:"",
    poster:"",
    tipo:"",
    duracion:"",
    fecha_estreno: new Date()
  };
  

  constructor(private route: ActivatedRoute,private cineServicio:GestionCineService){ }

  ngOnInit(){
    this.obtenerPelicula();
    this.obtenerSesiones();
  }

  async obtenerPelicula(){
    const id = Number(this.route.snapshot.paramMap.get('idPelicula'));
    this.pelicula= await this.cineServicio.getPelicula(id);
  }

  async obtenerSesiones(){
    const id = Number(this.route.snapshot.paramMap.get('idPelicula'));
    this.sesiones=await this.cineServicio.getSesiones(id);
    this.sesiones.forEach(sesion => {
        console.log(JSON.stringify(sesion.sala));
    });
    if(this.sesiones.length==0){
      alert("No hay sesiones para esta película");
      history.back();
    }
  }
}
