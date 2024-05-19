import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RealestatetypesPage } from './realestatetypes.page';

const routes: Routes = [
  {
    path: '',
    component: RealestatetypesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RealestatetypesPageRoutingModule {}
