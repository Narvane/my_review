import { Router } from '@angular/router';
import { UserService } from './../establishments/establishment/reviews/user/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-component',
  templateUrl: './navbar-component.component.html',
  styleUrls: ['./navbar-component.component.css']
})
export class NavbarComponentComponent implements OnInit {
  user;
  email;
  password;
  logged;

  router: Router;

  constructor(private userService: UserService, router: Router) { }

  ngOnInit() {
  }

  login(){
    if(this.userService.authenticate(this.email, this.password) != null){
      this.userService.authenticate(this.email, this.password).subscribe(response => this.user = <any> response)
      this.logged = true;
      this.router.navigate(['/establishments']);
    }
    alert("Erro")
  }


}
