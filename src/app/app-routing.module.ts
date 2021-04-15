import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProduitComponent } from './add-produit/add-produit.component';
import { BoutiqueComponent } from './boutique/boutique.component';

const routes: Routes = [
  { path: '', component: BoutiqueComponent },
  { path: 'addproduit', component: AddProduitComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
