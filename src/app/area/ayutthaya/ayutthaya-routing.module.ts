import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AyutthayaPage } from './ayutthaya.page';

const routes: Routes = [
  {
    path: '',
    component: AyutthayaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AyutthayaPageRoutingModule {}
