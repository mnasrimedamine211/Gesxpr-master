import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingStudentAccountsRoutingModule } from './setting-student-accounts-routing.module';
import { SettingStudentAccountsComponent } from './setting-student-accounts.component';
import { FeatherIconModule } from 'src/app/shared/module/feather.module';


@NgModule({
  declarations: [
    SettingStudentAccountsComponent
  ],
  imports: [
    CommonModule,
    SettingStudentAccountsRoutingModule,
    FeatherIconModule
  ]
})
export class SettingStudentAccountsModule { }
