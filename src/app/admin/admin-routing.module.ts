import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboradComponent } from './dashborad/dashborad.component';
import { ErreurComponent } from '../erreur/erreur.component';
import { LoginComponent } from '../login/login.component';
import { MenuadminComponent } from './menuadmin/menuadmin.component';

const routes: Routes = [
  { path:'admin',
  children:[
    {path:'', redirectTo:'login', pathMatch:'full'},
    { path: 'login', component: LoginComponent },
    {path:'dashbord', component:DashboradComponent,
    children:[
      {path:'', redirectTo:'menuadmin', pathMatch:'full'},
      {path:'menuadmin', component:MenuadminComponent}
    ]}
  ]}
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
