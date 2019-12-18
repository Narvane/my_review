import { AddressService } from './../address.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  selectedState: string = "Estados";
  selectedCity: string = "Cidades";
  selectedDistrict: string = "Bairros";
  states = [];
  cities = [];
  districts = [];

  constructor(private addressService: AddressService) { }

  ngOnInit() {
    this.loadStates();
  }

  loadStates(){
    this.addressService.getStates()
    .subscribe(response => this.states = <any> response);

    this.selectedCity = "Cidades";
    this.loadCities();
  }
  loadCities(){
    this.addressService.getCitiesByState(this.selectedState)
    .subscribe(response => this.cities = <any> response);

    this.selectedDistrict = "Bairros";
    this.loadDistricts();
  }
  loadDistricts(){
    this.addressService.getDistrictsByCity(this.selectedCity)
    .subscribe(response => this.districts = <any> response);
  }
}
