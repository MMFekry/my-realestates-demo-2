import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddfavoriteunitPage } from './addfavoriteunit.page';

const routes: Routes = [
  {
    path: '',
    component: AddfavoriteunitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddfavoriteunitPageRoutingModule {}
