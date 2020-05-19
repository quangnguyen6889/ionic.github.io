import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'introduce',
    pathMatch: 'full'
  },
  {
    path: 'introduce',
    loadChildren: () => import('./pages/introduce/introduce.module').then(m => m.IntroducePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'tab',
    loadChildren: () => import('./pages/tab/tab.module').then(m => m.TabPageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./pages/account/account.module').then(m => m.AccountPageModule)
  },
  {
    path: 'all-function',
    loadChildren: () => import('./pages/all-function/all-function.module').then(m => m.AllFunctionPageModule)
  },
  {
    path: 'all-news',
    loadChildren: () => import('./pages/all-news/all-news.module').then( m => m.AllNewsPageModule)
  },
  {
    path: 'news-detail',
    loadChildren: () => import('./pages/news-detail/news-detail.module').then( m => m.NewsDetailPageModule)
  },
  {
    path: 'history',
    loadChildren: () => import('./pages/history/history.module').then( m => m.HistoryPageModule)
  },
  {
    path: 'qr',
    loadChildren: () => import('./pages/qr/qr.module').then( m => m.QrPageModule)
  },
  {
    path: 'nofitication',
    loadChildren: () => import('./pages/nofitication/nofitication.module').then( m => m.NofiticationPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
