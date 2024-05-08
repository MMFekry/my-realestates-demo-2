import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Eservicelv1PageRoutingModule } from './eservicelv1-routing.module';

import { Eservicelv1Page } from './eservicelv1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Eservicelv1PageRoutingModule
  ],
  declarations: [Eservicelv1Page]
})
export class Eservicelv1PageModule {}
