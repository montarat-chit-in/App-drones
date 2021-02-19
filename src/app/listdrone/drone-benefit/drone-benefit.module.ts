import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DroneBenefitPageRoutingModule } from './drone-benefit-routing.module';

import { DroneBenefitPage } from './drone-benefit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DroneBenefitPageRoutingModule
  ],
  declarations: [DroneBenefitPage]
})
export class DroneBenefitPageModule {}
