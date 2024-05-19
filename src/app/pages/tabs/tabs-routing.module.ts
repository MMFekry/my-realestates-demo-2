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
      {
        path: 'eservicelv1',
        loadChildren: () => import('../eservicelv1/eservicelv1.module').then( m => m.Eservicelv1PageModule)
      },
      {
        path: 'second-servces',
        loadChildren: () => import('../second-servces/second-servces.module').then( m => m.SecondServcesPageModule)
      },
      {
        path: 'consensual-sale',
        loadChildren: () => import('../consensual-sale/consensual-sale.module').then( m => m.ConsensualSalePageModule)
      },
      {
        path: 'salevalue',
        loadChildren: () => import('../salevalue/salevalue.module').then( m => m.SalevaluePageModule)
      },
      {
        path: 'addparty',
        loadChildren: () => import('../addparty/addparty.module').then( m => m.AddpartyPageModule)
      },
      {
        path: 'realestatetypes',
        loadChildren: () => import('../realestatetypes/realestatetypes.module').then( m => m.RealestatetypesPageModule)
      },
      {
        path: 'addfavoriteunit',
        loadChildren: () => import('../addfavoriteunit/addfavoriteunit.module').then( m => m.AddfavoriteunitPageModule)
      },
      {
        path: 'reviewaddress',
        loadChildren: () => import('../reviewaddress/reviewaddress.module').then( m => m.ReviewaddressPageModule)
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
