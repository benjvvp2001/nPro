import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroCarPage } from './registro-car.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroCarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroCarPageRoutingModule {}
