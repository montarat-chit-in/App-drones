import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NonthaburiPageRoutingModule } from './nonthaburi-routing.module';

import { NonthaburiPage } from './nonthaburi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NonthaburiPageRoutingModule
  ],
  declarations: [NonthaburiPage]
})
export class NonthaburiPageModule {}
