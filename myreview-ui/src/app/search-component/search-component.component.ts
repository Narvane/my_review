import { ListComponentComponent } from './../list-component/list-component.component';

import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import { EstablishmentService } from '../establishment.service';

enum statesEnum {
  RO = "Rondônia",
	AC = "Acre",
	AM = "Amazonas",
	RR = "Roraima",
	PA = "Pará",
	AP = "Amapá",
	TO = "Tocantins",
	MA = "Maranhão",
	PI = "Piauí",
	CE = "Ceará",
	RN = "Rio Grande do Norte",
	PB = "Paraíba",
	PE = "Pernambuco",
	AL = "Alagoas",
	SE = "Sergipe",
	BA = "Bahia",
	MG = "Minas Gerais",
	ES = "Espírito Santo",
	RJ = "Rio de Janeiro",
	SP = "São Paulo",
	PR = "Paraná",
	SC = "Santa Catarina",
	RS = "Rio Grande do Sul",
	MS = "Mato Grosso do Sul",
	MT = "Mato Grosso",
	GO = "Goiás",
	DF = "Distrito Federal",
}

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css']
})

export class SearchComponentComponent implements OnInit {
  state: string;
  city: string = "Cidade";
  district: string = "Bairro";
  establishments = [];
  establishmentsStates = [];
  establishmentsCities = [];
  establishmentsDistricts = [];

  constructor(private establishmentService: EstablishmentService) { }

  ngOnInit() {
    this.establishmentService.getStateList()
      .subscribe(response => this.establishmentsStates = <any> response)
    this.establishmentService.list()
      .subscribe(response => this.establishments = <any> response)
  }

  loadCities() {
    this.establishmentService.getCitiesList(this.state)
    .subscribe(response => this.establishmentsCities = <any> response)
  }

  loadDistricts() {
    if(this.city != "Cidade"){
      this.establishmentService.getDestrictList(this.state, this.city)
    .subscribe(response => this.establishmentsDistricts = <any> response)
    }else{
      this.establishmentsDistricts = ["Bairro"]
    }
  }

  findByParameters() {
    if (this.city == "Cidade"){
      this.establishmentService.getEstablishmentsByState(this.state)
        .subscribe(response => this.establishments = <any> response)
    }else if(this.district == "Bairro"){
     this.establishmentService.getEstablishmentsByCity(this.state, this.city)
        .subscribe(response => this.establishments = <any> response)
    }else{
      this.establishmentService.getEstablishmentsByDistrict(this.state, this.city, this.district)
        .subscribe(response => this.establishments = <any> response)
    }
  }

}
