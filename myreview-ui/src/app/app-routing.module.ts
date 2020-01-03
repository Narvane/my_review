import { ReviewsComponent } from './establishments/establishment/reviews/reviews.component';
import { ProfileComponent } from './establishments/establishment/reviews/user/profile/profile.component';
import { EstablishmentsComponent } from './establishments/establishments.component';
import { AddressService } from './address.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { EstablishmentComponent } from './establishments/establishment/establishment.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddressComponent } from './establishments/address/address.component';


const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'establishments',
    component: EstablishmentsComponent
  },
  {
    path:'establishments/:id',
    component: EstablishmentComponent
  },
  {
    path:'user/register',
    component: RegisterComponent
  },
  {
    path:'user/profile',
    component: ProfileComponent
  },
  {
    path:'user/reviews',
    component: ReviewsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
