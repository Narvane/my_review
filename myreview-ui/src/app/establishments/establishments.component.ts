import { EstablishmentService } from './../establishment.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-establishments',
  templateUrl: './establishments.component.html',
  styleUrls: ['./establishments.component.css']
})
export class EstablishmentsComponent implements OnInit {
  state = "Estados";
  city = "Cidades";
  district = "Bairros";

  establishments = [];

  constructor(private establishmentService: EstablishmentService) { }

  ngOnInit() {
    this.establishmentService.getAllEstablishments()
      .subscribe(response => this.establishments = <any> response)
      
  }

  reciverTest(lista: [string, string, string]) {
    this.state = lista[0];
    this.city = lista[1];
    this.district = lista[2];
    
    //this.loadEstablishments();
  }

  findByParameters(){
    alert(this.state);
  }

  loadEstablishments(){
    if(this.city == "Cidades"){
      this.establishmentService.getEstablishmentsByState(this.state)
      .subscribe(response => this.establishments = <any> response)
    }else if(this.district == "Bairros" && this.city!="Cidades"){
      this.establishmentService.getEstablishmentsByCity(this.city)
      .subscribe(response => this.establishments = <any> response)
    }else if(this.state == "Estados" && this.district == "Bairros" && this.city=="Cidades"){
      this.establishmentService.getAllEstablishments()
      .subscribe(response => this.establishments = <any> response)
    }else{
      this.establishmentService.getEstablishmentsByDistrict(this.district)
      .subscribe(response => this.establishments = <any> response)
    }
  }
}
