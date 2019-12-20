import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-establishments',
  templateUrl: './establishments.component.html',
  styleUrls: ['./establishments.component.css']
})
export class EstablishmentsComponent implements OnInit {
  state;
  city;
  district;

  constructor() { }

  ngOnInit() {
    
  }
  reciverState(state) {
    console.log('Foi emitido o evento e chegou no pai >>>> ' + state);
    this.state = state;
  }
  reciverCity(city) {
    console.log('Foi emitido o evento e chegou no pai >>>> ' + city);
    this.city = city;
  }
  reciverDistrict(district) {
    console.log('Foi emitido o evento e chegou no pai >>>> ' + district);
    this.state = district;
  }

  findByParameters(){
    alert(this.state);
  }
}
