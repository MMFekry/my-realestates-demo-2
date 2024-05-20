import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeessalePageRoutingModule } from './feessale-routing.module';

import { FeessalePage } from './feessale.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeessalePageRoutingModule
  ],
  declarations: [FeessalePage]
})
export class FeessalePageModule {}
