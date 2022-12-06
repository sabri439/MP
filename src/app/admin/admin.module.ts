import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { MenuadminComponent } from './menuadmin/menuadmin.component';
import { DashboradComponent } from './dashborad/dashborad.component';


@NgModule({
  declarations: [
    MenuadminComponent,
    DashboradComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
