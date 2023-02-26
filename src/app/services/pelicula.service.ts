import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Pelicula } from '../clases/pelicula';
import { LISTAPELICULAS } from '../pelicula-prueba';
import { lastValueFrom } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class PeliculaService {
  private apiRestUrl = 'http://localhost/proyecto-cine-servidor/public/api/pelicula/'
  private httpOptions = {
      headers: new HttpHeaders({'Content-Type':'aplicacion/json'})
  }
  constructor(private http: HttpClient) { }
  async getPeliculas():Promise<Pelicula[]>{
    let data:Pelicula;
    try{
      const data= await lastValueFrom(this.http.get<Pelicula[]>(this.apiRestUrl));
      return data;
    }catch{
      return [];
    }
  }
}
