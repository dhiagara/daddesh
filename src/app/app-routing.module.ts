import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProduitComponent } from './add-produit/add-produit.component';
import { NavSideComponent } from './admin/nav-side/nav-side.component';
import { BoutiqueComponent } from './boutique/boutique.component';
<<<<<<< HEAD

const routes: Routes = [
  { path: '', component: BoutiqueComponent },
  { path: 'addproduit', component: AddProduitComponent }
=======
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { PanierComponent } from './panier/panier.component';
import { ProfileComponent } from './profile/profile.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'boutique'
  },
  {path:'boutique',component:HomeComponent,
      children: [
        { path: '', component: BoutiqueComponent },
        // { path: 'panier', component:  BoutiqueComponent },
        { path: 'addproduit', component: AddProduitComponent },
        { path: 'login', component: SignInComponent , canActivate:[AuthGuard] },
        { path: 'register', component: SignUpComponent ,canActivate:[AuthGuard]},
        { path: 'profile', component: ProfileComponent },
        { path: 'panier', component: PanierComponent }
      ]

},
{ path: 'admin', component: NavSideComponent },
{ path: 'login', component: SignInComponent },


 


>>>>>>> b70b45c... admin+ modal produit
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
