import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Pelicula } from '../clases/pelicula';
import { lastValueFrom, of ,Observable} from 'rxjs';
import { Comida } from '../clases/comida';
import { Sesion } from '../clases/sesion';


@Injectable({
  providedIn: 'root'
})

export class GestionCineService {
  private apiRestUrl = 'http://localhost:80/proyecto-cine/public/api';
  private httpOptions = {
      headers: new HttpHeaders({'Content-Type':'application/json'})
  }
  constructor(private http: HttpClient) {}
  
  async getPeliculas():Promise<Pelicula[]>{
    try{
      const data= await lastValueFrom(this.http.get<Pelicula[]>(this.apiRestUrl + "/pelicula"));
      return data;
    }catch{
      alert("No se encuentra dato");
      return [];
    }
  }

  
  async getPelicula(id:number):Promise<Pelicula>{
    const pelicula= await lastValueFrom(this.http.get<Pelicula>(this.apiRestUrl + "/pelicula/"+id));
    return pelicula;
  }

  async getSesiones(id:number):Promise<Sesion[]>{
    try{
      const data= await lastValueFrom(this.http.get<Sesion[]>(this.apiRestUrl + "/sesion/"+id));
      return data;
    }catch{
      alert("No hay sesiones para esta película");
      return [];
    }
  }
  
  async getComidas():Promise<Comida[]>{
    try{
      const data= await lastValueFrom(this.http.get<Comida[]>(this.apiRestUrl + "/comida"));
      return data;
    }catch{
      return [];
    }
  }
}
