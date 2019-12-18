import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  private apiurl = 'http://localhost:8080/';
  public ALL_STATES = `${this.apiurl}/states`;
  public CITIES_BY_STATE = `${this.apiurl}/cities/`;
  public DISTRICTS_BY_CITY = `${this.apiurl}/districts/`;

  constructor(private httpCliente: HttpClient) { }

  getStates(){
    return this.httpCliente.get(this.ALL_STATES);
  }

  getCitiesByState(stateName: string){
    return this.httpCliente.get(this.CITIES_BY_STATE + stateName);
  }

  getDistrictsByCity(cityName: string){
    return this.httpCliente.get(this.DISTRICTS_BY_CITY + cityName);
  }
}
