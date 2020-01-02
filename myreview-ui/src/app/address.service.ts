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

  public state;
  public city;
  public district;

  constructor(private httpCliente: HttpClient) { }

  getStates(){
    return this.httpCliente.get(this.ALL_STATES);
  }

  getCitiesByState(stateName: any){
    return this.httpCliente.get(this.CITIES_BY_STATE + stateName);
  }

  getDistrictsByCity(cityName: any){
    return this.httpCliente.get(this.DISTRICTS_BY_CITY + cityName);
  }

  reciveAddress(state: any, city: any, district: any){
    this.state = state;
    this.city = city;
    this.district = district;
  }
}
