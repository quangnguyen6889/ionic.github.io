import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllFunctionPageRoutingModule } from './all-function-routing.module';

import { AllFunctionPage } from './all-function.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllFunctionPageRoutingModule
  ],
  declarations: [AllFunctionPage]
})
export class AllFunctionPageModule {}
