import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BoPageRoutingModule } from './bo-routing.module';

import { BoPage } from './bo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BoPageRoutingModule
  ],
  declarations: [BoPage]
})
export class BoPageModule {}
