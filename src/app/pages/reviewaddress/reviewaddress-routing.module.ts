import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReviewaddressPage } from './reviewaddress.page';

const routes: Routes = [
  {
    path: '',
    component: ReviewaddressPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReviewaddressPageRoutingModule {}
