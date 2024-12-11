import { Component, OnInit } from '@angular/core';
import { CarsService, Car } from './../../services/cars.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viaje-info',
  templateUrl: './viaje-info.component.html',
  styleUrls: ['./viaje-info.component.scss'],
})
export class ViajeInfoComponent implements OnInit {
  car$: Observable<Car | undefined> | undefined;

  constructor(
    private route: ActivatedRoute,
    private carsService: CarsService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.car$ = this.carsService.getCarById(id);
    }
  }
}