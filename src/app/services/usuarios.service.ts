import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  constructor(private http: HttpClient) {}

  login(user:any): Observable<any> {
    return this.http.post("http://localhost/proyecto-cine/public/api/usuarios/new/", user);
  }
}
