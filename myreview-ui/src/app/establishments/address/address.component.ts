import { AddressService } from '../../address.service';
import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';



@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  @Output() eventState = new EventEmitter<any>();
  @Output() eventCity = new EventEmitter<any>();
  @Output() eventDistrict = new EventEmitter<any>();

  selectedState = "Estados";
  selectedCity = "Cidades";
  selectedDistrict = "Bairros";

  states = [];
  cities = [];
  districts = [];

  constructor(private addressService: AddressService) { }

  ngOnInit() {
    this.loadStates();
  }

  loadStates(){
    this.selectedState = "Estados";
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

  sendParameters(){
    this.eventState.emit(this.selectedState);
    this.eventCity.emit(this.selectedCity);
    this.eventDistrict.emit(this.selectedDistrict);
  }
}