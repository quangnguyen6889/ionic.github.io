import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NofiticationPageRoutingModule } from './nofitication-routing.module';

import { NofiticationPage } from './nofitication.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NofiticationPageRoutingModule
  ],
  declarations: [NofiticationPage]
})
export class NofiticationPageModule {}
