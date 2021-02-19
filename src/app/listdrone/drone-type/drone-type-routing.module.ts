import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DroneTypePage } from './drone-type.page';

const routes: Routes = [
  {
    path: '',
    component: DroneTypePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DroneTypePageRoutingModule {}
