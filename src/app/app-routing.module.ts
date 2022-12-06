import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './client/acceuil/acceuil/acceuil.component';
import { FammeproduitsComponent } from './client/acceuil/fammeproduits/fammeproduits.component';
import { HommeproduitsComponent } from './client/acceuil/hommeproduits/hommeproduits.component';

import { ProduitsComponent } from './client/acceuil/produits/produits.component';
import { SelectfammeproduitsComponent } from './client/acceuil/selectfammeproduits/selectfammeproduits.component';
import { SelecthommeproduitsComponent } from './client/acceuil/selecthommeproduits/selecthommeproduits.component';
import { DashboradComponent } from './admin/dashborad/dashborad.component';
import { ErreurComponent } from './erreur/erreur.component';

const routes: Routes = [
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
