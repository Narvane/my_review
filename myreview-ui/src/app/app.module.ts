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
import { CadastroComponent } from './cadastro/cadastro.component';
import { AddressComponent } from './establishments/address/address.component';
import { HomeComponent } from './home/home.component';
import { EstablishmentsComponent } from './establishments/establishments.component';
import { EstablishmentListComponent } from './establishments/establishment-list/establishment-list.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponentComponent,
    NavbarComponentComponent,
    EstablishmentComponent,
    CadastroComponent,
    AddressComponent,
    HomeComponent,
    EstablishmentsComponent,
    EstablishmentListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
