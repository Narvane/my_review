import { EstablishmentService } from './../establishment.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  name: string;
  cnpj: string;
  description: string;
  number: string;
  state: string;
  city: string = "Cidade";
  district: string = "Bairro";
  establishmentsStates = [];
  establishmentsCities = [];
  establishmentsDistricts = [];
  constructor(private establishmentService: EstablishmentService) { }

  ngOnInit() {
    //this.establishmentService.getDefaultStateList()
      //.subscribe(response => this.establishmentsStates = <any> response)
  }
  loadCities() {
    //this.establishmentService.getDefaultCitiesList(this.state)
    //.subscribe(response => this.establishmentsCities = <any> response)
  }
  loadDistricts() {
    //if(this.city != "Escolher..."){
      //this.establishmentService.getDefaultDestrictList(this.state, this.city)
    //.subscribe(response => this.establishmentsDistricts = <any> response)
    //}else{
     // this.establishmentsDistricts = ["Escolher..."]
    //}
  }
}
