import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuphanburiPageRoutingModule } from './suphanburi-routing.module';

import { SuphanburiPage } from './suphanburi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuphanburiPageRoutingModule
  ],
  declarations: [SuphanburiPage]
})
export class SuphanburiPageModule {}
