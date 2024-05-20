import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeessalePage } from './feessale.page';

const routes: Routes = [
  {
    path: '',
    component: FeessalePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeessalePageRoutingModule {}
