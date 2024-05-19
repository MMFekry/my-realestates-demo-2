import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RealestatetypesPageRoutingModule } from './realestatetypes-routing.module';

import { RealestatetypesPage } from './realestatetypes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RealestatetypesPageRoutingModule
  ],
  declarations: [RealestatetypesPage]
})
export class RealestatetypesPageModule {}
