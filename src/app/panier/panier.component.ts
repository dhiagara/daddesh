import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  constructor(public authApi:AuthService,public crudApi:ServiceService) { }
 listData ;
 loggedUser;
  ngOnInit() {
    console.log(this.listData);
    this.loggedUser=this.authApi.getLoggedUser();
    this.getfromlocal();
  }
  getfromlocal(){
    this.listData=JSON.parse(localStorage.getItem('produits'));
    console.log(this.listData);
   }
}
