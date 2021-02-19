import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DroneMeanPage } from './drone-mean.page';

const routes: Routes = [
  {
    path: '',
    component: DroneMeanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DroneMeanPageRoutingModule {}
