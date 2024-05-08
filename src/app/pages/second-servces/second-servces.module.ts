import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SecondServcesPageRoutingModule } from './second-servces-routing.module';

import { SecondServcesPage } from './second-servces.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SecondServcesPageRoutingModule
  ],
  declarations: [SecondServcesPage]
})
export class SecondServcesPageModule {}
