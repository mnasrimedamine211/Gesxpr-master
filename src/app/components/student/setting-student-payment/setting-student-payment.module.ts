import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingStudentPaymentRoutingModule } from './setting-student-payment-routing.module';
import { SettingStudentPaymentComponent } from './setting-student-payment.component';
import { FeatherIconModule } from 'src/app/shared/module/feather.module';


@NgModule({
  declarations: [
    SettingStudentPaymentComponent
  ],
  imports: [
    CommonModule,
    SettingStudentPaymentRoutingModule,
    FeatherIconModule
  ]
})
export class SettingStudentPaymentModule { }
