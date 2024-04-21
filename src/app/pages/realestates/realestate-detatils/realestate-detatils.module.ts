import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RealestateDetatilsPageRoutingModule } from './realestate-detatils-routing.module';

import { RealestateDetatilsPage } from './realestate-detatils.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RealestateDetatilsPageRoutingModule
  ],
  declarations: [RealestateDetatilsPage]
})
export class RealestateDetatilsPageModule {}
