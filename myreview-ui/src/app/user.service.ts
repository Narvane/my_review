import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiurl = 'http://localhost:8080/';
  public USER_URL = `${this.apiurl}/user/`;
  public SAVE_UPDATE_USER_URL = `${this.apiurl}/users`;

  constructor(private httpCliente: HttpClient) { }

  postUser(user: any){
    this.httpCliente.post<any>(this.SAVE_UPDATE_USER_URL, user).subscribe(res => { 
      console.log(`this.brandListService`, {res}); 
    }, error => {
      console.log("Error", error);
    });;
  }

  getUser(idUser: string){
    return this.httpCliente.get(this.USER_URL + idUser);
  }

}
