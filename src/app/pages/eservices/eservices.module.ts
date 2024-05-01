import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EservicesPageRoutingModule } from './eservices-routing.module';

import { EservicesPage } from './eservices.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EservicesPageRoutingModule
  ],
  declarations: [EservicesPage]
})
export class EservicesPageModule {}
