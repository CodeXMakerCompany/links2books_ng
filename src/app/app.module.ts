import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    TiendaComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [
      appRoutingProviders,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
