import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PathumthaniPageRoutingModule } from './pathumthani-routing.module';

import { PathumthaniPage } from './pathumthani.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PathumthaniPageRoutingModule
  ],
  declarations: [PathumthaniPage]
})
export class PathumthaniPageModule {}
