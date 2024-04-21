import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RealestateDetatilsPage } from './realestate-detatils.page';

const routes: Routes = [
  {
    path: '',
    component: RealestateDetatilsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RealestateDetatilsPageRoutingModule {}
