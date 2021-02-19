import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AyutthayaPageRoutingModule } from './ayutthaya-routing.module';

import { AyutthayaPage } from './ayutthaya.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AyutthayaPageRoutingModule
  ],
  declarations: [AyutthayaPage]
})
export class AyutthayaPageModule {}
