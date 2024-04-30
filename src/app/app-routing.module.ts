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
    loadChildren: () => import('./@core/auth/login/login.module').then( m => m.LoginPageModule)
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
    loadChildren: () => import('./pages/todo/todo-list/todo-list.module').then( m => m.TodoListPageModule)
  },
  {
    path: 'todo-add',
    loadChildren: () => import('./pages/todo/todo-add/todo-add.module').then( m => m.TodoAddPageModule)
  },
  {
    path: 'todo-detail',
    loadChildren: () => import('./pages/todo/todo-detail/todo-detail.module').then( m => m.TodoDetailPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
