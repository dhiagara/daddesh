import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BoutiqueComponent } from './boutique/boutique.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { AddProduitComponent } from './add-produit/add-produit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavSideComponent } from './admin/nav-side/nav-side.component';
import { UsersComponent } from './admin/users/users.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { ProfileComponent } from './profile/profile.component';
import { PanierComponent } from './panier/panier.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BoutiqueComponent,
    SidebarComponent,
    FooterComponent,
    AddProduitComponent,
<<<<<<< HEAD
=======
    SignInComponent,
    SignUpComponent,
    NavSideComponent,
    UsersComponent,
    HomeComponent,
    ProfileComponent,
    PanierComponent,
>>>>>>> b70b45c... admin+ modal produit
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),// ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
