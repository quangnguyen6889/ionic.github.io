import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { IntroducePage } from './introduce.page';

import { IntroducePageRoutingModule } from './introduce-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntroducePageRoutingModule
  ],
  declarations: [IntroducePage]
})
export class IntroducePageModule { }
