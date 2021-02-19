import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DroneLawPageRoutingModule } from './drone-law-routing.module';

import { DroneLawPage } from './drone-law.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DroneLawPageRoutingModule
  ],
  declarations: [DroneLawPage]
})
export class DroneLawPageModule {}
