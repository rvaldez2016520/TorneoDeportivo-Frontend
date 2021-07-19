import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { CreatepartidosComponent } from './components/createpartidos/createpartidos.component';
import { CreateteamComponent } from './components/createteam/createteam.component';
import { CreatetorneoComponent } from './components/createtorneo/createtorneo.component';
import { HomeAdminComponent } from './components/home-admin/home-admin.component';
import { HomeComponent } from './components/home/home.component';
import { ListequiposComponent } from './components/listequipos/listequipos.component';
import { ListorneoComponent } from './components/listorneo/listorneo.component';
import { ListpartidosComponent } from './components/listpartidos/listpartidos.component';
import { ListuserComponent } from './components/listuser/listuser.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { RegisterComponent } from './components/register/register.component';
import { SaveUserByAdminComponent } from './components/save-user-by-admin/save-user-by-admin.component';
import { TablePosicionesComponent } from './components/table-posiciones/table-posiciones.component';
import { AdminGuard } from './guards/admin.guard';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: '', redirectTo:'home', pathMatch: 'full'},
  {path: 'home' , component: HomeComponent},
  {path: 'navbar' , component:NavbarComponent},
  {path: 'register' , component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'createTorneo', component: CreatetorneoComponent},
  {path: 'createTeam', component: CreateteamComponent},
  {path: 'saveAdmin',canActivate:[AdminGuard], component:SaveUserByAdminComponent},
  {path: 'listuser', canActivate:[AdminGuard], component: ListuserComponent},
  {path: 'perfil', component:PerfilComponent},
  {path: 'home-admin',canActivate:[AdminGuard],component: HomeAdminComponent},
  {path: 'tabla', component:TablePosicionesComponent},
  {path: 'listTorneo', canActivate:[AdminGuard], component:ListorneoComponent },
  {path: 'graphics', component:BarChartComponent},
  {path: 'listTeam', canActivate:[AdminGuard],component:ListequiposComponent},
  {path: 'listPart', component:ListpartidosComponent},
  {path: 'createPartidos',component:CreatepartidosComponent},
  {path: '**', component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
