import { Observable } from 'rxjs';
import { EstablishmentService } from '../establishment.service';
import { AddressService } from '../../address.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  @Output() establishmentEmiter = new EventEmitter<any>();
  establishmentList: Observable<any>;

  selectedState = "Estados";
  selectedCity = "Cidades";
  selectedDistrict = "Bairros";

  states = [];
  cities = [];
  districts = [];

  constructor(private addressService: AddressService, private establishmentService: EstablishmentService) { }

  ngOnInit() {
    this.loadStates();
  }

  loadStates() {
    this.selectedState = "Estados";
    this.addressService.getStates()
      .subscribe(response => this.states = <any>response);

    this.selectedCity = "Cidades";
    this.loadCities();
  }
  loadCities() {
    this.addressService.getCitiesByState(this.selectedState)
      .subscribe(response => this.cities = <any>response);

    this.selectedDistrict = "Bairros";
    this.loadDistricts();
  }
  loadDistricts() {
    this.addressService.getDistrictsByCity(this.selectedCity)
      .subscribe(response => this.districts = <any>response);

  }

  sendEstablishmentList() {
    if (this.selectedCity == "Cidades") {
      this.establishmentList = this.establishmentService.getEstablishmentsByState(this.selectedState)
    } else if (this.selectedDistrict == "Bairros" && this.selectedCity != "Cidades") {
      this.establishmentList = this.establishmentService.getEstablishmentsByCity(this.selectedCity)
    } else if (this.selectedState == "Estados" && this.selectedDistrict == "Bairros" && this.selectedCity == "Cidades") {
      this.establishmentList = this.establishmentService.getAllEstablishments()
    } else {
      this.establishmentList = this.establishmentService.getEstablishmentsByDistrict(this.selectedDistrict)
    }
    this.establishmentEmiter.emit(this.establishmentList);
  }

}
