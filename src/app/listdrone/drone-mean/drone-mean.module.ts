import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DroneMeanPageRoutingModule } from './drone-mean-routing.module';

import { DroneMeanPage } from './drone-mean.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DroneMeanPageRoutingModule
  ],
  declarations: [DroneMeanPage]
})
export class DroneMeanPageModule {}
