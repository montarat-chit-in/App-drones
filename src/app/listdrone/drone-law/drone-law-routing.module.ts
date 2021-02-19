import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DroneLawPage } from './drone-law.page';

const routes: Routes = [
  {
    path: '',
    component: DroneLawPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DroneLawPageRoutingModule {}
