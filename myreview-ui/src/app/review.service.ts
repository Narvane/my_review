import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  private apiurl = 'http://localhost:8080/';
  public REVIEWS_BY_ESTABLISHMENT_URL = `${this.apiurl}/reviews/establishment/`;
  public REVIEWS_BY_USER_URL = `${this.apiurl}/reviews/user/`;
  public SAVE_REVIEW = `${this.apiurl}/reviews`;
  public DELETE_REVIEW = `${this.apiurl}/review/`;

  constructor(private httpCliente: HttpClient) { }

  postReview(review: any){
    this.httpCliente.post<any>(this.SAVE_REVIEW, review);
  }

  getReviewsByEstablishments(idEstab: string){
    return this.httpCliente.get(this.REVIEWS_BY_ESTABLISHMENT_URL + idEstab);
  }

  getReviewsByUser(idUser: string){
    return this.httpCliente.get(this.REVIEWS_BY_USER_URL + idUser);
  }
}
