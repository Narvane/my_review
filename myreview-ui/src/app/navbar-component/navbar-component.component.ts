import { User } from './../user';
import { Router } from '@angular/router';
import { UserService } from './../establishments/establishment/reviews/user/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-component',
  templateUrl: './navbar-component.component.html',
  styleUrls: ['./navbar-component.component.css']
})
export class NavbarComponentComponent implements OnInit {
  user: User;
  email;
  password;
  logged;

  router: Router;

  constructor(private userService: UserService, router: Router) { }

  ngOnInit() {
    //this.user.id = "1";
/*     this.user.firstName = "Gustavo";
    this.user.lastName = "Alves";
    this.user.email = "gustavoalvesandrade18@gmail.com ";
    this.user.password = "123";
 */
    this.logged = true;
  }

  login(){
      
  }


}
