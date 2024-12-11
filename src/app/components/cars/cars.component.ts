import { Component, OnInit } from '@angular/core';
import { Car, CarsService } from '../../services/cars.service';
import { Router } from '@angular/router';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss'],
})
export class CarsComponent  implements OnInit {
  car:Car = {
    nombre:"",
    modelo:"",
    patente:"",
    destino:"",
    capacidad:0,
    tarifa:0,
    telefono:0
  }
  email: string="";
  constructor(private carService:CarsService, private router:Router,private dataService: DataService ) { }

  ngOnInit() {}

  addCar(){
      this.email = this.dataService.getEmail(); // Recupera el correo del servicio
      console.log(this.email)
      this.car.nombre = this.email;
      this.car.patente = this.dataService.getpatente();
      this.car.modelo = this.dataService.getpatente();

      this.carService.crea(this.car).then(()=>{
        alert("Viaje agregado exitosamente!")
        this.car= {nombre:"",modelo:"",patente:"",destino:"",capacidad:0,tarifa:0,telefono:0};
        this.router.navigate(["/inicio"]);
    }).catch(error=>{alert("Error al momento de registrar destino!"+error)})
  }

}
