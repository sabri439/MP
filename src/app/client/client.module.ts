import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { AcceuilComponent } from './acceuil/acceuil/acceuil.component';
import { FammeproduitsComponent } from './acceuil/fammeproduits/fammeproduits.component';
import { FooterComponent } from './acceuil/footer/footer.component';
import { HommeproduitsComponent } from './acceuil/hommeproduits/hommeproduits.component';
import { MenuComponent } from './acceuil/menu/menu.component';
import { SelectfammeproduitsComponent } from './acceuil/selectfammeproduits/selectfammeproduits.component';
import { SelecthommeproduitsComponent } from './acceuil/selecthommeproduits/selecthommeproduits.component';
import { CommentComponent } from './acceuil/comment/comment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboradclientComponent } from './acceuil/dashboradclient/dashboradclient.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    MenuComponent,
    AcceuilComponent,
    FammeproduitsComponent,
    HommeproduitsComponent,
    SelectfammeproduitsComponent,
    SelecthommeproduitsComponent,
    CommentComponent,
    FooterComponent,
    DashboradclientComponent

  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ]
})
export class ClientModule { }
