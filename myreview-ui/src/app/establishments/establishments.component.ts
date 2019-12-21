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
  reciverState(state) {
    this.state = state;
    this.loadEstablishments();
  }
  reciverCity(city) {
    this.city = city;
    this.loadEstablishments();
  }
  reciverDistrict(district) {
    this.state = district;
    this.loadEstablishments();
  }

  findByParameters(){
    alert(this.state);
  }

  loadEstablishments(){
    if(this.city == "Cidades"){
      this.establishmentService.getEstablishmentsByState(this.state)
      .subscribe(response => this.establishments = <any> response)
      alert("IF 1")
    }else if(this.district == "Bairros" && this.city!="Cidades"){
      this.establishmentService.getEstablishmentsByCity(this.city)
      .subscribe(response => this.establishments = <any> response)
      alert("IF 2")
    }else if(this.state == "Estados" && this.district == "Bairros" && this.city=="Cidades"){
      this.establishmentService.getAllEstablishments()
      .subscribe(response => this.establishments = <any> response)
      alert("IF 3")
    }else{
      this.establishmentService.getEstablishmentsByDistrict(this.district)
      .subscribe(response => this.establishments = <any> response)
      alert("IF 4")
    }
  }
}
