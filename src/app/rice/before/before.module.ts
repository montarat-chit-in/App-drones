import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BeforePageRoutingModule } from './before-routing.module';

import { BeforePage } from './before.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BeforePageRoutingModule
  ],
  declarations: [BeforePage]
})
export class BeforePageModule {}
