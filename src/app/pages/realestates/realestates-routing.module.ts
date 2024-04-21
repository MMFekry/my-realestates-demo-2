import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RealestatesPage } from './realestates.page';

const routes: Routes = [
  {
    path: '',
    component: RealestatesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RealestatesPageRoutingModule {}
