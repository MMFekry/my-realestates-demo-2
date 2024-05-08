import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsensualSalePageRoutingModule } from './consensual-sale-routing.module';

import { ConsensualSalePage } from './consensual-sale.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsensualSalePageRoutingModule
  ],
  declarations: [ConsensualSalePage]
})
export class ConsensualSalePageModule {}
