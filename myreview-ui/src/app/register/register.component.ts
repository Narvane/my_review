import { UserService } from '../establishments/establishment/reviews/user/user.service';
import { User } from '../user';
import { ToastService } from '../toast/toast.service';
import { Component, OnInit } from '@angular/core';
import { EstablishmentService } from '../establishments/establishment.service';
import { stringify } from 'querystring';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private toastService: ToastService, router: Router, private userService: UserService) { 
    this.router = router;
  }

  router: Router;

  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirm: string;

  firstNameValidation: string;
  lastNameValidation: string;
  emailValidation: string;
  passwordValidation: string;
  passwordConfirmValidation: string;

  firstNameInvalidFeedback: string = "Algo errado!";
  lastNameInvalidFeedback: string = "Algo errado!";
  emailInvalidFeedback: string = "Algo errado!";
  passwordInvalidFeedback: string = "Algo errado!";
  passwordConfirmInvalidFeedback: string = "Algo errado!";

  ngOnInit() {
  }

  firstNameValidate(){
    try{
      if(this.firstName.length<=20 && this.firstName.length>1 && this.hasNumber(this.firstName) == false){
        this.firstNameValidation = "is-valid"
      }else if(this.hasNumber(this.firstName) == true){
        this.firstNameValidation = "is-invalid"
        this.firstNameInvalidFeedback = "Não pode haver números no nome!";
      }
      else{
        this.firstNameValidation = "is-invalid"
        this.firstNameInvalidFeedback = "O nome deve ter no minimo 1 caracteres e no máximo 20";
      }
    }catch(e){
      this.firstNameValidation = "is-invalid"
      this.firstNameInvalidFeedback = "Nome obrigatório!";
    }
  }
  lastNameValidate(){
    try{
      if(this.lastName.length<=20 && this.lastName.length>1  && this.hasNumber(this.lastName) == false){
        this.lastNameValidation = "is-valid"
      }else if(this.hasNumber(this.lastName) == true){
        this.firstNameValidation = "is-invalid"
        this.firstNameInvalidFeedback = "Não pode haver números no sobrenome!";
      }else{
        this.lastNameValidation = "is-invalid"
        this.lastNameInvalidFeedback = "O sobrenome deve ter no minimo 1 caracteres e no máximo 20!";
      }
    }catch(e){
      this.lastNameValidation = "is-invalid"
      this.lastNameInvalidFeedback = "Sobrenome obrigatório!";
    }
  }
  emailValidate(){
    try{
      if(this.email.length<=40 && this.email.length>7 && this.email.includes("@") && this.email.includes(".com")){
        this.emailValidation = "is-valid"
      }else{
        this.emailValidation = "is-invalid"
        this.emailInvalidFeedback = "Email invalido!";
      }
    }catch(e){
      this.emailValidation = "is-invalid"
      this.emailInvalidFeedback = "Email obrigatório!";
    }
  }
  passwordValidate(){
    try{
      if(this.password.length<=20 && this.password.length>1){
        this.passwordValidation = "is-valid"
      }else{
        this.passwordValidation = "is-invalid"
        this.passwordInvalidFeedback = "A senha deve contem de 1 a 20 caracteres!";
      }
    }catch(e){
      this.passwordValidation = "is-invalid"
      this.passwordInvalidFeedback = "Senha obrigatório!";
    }
  }
  passwordConfirmValidate(){
    try{
      //alert(this.password+" "+this.passwordConfirm)
      if(this.password == this.passwordConfirm){
        
        this.passwordConfirmValidation = "is-valid"
      }else{
        this.passwordConfirmValidation = "is-invalid"
        this.passwordConfirmInvalidFeedback = "As senhas não conferem!";
      }
    }catch(e){
      this.passwordConfirmValidation = "is-invalid"
      this.passwordConfirmInvalidFeedback = "Confirme sua senha!";
    }
  }

  formValidate(){
    if(this.firstNameValidation=="is-valid"&&
    this.lastNameValidation=="is-valid"&&
    this.emailValidation=="is-valid"&&
    this.passwordValidation=="is-valid"&&
    this.passwordConfirmValidation=="is-valid"){
      this.postUser()
      this.router.navigate(['/establishments']);
      this.toastService.show('Você foi cadastrado com sucesso!', {
        classname: 'bg-success text-light',
        delay: 5000 ,
        autohide: true,
        headertext: 'Cadastrado com sucesso'
      });
    }else{
      this.toastService.show('Confira seus dados!', {
        classname: 'bg-danger text-light',
        delay: 5000 ,
        autohide: true,
        headertext: 'Erro!'
      });
    }
  }

  postUser(){
    let user = new User();
    user.firstName = this.firstName;
    user.lastName = this.lastName;
    user.email = this.email;
    user.password = this.password;
    alert(user.firstName+ user.lastName+ user.email+ user.password)
    this.userService.postUser(user);
  }

  hasNumber(name: string){
    for (let i = 0; i < 10; i++) {
      let aux: string = i.toString();
      if(name.includes(aux)){
        return true;
      }
    }
    return false;
  }
}
