import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'bo', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutPageModule) },
  { path: 'detail', loadChildren: () => import('./detail/detail.module').then(m => m.DetailPageModule) },
  // {
  //   path: 'con',
  //   loadChildren: () => import('con/con.module').then(m => m.ConPageModule)
  // },
  {
    path: 'bo',
    loadChildren: () => import('./bo/bo.module').then(m => m.BoPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
