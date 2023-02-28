import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './carousel/carousel.component';
import { CardComponent } from './card/card.component';
import { AmcPeliculaComponent } from './amc-pelicula/amc-pelicula.component';
import { PeliculaDetalleComponent } from './pelicula-detalle/pelicula-detalle.component';

import { GestionCineService } from './services/gestionCine.service';
import { FooterComponent } from './footer/footer.component';
import { CaminoMigasComponent } from './camino-migas/camino-migas.component';
import { SesionesComponent } from './sesiones/sesiones.component';
import { ComplementosComponent } from './complementos/complementos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    AmcPeliculaComponent,
    PeliculaDetalleComponent,
    FooterComponent,
    CaminoMigasComponent,
    SesionesComponent,
    ComplementosComponent,
    ContactoComponent,
    RegistroComponent,
    LoginComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MenuComponent,
    CarouselComponent,
    AppRoutingModule,
    NgbModule,
    NgbDropdownModule
  ],
  providers: [GestionCineService],
  bootstrap: [AppComponent]
})
export class AppModule { }
