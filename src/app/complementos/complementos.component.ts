import { Component } from '@angular/core';
import { Comida } from '../clases/comida'; 
import { GestionCineService } from '../services/gestionCine.service';

@Component({
  selector: 'app-complementos',
  templateUrl: './complementos.component.html',
  styleUrls: ['./complementos.component.css']
})
export class ComplementosComponent {
  comidas:Comida[]=[];
  constructor(private comidaServicio:GestionCineService){ }

  ngOnInit(){
    this.obtenerPeliculas();
  }

  async obtenerPeliculas(){
    this.comidas=await this.comidaServicio.getComidas();
  }

  
}
