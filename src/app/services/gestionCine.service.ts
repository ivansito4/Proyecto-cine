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
      const data= await lastValueFrom(this.http.get<Sesion[]>(this.apiRestUrl + "/sesion/pelicula/"+id));
      return data;
    }catch{
      alert("No hay sesiones para esta película");
      return [];
    }
  }

  async getSesion(id:number):Promise<Sesion>{
    const sesion= await lastValueFrom(this.http.get<Sesion>(this.apiRestUrl + "/sesion/"+id));
    return sesion;
  }
  
  async getComidas():Promise<Comida[]>{
    try{
      const data= await lastValueFrom(this.http.get<Comida[]>(this.apiRestUrl + "/comida"));
      return data;
    }catch{
      return [];
    }
  }


  async insertarEntrada(entrada:any,idUsu:Number,idSes:String|undefined,idBut:Number|undefined): Promise<any> {
    try{
      const data= await lastValueFrom(this.http.post<any>(this.apiRestUrl+"/entrada/new/"+idUsu+"/"+idSes+"/"+idBut,entrada,this.httpOptions));
      return data;
    }
    catch{
      return {"status":"error"};
    }
  }

   borrarEntrada(id:Number){
      lastValueFrom(this.http.get<Sesion>(this.apiRestUrl + "/entrada/delete/"+id));
  }

  async editarEntrada(precio:any,id:Number){
    try{
      console.log(precio);
      const data= await lastValueFrom(this.http.put<any>(this.apiRestUrl+"/entrada/edit/"+id,precio,this.httpOptions));
      return data;
    }
    catch{
      return {"status":"error"};
    }
  }
}
