import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { PeliculaDetalleComponent } from './pelicula-detalle/pelicula-detalle.component';
import { SesionesComponent } from './sesiones/sesiones.component';
import { ComplementosComponent } from './complementos/complementos.component';
import { ContactoComponent } from './contacto/contacto.component';


const routes: Routes = [
  {path:'',redirectTo:'Inicio',pathMatch:'full'},
  {path:'Inicio',component:CardComponent,data:{titulo:'Inicio'}},  //para el camino de migas
  {path:'Complementos',component:ComplementosComponent,data:{titulo:'Complementos'}},
  {path:'Contacto',component:ContactoComponent,data:{titulo:'Contacto'}},
  {path:'Inicio/Detalles/:idPelicula',component:PeliculaDetalleComponent,data:{titulo:'Inicio/Detalles Pelicula'}},
  {path:'Sesiones/:idPelicula',component:SesionesComponent,data:{titulo:'Inicio/Detalles Pelicula/Sesiones'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
