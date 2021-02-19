import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListdronePageRoutingModule } from './listdrone-routing.module';

import { ListdronePage } from './listdrone.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListdronePageRoutingModule
  ],
  declarations: [ListdronePage]
})
export class ListdronePageModule {}
