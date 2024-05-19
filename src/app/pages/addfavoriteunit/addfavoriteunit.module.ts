import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddfavoriteunitPageRoutingModule } from './addfavoriteunit-routing.module';

import { AddfavoriteunitPage } from './addfavoriteunit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddfavoriteunitPageRoutingModule
  ],
  declarations: [AddfavoriteunitPage]
})
export class AddfavoriteunitPageModule {}
