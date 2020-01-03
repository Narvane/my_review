import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
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
  public SAVE_UPDATE_ESTABLISHMENT_URL = `${this.apiurl}/establishments`;
  public ESTABLISHMENT_URL = `${this.apiurl}/establishments/`;

  constructor(private httpCliente: HttpClient) { }
  
  getEstablishment(idEstablishent){
    return this.httpCliente.get(this.ESTABLISHMENT_URL + idEstablishent);
  }
  getAllEstablishments() {
    return this.httpCliente.get(this.ALL_ESTABLISHMENTS_URL);
  }
  postEstablishment(establishment: any) {
    this.httpCliente.post<any>(this.SAVE_UPDATE_ESTABLISHMENT_URL, establishment);
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
