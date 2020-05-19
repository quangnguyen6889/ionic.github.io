import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabPage } from './tab.page';

const routes: Routes = [
  {
    path: 'tab',
    component: TabPage,
    children: [
      {
        path: 'home',
        loadChildren: '../home/home.module#HomePageModule'
      },
      {
        path: 'history',
        loadChildren: '../history/history.module#HistoryPageModule'
      }, {
        path: 'qr',
        loadChildren: '../qr/qr.module#QrPageModule'
      },
      {
        path: 'nofitication',
        loadChildren: '../nofitication/nofitication.module#NofiticationPageModule'
      },
      {
        path: 'account',
        loadChildren: '../account/account.module#AccountPageModule'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tab/history',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabPageRoutingModule { }
