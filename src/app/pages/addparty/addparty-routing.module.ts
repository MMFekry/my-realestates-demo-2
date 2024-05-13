import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddpartyPage } from './addparty.page';

const routes: Routes = [
  {
    path: '',
    component: AddpartyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddpartyPageRoutingModule {}
