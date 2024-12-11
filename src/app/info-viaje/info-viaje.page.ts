import { Component, OnInit } from '@angular/core';
import { Animation, AnimationController } from '@ionic/angular';
import { OpenWeatherService } from 'src/app/services/openweather.service';


@Component({
  selector: 'app-info-viaje',
  templateUrl: './info-viaje.page.html',
  styleUrls: ['./info-viaje.page.scss'],
})



export class InfoViajePage implements OnInit {
  private animation!:Animation;
  clima: any;
 
  private readonly LATITUD = -33.4489;
  private readonly LONGITUD = -70.6693;

  constructor(private aCtrl:AnimationController,private openWeatherService: OpenWeatherService) {
    
   }
   
  ngOnInit() {
    this.getWeather(this.LATITUD, this.LONGITUD);
  }

  getWeather(lat: number, lon: number) {
    this.openWeatherService.getWeather(lat, lon).subscribe(
      (data) => {
        this.clima = data;
      },
      (error) => {
        console.error('Error al obtener los datos del clima:', error);
      }
    );
  }

  ngAfterViewInit(){this.animation = this.aCtrl.create()
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
