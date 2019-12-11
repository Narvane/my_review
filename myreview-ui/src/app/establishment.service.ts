import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../app/user';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EstablishmentService {

  private apiurl = 'http://localhost:8080/';
  public ALL_ESTABLISHMENTS_URL = `${this.apiurl}/establishments/all`;
  public ESTABLISHMENTS_BY_STATE_URL = `${this.apiurl}/establishments/state/`;
  public ESTABLISHMENTS_BY_CITY_URL = `${this.apiurl}/establishments/city/`;
  public ESTABLISHMENTS_BY_DISTRICT_URL = `${this.apiurl}/establishments/district/`;
  public REVIEWS_BY_ESTABLISHMENT_URL = `${this.apiurl}/reviews/establishment/`;
  public SAVE_UPDATE_ESTABLISHMENT_URL = `${this.apiurl}/establishemnts`;
  public REVIEWS_BY_USER_URL = `${this.apiurl}/reviews/user/`;
  public SAVE_REVIEW = `${this.apiurl}/reviews`;
  public USER_URL = `${this.apiurl}/user/`;
  public ESTABLISHMENT_URL = `${this.apiurl}/establishment/`;
  public SAVE_UPDATE_USER_URL = `${this.apiurl}/users`;
  public ALL_STATES = `${this.apiurl}/states`;
  public CITIES_BY_STATE = `${this.apiurl}/cities`;
  public DISTRICTS_BY_CITY = `${this.apiurl}/districts`;
  public DELETE_REVIEW = `${this.apiurl}/review/`;
  
  constructor(private httpCliente: HttpClient) { }
  
  getEstablishment(idEstablishent){
    return this.httpCliente.get(this.ESTABLISHMENT_URL + idEstablishent);
  }
  getEstablishments() {
    return this.httpCliente.get(this.ALL_ESTABLISHMENTS_URL);
  }
  postEstablishment() {
    
  }
  
  getEstablishmentsByState(stateName: string) {
    return this.httpCliente.get(this.ESTABLISHMENTS_BY_STATE_URL + stateName);
  }

  getEstablishmentsByCity(cityName: string) {
    return this.httpCliente.get(this.ESTABLISHMENTS_BY_CITY_URL + cityName);
  }

  getEstablishmentsByDistrict(districtName: string) {
    return this.httpCliente.get(this.ESTABLISHMENTS_BY_DISTRICT_URL +  districtName);
  }

}
