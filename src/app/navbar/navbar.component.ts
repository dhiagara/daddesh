import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loggedUser ; 
  url ; 
  image ;

  constructor(public authApi:AuthService, public router:Router) { }


  ngOnInit() {
    this.loggedUser=this.authApi.getLoggedUser();
    this.url="http://localhost:8081/daddesh/user/userImage/"
    
   this.image=this.url+this.loggedUser;
  }
  signout(){
    this.authApi.doLogoutUser();
    
  }

}
