import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListViajesPage } from './list-viajes.page';

const routes: Routes = [
  {
    path: '',
    component: ListViajesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListViajesPageRoutingModule {}
