import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RegistroCarPageRoutingModule } from './registro-car-routing.module';
import { RegistroCarPage } from './registro-car.page';
import { AutoComponent } from '../components/auto/auto.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroCarPageRoutingModule
  ],
  declarations: [RegistroCarPage,AutoComponent]
})
export class RegistroCarPageModule {}
