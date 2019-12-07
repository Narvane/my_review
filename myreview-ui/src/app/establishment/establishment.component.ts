import { EstablishmentService } from './../establishment.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-establishment',
  templateUrl: './establishment.component.html',
  styleUrls: ['./establishment.component.css']
})
export class EstablishmentComponent implements OnInit {
  public userId;
  establishment;

  constructor(private establishmentService: EstablishmentService, private route: ActivatedRoute) { 
    this.route.params.subscribe(params => this.userId = params['id'])
  }

  ngOnInit() {
    this.establishmentService.getEstablishment(this.userId)
    .subscribe(response => this.establishment = <any> response)
  }

}
