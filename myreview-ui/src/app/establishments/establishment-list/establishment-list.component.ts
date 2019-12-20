import { Component, OnInit, Input } from '@angular/core';
import { EstablishmentService } from 'src/app/establishment.service';

@Component({
  selector: 'app-establishment-list',
  templateUrl: './establishment-list.component.html',
  styleUrls: ['./establishment-list.component.css']
})
export class EstablishmentListComponent implements OnInit {
  @Input() state;
  @Input() city;
  @Input() district;
  establishments = [];

  constructor(private establishmentService: EstablishmentService) { }

  ngOnInit() {
    this.establishmentService.getAllEstablishments()
      .subscribe(response => this.establishments = <any> response)
  }

  loadEstablishments(){
    if(this.city == "Cidades" && this.state!= "Estados"){
      this.establishmentService.getEstablishmentsByState(this.state)
      .subscribe(response => this.establishments = <any> response)
    }else if(this.district == "Bairro" && this.city!="Cidade"){
      this.establishmentService.getEstablishmentsByCity(this.city)
      .subscribe(response => this.establishments = <any> response)
    }else if(this.state == "Estado" && this.district == "Bairro" && this.city=="Cidade"){
      this.establishmentService.getAllEstablishments()
      .subscribe(response => this.establishments = <any> response)
    }else{
      this.establishmentService.getEstablishmentsByDistrict(this.district)
      .subscribe(response => this.establishments = <any> response)
    }
  }
}
