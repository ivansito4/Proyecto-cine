import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import {map,filter } from 'rxjs/operators';

@Component({
  selector: 'app-camino-migas',
  templateUrl: './camino-migas.component.html',
  styleUrls: ['./camino-migas.component.css']
})
export class CaminoMigasComponent implements OnDestroy{
  public titulo?:string;
  public tituloSubs$?:Subscription;

  constructor(private router:Router){
    this.tituloSubs$ = this.getArgumentos().subscribe(({titulo})=>{
      this.titulo = titulo;
      document.title=` Cinetix - ${titulo}`;
    })
  }
  ngOnDestroy(): void {
    this.tituloSubs$?.unsubscribe();
  }


  getArgumentos(){

    return this.router.events.pipe(
      filter((event:any)=>event instanceof ActivationEnd),
      filter((event:ActivationEnd)=>event.snapshot.firstChild ==null),
      map((event:ActivationEnd)=>event.snapshot.data)

    );
  }
}
