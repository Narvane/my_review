import { CadastroComponent } from './cadastro/cadastro.component';
import { SearchComponentComponent } from './search-component/search-component.component';
import { EstablishmentComponent } from './establishment/establishment.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddressComponent } from './address/address.component';


const routes: Routes = [
  {
    path:'',
    component: SearchComponentComponent
  },
  {
    path:'establishment/:id',
    component: EstablishmentComponent
  },
  {
    path:'cadastro',
    component: CadastroComponent
  },
  {
    path:'address',
    component:  AddressComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
