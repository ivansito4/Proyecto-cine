import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { PeliculaDetalleComponent } from './pelicula-detalle/pelicula-detalle.component';


const routes: Routes = [
  {path:'',redirectTo:'principal',pathMatch:'full'},
  {path:'principal',component:CardComponent,data:{titulo:'Principal'}},  //para el camino de migas
  {path:'detalles',component:PeliculaDetalleComponent,data:{titulo:'Detalles'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
