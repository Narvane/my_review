import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { EstablishmentService } from '../establishment.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(private establishmentService: EstablishmentService) { }

  users: User[] = [];
  user: User;
  user2: User;
  firstName;
  lastName;
  email;
  password;

  ngOnInit() {
  }

 /*  createUser(){
    //let newUser:User = {
      //id: null,
      //firstName: "nome",
      //lastName: "sobrenome",
      //email: "email",
      //password: "password"
    //} 
    this.user2.firstName = this.firstName
    this.user2.lastName = this.lastName
    this.user2.email = this.email
    this.user2.password = this.password

    this.establishmentService.postUser(this.user2).subscribe(
      res => {
        this.user2.id = res.id;
      }
    )

  } */

}
