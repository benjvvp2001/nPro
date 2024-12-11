import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Animation, AnimationController } from '@ionic/angular';
import { DataService } from '../data.service';
import { firstValueFrom } from 'rxjs';
import { Car, CarsService } from '../services/cars.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  private animation!:Animation;
  email: string = '';
  constructor(private aService:AuthService
              , private router:Router
              , private aCtrl:AnimationController
              , private dataService: DataService
              , private carService:CarsService) { }

  ngOnInit() {
  }

  async validar(){
    try {
      this.email = this.dataService.getEmail(); // Recupera el correo del servicio
      console.log("Correo para validar:", this.email);
  
      // Convertir el observable en una promesa
      const cars = await firstValueFrom(this.carService.getCar());
  
      // Verificar si existe un coche con el nombre igual al correo
      const carExists = cars.some(car => car.nombre === this.email);
  
      if (carExists) {
        console.log("El usuario ya está registrado en el sistema.");
        alert("Este usuario ya está registrado en el sistema.");
        this.router.navigate(["/form-conductor"]);
      } else {
        console.log("El usuario no está registrado en el sistema.");
        alert("El usuario no está registrado en el sistema.");
        this.router.navigate(["/registro-car"]);
      }
    } catch (error) {
      console.error("Error al obtener la lista de coches:", error);
    }
  }

  logout(){
    this.aService.logout();
    alert("Sesión Cerrada")
    this.router.navigate(["/home"]);
  }
  ngAfterViewInit(){
    this.animation = this.aCtrl.create()
    .addElement(document.querySelector('.auto') as HTMLElement)
    .iterations(Infinity)
    .duration(7000)
    .keyframes([
      { offset: 0, transform: 'translateY(0px) rotate(1deg)', opacity: '1' },
      { offset: 0.5, transform: 'translateY(0px) rotate(360deg)', opacity: '1' },
      { offset: 0.8, transform: 'translateY(0px) rotate(360deg)', opacity: '0.5 ' }
    ]);
    
    this.animation.play();
    
    this.animation = this.aCtrl.create()
    .addElement(document.querySelector('.square') as HTMLElement)
    .iterations(Infinity)
    .duration(7000)
    .keyframes([
      { offset: 0, transform: 'translateX(1px) rotate(0deg)', opacity: '1' },
      { offset: 0.5, transform: 'translateX(300px) rotate(180deg)', opacity: '1' },
      { offset: 0.8, transform: 'translateX(600px) rotate(360deg)', opacity: '0.5 ' }
    ]);
    
    this.animation.play();
  }
}
