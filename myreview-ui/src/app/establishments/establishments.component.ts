import { Observable } from 'rxjs';
import { EstablishmentService } from './establishment.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-establishments',
  templateUrl: './establishments.component.html',
  styleUrls: ['./establishments.component.css']
})
export class EstablishmentsComponent implements OnInit {

  establishments = [];

  constructor(private establishmentService: EstablishmentService) { }
  
  ngOnInit() {
    this.establishmentService.getAllEstablishments()
      .subscribe(response => this.establishments = <any> response)
  }

  reciverList(establishmentList: Observable<any>) {
    establishmentList.subscribe(response => this.establishments = <any> response)
  }

}
