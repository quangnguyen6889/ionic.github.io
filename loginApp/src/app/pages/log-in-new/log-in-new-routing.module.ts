import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogInNewPage } from './log-in-new.page';

const routes: Routes = [
  {
    path: '',
    component: LogInNewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogInNewPageRoutingModule {}
