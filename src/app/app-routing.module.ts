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
  {
    path: 'todo-list',
    loadChildren: () => import('./pages/todo-list/todo-list.module').then( m => m.TodoListPageModule)
  },
  {
    path: 'todo-add',
    loadChildren: () => import('./pages/todo-add/todo-add.module').then( m => m.TodoAddPageModule)
  },
  {
    path: 'todo-detail',
    loadChildren: () => import('./pages/todo-detail/todo-detail.module').then( m => m.TodoDetailPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
