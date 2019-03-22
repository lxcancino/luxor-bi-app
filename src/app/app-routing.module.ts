import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  {
    path: 'recipies',
    loadChildren: './recipies/recipies.module#RecipiesPageModule'
  },
  {
    path: 'users',
    children: [
      { path: '', loadChildren: './users/users.module#UsersPageModule' },
      {
        path: ':userId',
        loadChildren:
          './users/user-detail/user-detail.module#UserDetailPageModule'
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
