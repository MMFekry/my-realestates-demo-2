import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalevaluePage } from './salevalue.page';

const routes: Routes = [
  {
    path: '',
    component: SalevaluePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalevaluePageRoutingModule {}
