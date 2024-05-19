import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SalevaluePageRoutingModule } from './salevalue-routing.module';

import { SalevaluePage } from './salevalue.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SalevaluePageRoutingModule
  ],
  declarations: [SalevaluePage]
})
export class SalevaluePageModule {}
