import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingStudentBillingRoutingModule } from './setting-student-billing-routing.module';
import { SettingStudentBillingComponent } from './setting-student-billing.component';
import { FeatherIconModule } from 'src/app/shared/module/feather.module';


@NgModule({
  declarations: [
    SettingStudentBillingComponent
  ],
  imports: [
    CommonModule,
    SettingStudentBillingRoutingModule,
    FeatherIconModule
  ]
})
export class SettingStudentBillingModule { }
