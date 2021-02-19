import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NakhonpathomPage } from './nakhonpathom.page';

const routes: Routes = [
  {
    path: '',
    component: NakhonpathomPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NakhonpathomPageRoutingModule {}
