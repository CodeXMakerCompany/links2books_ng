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
import { PagoComponent } from "./components/tienda/pago/pago.component";
import { EntregaComponent } from "./components/tienda/entrega/entrega.component";

//Error-pagina
import { ErrorComponent } from "./components/error/error.component";



//Definir rutas
//Notas: atributo data instancia la animacion de la ruta
// /:parent is an atribute that receives a name and a chargues the route this is an optional value atribute
// but it will help us to get the parent so in the component we should detect the route
const appRoutes: Routes = [
  {path: ':parent', component: LoginComponent},
  {path: ':parent/registro', component: RegisterComponent, data: { animation: 'isRight' } },
  {path: 'registro', component: RegisterComponent, data: { animation: 'isRight' } },
  {path: ':parent/dashboard_alumno', component: DashboardAlumnoComponent, data: { animation: 'isRight' }},
  {path: 'dashboard_alumno', component: DashboardAlumnoComponent, data: { animation: 'isRight' }},
  {path: ':parent/dashboard_coordinador', component: DashboardCoordinadorComponent, data: { animation: 'isRight' }},
  {path: 'dashboard_coordinador', component: DashboardCoordinadorComponent, data: { animation: 'isRight' }},
  {path: ':parent/dashboard_asistente', component: DashboardAsistenteComponent, data: { animation: 'isRight' }},
  {path: 'dashboard_asistente', component: DashboardAsistenteComponent, data: { animation: 'isRight' }},
  {path: ':parent/dashboard_admin', component: DashboardAdminComponent, data: { animation: 'isRight' }},
  {path: 'dashboard_admin', component: DashboardAdminComponent, data: { animation: 'isRight' }},
  {path: 'tienda', component: TiendaComponent, data: { animation: 'isRight' }},
  {path: 'pago', component: PagoComponent, data: { animation: 'isRight' }},
  {path: 'entrega', component: EntregaComponent, data: { animation: 'isRight' }},
  {path: '**', component: ErrorComponent, data: { animation: 'isRight' }}
];

//Exportar configuracion
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
