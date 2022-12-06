import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil/acceuil.component';
import { DashboradclientComponent } from './acceuil/dashboradclient/dashboradclient.component';
import { FammeproduitsComponent } from './acceuil/fammeproduits/fammeproduits.component';
import { HommeproduitsComponent } from './acceuil/hommeproduits/hommeproduits.component';
import { ProduitsComponent } from './acceuil/produits/produits.component';
import { SelectfammeproduitsComponent } from './acceuil/selectfammeproduits/selectfammeproduits.component';
import { SelecthommeproduitsComponent } from './acceuil/selecthommeproduits/selecthommeproduits.component';

const routes: Routes = [
  {path:'client',component:DashboradclientComponent,
  children:[
  {path:'acceuil',title:'acceuil', component:AcceuilComponent},
  {path:'produits', title:'produit', component:ProduitsComponent},
  {path:'hommeproduits', title:'Homme', component:HommeproduitsComponent},
  {path:'hommeproduits/:idh', title:'Homme', component:SelecthommeproduitsComponent},
  {path:'fammeproduits', title:'Famme', component:FammeproduitsComponent},
  {path:'fammeproduits/:idf', title:'Famme', component:SelectfammeproduitsComponent},
  {path:'', redirectTo:'acceuil', pathMatch:'full'}]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
