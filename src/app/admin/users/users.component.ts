import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(public authService:AuthService) { }
listUsers ;
url="http://localhost:8081/daddesh/user/userImage/"
  ngOnInit() {
    this.authService.getallUsers().subscribe(r=>{
      this.listUsers=r ; 
      console.log(r);
    })
  }

}
