import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'pages',
    component: TabsPage,
    children : [
      {
        path: 'eservices',
        loadChildren: () => import('../eservices/eservices.module').then( m => m.EservicesPageModule)
      },
      {
        path: 'notifications',
        loadChildren: () => import('../notifications/notifications.module').then( m => m.NotificationsPageModule)
      },
      {
        path: 'myorders',
        loadChildren: () => import('../myorders/myorders.module').then( m => m.MyordersPageModule)
      },
      {
        path: 'myaccount',
        loadChildren: () => import('../myaccount/myaccount.module').then( m => m.MyaccountPageModule)
      },
    ]
  },
  {
    path: '',
    redirectTo : 'pages/eservices',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
