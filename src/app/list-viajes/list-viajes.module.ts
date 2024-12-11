import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ListViajesPageRoutingModule } from './list-viajes-routing.module';
import { ListViajesPage } from './list-viajes.page';
import { ListViajeComponent } from '../components/list-viaje/list-viaje.component';

@NgModule({
  imports: [
  
  CommonModule,
    FormsModule,
    IonicModule,
    ListViajesPageRoutingModule
  ],
  declarations: [ListViajesPage,ListViajeComponent]
})
export class ListViajesPageModule {}
