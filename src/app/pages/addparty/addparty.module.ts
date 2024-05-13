import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddpartyPageRoutingModule } from './addparty-routing.module';

import { AddpartyPage } from './addparty.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddpartyPageRoutingModule
  ],
  declarations: [AddpartyPage]
})
export class AddpartyPageModule {}
