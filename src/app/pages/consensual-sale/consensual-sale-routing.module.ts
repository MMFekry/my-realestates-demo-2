import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsensualSalePage } from './consensual-sale.page';

const routes: Routes = [
  {
    path: '',
    component: ConsensualSalePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsensualSalePageRoutingModule {}
