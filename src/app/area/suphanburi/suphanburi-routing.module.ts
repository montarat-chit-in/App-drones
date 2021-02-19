import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuphanburiPage } from './suphanburi.page';

const routes: Routes = [
  {
    path: '',
    component: SuphanburiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuphanburiPageRoutingModule {}
