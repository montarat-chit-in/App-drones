import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AreaPage } from './area.page';

const routes: Routes = [
  {
    path: '',
    component: AreaPage
  },
  {
    path: 'nonthaburi',
    loadChildren: () => import('./nonthaburi/nonthaburi.module').then( m => m.NonthaburiPageModule)
  },
  {
    path: 'pathumthani',
    loadChildren: () => import('./pathumthani/pathumthani.module').then( m => m.PathumthaniPageModule)
  },
  {
    path: 'ayutthaya',
    loadChildren: () => import('./ayutthaya/ayutthaya.module').then( m => m.AyutthayaPageModule)
  },
  {
    path: 'nakhonpathom',
    loadChildren: () => import('./nakhonpathom/nakhonpathom.module').then( m => m.NakhonpathomPageModule)
  },
  {
    path: 'suphanburi',
    loadChildren: () => import('./suphanburi/suphanburi.module').then( m => m.SuphanburiPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AreaPageRoutingModule {}
