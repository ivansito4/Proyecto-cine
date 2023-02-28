import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Sesion } from '../clases/sesion';
import { GestionCineService } from '../services/gestionCine.service';

@Component({
  selector: 'app-sesiones',
  templateUrl: './sesiones.component.html',
  styleUrls: ['./sesiones.component.css']
})
export class SesionesComponent {
  sesiones:Sesion[]=[];

  constructor(private route: ActivatedRoute,private cineServicio:GestionCineService){ }

  ngOnInit(){
    this.obtenerSesiones();
  }

  async obtenerSesiones(){
    const id = Number(this.route.snapshot.paramMap.get('idPelicula'));
    this.sesiones=await this.cineServicio.getSesiones(id);
    console.log(this.sesiones[0].sala);
  }
}
