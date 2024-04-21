import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RealestatesPageRoutingModule } from './realestates-routing.module';

import { RealestatesPage } from './realestates.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RealestatesPageRoutingModule
  ],
  declarations: [RealestatesPage]
})
export class RealestatesPageModule {}
