import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoPage } from './bo.page';

const routes: Routes = [
  {
    path: '',
    component: BoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoPageRoutingModule {}
