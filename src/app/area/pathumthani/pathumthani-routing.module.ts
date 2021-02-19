import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PathumthaniPage } from './pathumthani.page';

const routes: Routes = [
  {
    path: '',
    component: PathumthaniPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PathumthaniPageRoutingModule {}
