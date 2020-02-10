//Imports base
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//Import de componentes
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";

//Dashboards
import { DashboardAlumnoComponent } from "./components/dashboard-alumno/dashboard-alumno.component";
import { DashboardCoordinadorComponent } from "./components/dashboard-coordinador/dashboard-coordinador.component";
import { DashboardAsistenteComponent } from "./components/dashboard-asistente/dashboard-asistente.component";
import { DashboardAdminComponent } from "./components/dashboard-admin/dashboard-admin.component";

//Tienda
import { TiendaComponent } from "./components/tienda/tienda.component";
import { CarritoComponent } from "./components/carrito/carrito.component";

//Definir rutas
const appRoutes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'inicio', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegisterComponent},
  {path: 'dashboard_alumno', component: DashboardAlumnoComponent},
  {path: 'dashboard_coordinador', component: DashboardCoordinadorComponent},
  {path: 'dashboard_asistente', component: DashboardAsistenteComponent},
  {path: 'dashboard_admin', component: DashboardAdminComponent},
  {path: 'tienda', component: TiendaComponent}
];

//Exportar configuracion
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
