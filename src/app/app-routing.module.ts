import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { PeliculaDetalleComponent } from './pelicula-detalle/pelicula-detalle.component';


const routes: Routes = [
  {path:'',component:CardComponent},
  {path:'detalles',component:PeliculaDetalleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
