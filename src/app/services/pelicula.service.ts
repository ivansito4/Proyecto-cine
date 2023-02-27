import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Pelicula } from '../clases/pelicula';
import { LISTAPELICULAS } from '../pelicula-prueba';
import { lastValueFrom, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class PeliculaService {
  private apiRestUrl = 'http://localhost:80/proyecto-cine-servidor/public/api/pelicula'
  private httpOptions = {
      headers: new HttpHeaders({'Content-Type':'application/json'})
  }
  constructor(private http: HttpClient) { }
  async getPeliculas():Promise<Pelicula[]>{
    try{
      const data= await lastValueFrom(this.http.get<Pelicula[]>(this.apiRestUrl));
      return data;
    }catch{
      return [];
    }
  }
/*
  async getPelicula():Promise<Pelicula>{
    const pelicula= LISTAPELICULAS.find(pelicula =>pelicula)
    return of(pelicula);
  }
  */
}
