import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllFunctionPage } from './all-function.page';

const routes: Routes = [
  {
    path: '',
    component: AllFunctionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllFunctionPageRoutingModule {}
