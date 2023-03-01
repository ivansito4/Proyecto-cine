import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from "@angular/common/http";
import { lastValueFrom, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private apiRestUrl="http://localhost:80/proyecto-cine/public/api/usuarios";
  private httpOptions ={
      headers: new HttpHeaders({'Content-Type':'application/json'})
  }
  constructor(private http: HttpClient) {}

  async register(user:any): Promise<any> {
    try{
      const data= await lastValueFrom(this.http.post<any>(this.apiRestUrl+"/new",user,this.httpOptions));
      return data;
    }
    catch{
      return {"status":"error"};
    }
  }
  async login(user:any): Promise<any> {
    try{
      const data= await lastValueFrom(this.http.post<any>(this.apiRestUrl+"/login",user,this.httpOptions));
      return data;
    }
    catch{
      return {"status":"error"};
    }
  }
}
