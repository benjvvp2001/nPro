import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Car, CarsService } from '../../services/cars.service';
import { DataService } from '../../data.service';


@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.scss'],
})
export class AutoComponent  implements OnInit {

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
  modelo: string="";
  patente: string="";

  constructor(private router: Router
              ,private dataService: DataService
              ,private carService:CarsService
  ) { }

  ngOnInit() {}
  ver(){
    patente: this.car.modelo
    console.log(this.patente)
  }

  guardaauto(){
    this.email = this.dataService.getEmail(); // Recupera el correo del servicio
    console.log(this.email)
    this.car.nombre = this.email;

    this.dataService.setmodelo(this.car.modelo);
    this.dataService.setpatente(this.car.patente);

    this.carService.crea(this.car).then(()=>{
      console.log("bien")
      alert("Vehiculo agregado exitosamente!")
      this.car= {nombre:this.email,modelo:"",patente:"",destino:"",capacidad:0,tarifa:0,telefono:0}
      this.router.navigate(["/inicio"]);
  }).catch(error=>{alert("Error al momento de registrar vehiculo!"+error)})
}

  irANuevaPagina() {
    this.router.navigateByUrl('/nueva-pagina');
  }
}
