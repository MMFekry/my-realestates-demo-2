import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SecondServcesPage } from './second-servces.page';

const routes: Routes = [
  {
    path: '',
    component: SecondServcesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecondServcesPageRoutingModule {}
