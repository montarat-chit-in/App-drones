import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DroneKrasetPageRoutingModule } from './drone-kraset-routing.module';

import { DroneKrasetPage } from './drone-kraset.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DroneKrasetPageRoutingModule
  ],
  declarations: [DroneKrasetPage]
})
export class DroneKrasetPageModule {}
