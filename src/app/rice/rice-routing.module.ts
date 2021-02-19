import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RicePage } from './rice.page';

const routes: Routes = [
  {
    path: '',
    component: RicePage
  },
  {
    path: 'before',
    loadChildren: () => import('./before/before.module').then( m => m.BeforePageModule)
  },
  {
    path: 'after',
    loadChildren: () => import('./after/after.module').then( m => m.AfterPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RicePageRoutingModule {}
