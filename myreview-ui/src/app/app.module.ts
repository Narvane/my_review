import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponentComponent } from './search-component/search-component.component';
import { NavbarComponentComponent } from './navbar-component/navbar-component.component';
import { HttpClientModule } from "@angular/common/http";
import { EstablishmentComponent } from './establishment/establishment.component';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { AddressComponent } from './establishments/address/address.component';
import { HomeComponent } from './home/home.component';
import { EstablishmentsComponent } from './establishments/establishments.component';
import { RatingModule } from 'ng-starrating';
import { UserComponent } from './user/user.component';
import { ProfileComponent } from './user/profile/profile.component';
import { ReviewsComponent } from './user/reviews/reviews.component';
import { ToastComponent } from './toast/toast.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponentComponent,
    NavbarComponentComponent,
    EstablishmentComponent,
    RegisterComponent,
    AddressComponent,
    HomeComponent,
    EstablishmentsComponent,
    UserComponent,
    ProfileComponent,
    ReviewsComponent,
    ToastComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    RatingModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
