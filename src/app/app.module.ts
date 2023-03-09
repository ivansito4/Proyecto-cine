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
import { PeliculaDetalleComponent } from './pelicula-detalle/pelicula-detalle.component';

import { GestionCineService } from './services/gestionCine.service';
import { FooterComponent } from './footer/footer.component';
import { CaminoMigasComponent } from './camino-migas/camino-migas.component';
import { SesionesComponent } from './sesiones/sesiones.component';
import { ComplementosComponent } from './complementos/complementos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { FilterPipe } from './pipes/filter.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { ButacasComponent } from './butacas/butacas.component';
import { EntradaComponent } from './entrada/entrada.component';

import { PaypalComponent } from './paypal/paypal.component';
import { NgxPayPalModule } from 'ngx-paypal';
import { MapaWebComponent } from './mapa-web/mapa-web.component';
import { AccesibilidadComponent } from './accesibilidad/accesibilidad.component';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    PeliculaDetalleComponent,
    FooterComponent,
    CaminoMigasComponent,
    SesionesComponent,
    ComplementosComponent,
    ContactoComponent,
    RegistroComponent,
    LoginComponent,
    FilterPipe,
    OrderByPipe,
    ButacasComponent,
    EntradaComponent,
    PaypalComponent,
    MapaWebComponent,
    AccesibilidadComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MenuComponent,
    CarouselComponent,
    AppRoutingModule,
    NgbModule,
    NgbDropdownModule,
    NgxPayPalModule,
   
  ],
  providers: [GestionCineService],
  bootstrap: [AppComponent]
})
export class AppModule { }
