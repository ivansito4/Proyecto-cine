import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { PeliculaDetalleComponent } from './pelicula-detalle/pelicula-detalle.component';
import { SesionesComponent } from './sesiones/sesiones.component';
import { ComplementosComponent } from './complementos/complementos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { ButacasComponent } from './butacas/butacas.component';
import { EntradaComponent } from './entrada/entrada.component';

const routes: Routes = [
  {path:'',redirectTo:'Inicio',pathMatch:'full'},
  {path:'Inicio',component:CardComponent,data:{titulo:'Inicio'}},  //para el camino de migas
  {path:'Complementos',component:ComplementosComponent,data:{titulo:'Complementos'}},
  {path:'Contacto',component:ContactoComponent,data:{titulo:'Contacto'}},
  {path:'Login',component:LoginComponent,data:{titulo:'Login'}},
  {path:'Sesiones/:idPelicula/Butacas/:idSesion',component:ButacasComponent,data:{titulo:'Inicio/Detalles Pelicula/Sesiones/Selecionar butaca'}},
  {path:'Sesiones/:idPelicula/Butacas/:idSesion/Entrada/:idButaca',component:EntradaComponent,data:{titulo:'Inicio/Detalles Pelicula/Sesiones/Butacas/Entrada'}},
  {path:'Registro',component:RegistroComponent,data:{titulo:'Registro'}},
  {path:'Inicio/Detalles/:idPelicula',component:PeliculaDetalleComponent,data:{titulo:'Inicio/Detalles Pelicula'}},
  {path:'Sesiones/:idPelicula',component:SesionesComponent,data:{titulo:'Inicio/Detalles Pelicula/Sesiones'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
