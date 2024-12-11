import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { InfoViajePageRoutingModule } from './info-viaje-routing.module'; // Aquí debes importar correctamente
import { InfoViajePage } from './info-viaje.page';
import { ViajeInfoComponent } from '../components/viaje-info/viaje-info.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoViajePageRoutingModule
  ],
  declarations: [InfoViajePage, ViajeInfoComponent]
})
export class InfoViajePageModule {}
