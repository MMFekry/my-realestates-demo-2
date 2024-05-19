import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReviewaddressPageRoutingModule } from './reviewaddress-routing.module';

import { ReviewaddressPage } from './reviewaddress.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReviewaddressPageRoutingModule
  ],
  declarations: [ReviewaddressPage]
})
export class ReviewaddressPageModule {}
