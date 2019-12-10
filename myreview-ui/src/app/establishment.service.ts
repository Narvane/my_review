import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../app/user';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EstablishmentService {

  apiurl = 'http://localhost:8080/establishments';
  
  constructor(private httpCliente: HttpClient) { }

  list() {
    return this.httpCliente.get(this.apiurl);
  }

  getEstablishmentsByState(stateName: string) {
    return this.httpCliente.get(this.apiurl + "/" + stateName);
  }

  getEstablishmentsByCity(stateName: string, cityName: string) {
    return this.httpCliente.get(this.apiurl + "/" + stateName + "/" + cityName);
  }

  getEstablishmentsByDistrict(stateName: string, cityName: string, districtName: string) {
    return this.httpCliente.get(this.apiurl + "/" +  stateName + "/" +  cityName + "/" +  districtName);
  }

  getStateList() {
    return this.httpCliente.get(this.apiurl + "/states");
  }
  getCitiesList(stateName: string) {
      return this.httpCliente.get(this.apiurl + "/" + stateName + "/cities");
  }
  getDestrictList(stateName: string, cityName: string) {
    return this.httpCliente.get(this.apiurl + "/" + stateName + "/" + cityName + "/districts");
  }
  getEstablishment(idEstablishent){
    return this.httpCliente.get(this.apiurl + "/establishment/" + idEstablishent);
  }
  getReviews(idEstablishent){
    return this.httpCliente.get(this.apiurl + "/reviews/" + idEstablishent);
  }
  getUser(idReview){
    return this.httpCliente.get(this.apiurl + "/review/" + idReview);
  }
  postUser(user: User):Observable<any>{
    return this.httpCliente.post(this.apiurl, user);
  }
}
