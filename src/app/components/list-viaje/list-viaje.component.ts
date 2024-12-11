import { Component, OnInit } from '@angular/core';
import { CarsService, Car } from '../../services/cars.service';

@Component({
  selector: 'app-list-viaje',
  templateUrl: './list-viaje.component.html',
  styleUrls: ['./list-viaje.component.scss'],
})
export class ListViajeComponent  implements OnInit {
  cars:Car[]=[]
  constructor(private carsService:CarsService) { }

  ngOnInit() {
    this.carsService.getCar().subscribe(cars =>{
      this.cars = cars;
    })
  }

}
