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

//Error-pagina
import { ErrorComponent } from "./components/error/error.component";



//Definir rutas
//Notas: atributo data instancia la animacion de la ruta
const appRoutes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'inicio', component: LoginComponent, data: { animation: 'isRight' } },
  {path: 'login', component: LoginComponent, data: { animation: 'isLeft' } },
  {path: 'registro', component: RegisterComponent, data: { animation: 'isRight' } },
  {path: 'dashboard_alumno', component: DashboardAlumnoComponent, data: { animation: 'isRight' }},
  {path: 'dashboard_coordinador', component: DashboardCoordinadorComponent, data: { animation: 'isRight' }},
  {path: 'dashboard_asistente', component: DashboardAsistenteComponent, data: { animation: 'isRight' }},
  {path: 'dashboard_admin', component: DashboardAdminComponent, data: { animation: 'isRight' }},
  {path: 'tienda', component: TiendaComponent, data: { animation: 'isRight' }},
  {path: '**', component: ErrorComponent, data: { animation: 'isRight' }}
];

//Exportar configuracion
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
