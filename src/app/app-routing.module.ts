import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'realestates/:id',
    loadChildren: () => import('./pages/realestates/realestate-detatils/realestate-detatils.module').then( m => m.RealestateDetatilsPageModule)
  },
  {
    path: 'realestates',
    loadChildren: () => import('./pages/realestates/realestates.module').then( m => m.RealestatesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
