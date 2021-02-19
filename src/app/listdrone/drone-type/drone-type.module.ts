import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DroneTypePageRoutingModule } from './drone-type-routing.module';

import { DroneTypePage } from './drone-type.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DroneTypePageRoutingModule
  ],
  declarations: [DroneTypePage]
})
export class DroneTypePageModule {}
