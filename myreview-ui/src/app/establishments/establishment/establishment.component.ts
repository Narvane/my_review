import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from './reviews/user/user.service';
import { ReviewService } from '../../review.service';
import { EstablishmentService } from '../establishment.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-establishment',
  templateUrl: './establishment.component.html',
  styleUrls: ['./establishment.component.css']
})
export class EstablishmentComponent implements OnInit {
  public establishmentId;
  establishment;
  reviews = [];
  user;

  stars;
  comment;


  constructor(private establishmentService: EstablishmentService, private route: ActivatedRoute, private reviewService: ReviewService, private userService: UserService, private modalService: NgbModal) { 
    this.route.params.subscribe(params => this.establishmentId = params['id'])
  }

  ngOnInit() {
    this.establishmentService.getEstablishment(this.establishmentId)
    .subscribe(response => this.establishment = <any> response)

    this.reviewService.getReviewsByEstablishments(this.establishmentId)
    .subscribe(response => this.reviews = <any> response)

  }
  openBackDropCustomClass(content) {
    this.modalService.open(content, {backdropClass: 'light-blue-backdrop'});
  }

  postReview(){
    
  }
}
