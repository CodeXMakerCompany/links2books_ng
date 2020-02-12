import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//AnimacionRutas
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Rutas
import { routing, appRoutingProviders } from "./app.routing";

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardAlumnoComponent } from './components/dashboard-alumno/dashboard-alumno.component';
import { DashboardCoordinadorComponent } from './components/dashboard-coordinador/dashboard-coordinador.component';
import { DashboardAdminComponent } from './components/dashboard-admin/dashboard-admin.component';
import { DashboardAsistenteComponent } from './components/dashboard-asistente/dashboard-asistente.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { ErrorComponent } from './components/error/error.component';
import { NavbarComponent } from './components/global/navbar/navbar.component';
import { FooterComponent } from './components/global/footer/footer.component';
import { PagoComponent } from './components/tienda/pago/pago.component';
import { EntregaComponent } from './components/tienda/entrega/entrega.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardAlumnoComponent,
    DashboardCoordinadorComponent,
    DashboardAdminComponent,
    DashboardAsistenteComponent,
    CarritoComponent,
    TiendaComponent,
    ErrorComponent,
    NavbarComponent,
    FooterComponent,
    PagoComponent,
    EntregaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    routing
  ],
  providers: [
      appRoutingProviders,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
