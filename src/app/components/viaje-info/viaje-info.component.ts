import { Component, OnInit } from '@angular/core';
import { CarsService, Car } from './../../services/cars.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import {GpsMapService} from './../../services/gps-map.service';

@Component({
  selector: 'app-viaje-info',
  templateUrl: './viaje-info.component.html',
  styleUrls: ['./viaje-info.component.scss'],
})
export class ViajeInfoComponent implements OnInit {
  car$: Observable<Car | undefined> | undefined;
  startPoint = '-70.59810338976429,-33.51585232886527'; // Punto predeterminado
  endPoint = ''; // Punto ingresado por el usuario

  constructor(
    private route: ActivatedRoute,
    private carsService: CarsService,
    private GpsMapService: GpsMapService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.car$ = this.carsService.getCarById(id);
      
    };

    this.GpsMapService
    .buildmap()
    .then(()=>{
      const destino= this.carsService.getDestino();
      this.GpsMapService.drawRoute(this.startPoint,destino)
    })
    .catch((error: any)=>console.log(error));
    
    


    

  }
  };
