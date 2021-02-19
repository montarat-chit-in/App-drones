import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DroneTypeofkrasetPage } from './drone-typeofkraset.page';

const routes: Routes = [
  {
    path: '',
    component: DroneTypeofkrasetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DroneTypeofkrasetPageRoutingModule {}
