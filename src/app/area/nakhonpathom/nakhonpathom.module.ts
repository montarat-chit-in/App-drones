import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NakhonpathomPageRoutingModule } from './nakhonpathom-routing.module';

import { NakhonpathomPage } from './nakhonpathom.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NakhonpathomPageRoutingModule
  ],
  declarations: [NakhonpathomPage]
})
export class NakhonpathomPageModule {}
