import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Eservicelv1Page } from './eservicelv1.page';

const routes: Routes = [
  {
    path: '',
    component: Eservicelv1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Eservicelv1PageRoutingModule {}
