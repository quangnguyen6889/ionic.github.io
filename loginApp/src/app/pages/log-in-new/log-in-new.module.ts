import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogInNewPageRoutingModule } from './log-in-new-routing.module';

import { LogInNewPage } from './log-in-new.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogInNewPageRoutingModule,
    TranslateModule
  ],
  declarations: [LogInNewPage]
})
export class LogInNewPageModule { }
