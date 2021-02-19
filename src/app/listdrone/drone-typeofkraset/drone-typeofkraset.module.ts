import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DroneTypeofkrasetPageRoutingModule } from './drone-typeofkraset-routing.module';

import { DroneTypeofkrasetPage } from './drone-typeofkraset.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DroneTypeofkrasetPageRoutingModule
  ],
  declarations: [DroneTypeofkrasetPage]
})
export class DroneTypeofkrasetPageModule {}
