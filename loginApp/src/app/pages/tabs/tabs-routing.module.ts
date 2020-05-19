import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInPage } from './../log-in/log-in.page';
import { LogInPageModule } from './../log-in/log-in.module';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: '../home/home.module#HomePageModule'
      },
      {
        path: 'log-in',
        loadChildren: '../log-in/log-in.module#LogInPageModule'
        // component: LogInPageModule,
      }, {
        path: 'sign-up',
        loadChildren: '../sign-up/sign-up.module#SignUpPageModule'
      },
      {
        path: 'about',
        loadChildren: '../about/about.module#AboutPageModule'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule],
})
export class TabsPageRoutingModule { }
