import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from './../user.service';
import { ReviewService } from './../review.service';
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
  reviews = [];
  idUsuario;
  user;

  constructor(private establishmentService: EstablishmentService, private route: ActivatedRoute, private reviewService: ReviewService, private userService: UserService, private modalService: NgbModal) { 
    this.route.params.subscribe(params => this.userId = params['id'])
  }

  ngOnInit() {
    this.establishmentService.getEstablishment(this.userId)
    .subscribe(response => this.establishment = <any> response)

    this.reviewService.getReviewsByEstablishments(this.userId)
    .subscribe(response => this.reviews = <any> response)

    //this.userService.getUser().subscribe(response => this.user = <any> response)
  }
  openBackDropCustomClass(content) {
    this.modalService.open(content, {backdropClass: 'light-blue-backdrop'});
  }
}
