import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LogInPageRoutingModule } from './log-in-routing.module';
import { LogInPage } from './log-in.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogInPageRoutingModule,
    TranslateModule
  ],
  declarations: [LogInPage]
})
export class LogInPageModule { }
