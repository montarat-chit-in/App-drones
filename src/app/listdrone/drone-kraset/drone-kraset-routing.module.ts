import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DroneKrasetPage } from './drone-kraset.page';

const routes: Routes = [
  {
    path: '',
    component: DroneKrasetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DroneKrasetPageRoutingModule {}
