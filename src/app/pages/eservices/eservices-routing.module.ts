import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EservicesPage } from './eservices.page';

const routes: Routes = [
  {
    path: '',
    component: EservicesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EservicesPageRoutingModule {}
