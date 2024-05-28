import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingStudentInvoiceRoutingModule } from './setting-student-invoice-routing.module';
import { SettingStudentInvoiceComponent } from './setting-student-invoice.component';
import { FeatherIconModule } from 'src/app/shared/module/feather.module';


@NgModule({
  declarations: [
    SettingStudentInvoiceComponent
  ],
  imports: [
    CommonModule,
    SettingStudentInvoiceRoutingModule,
    FeatherIconModule
  ]
})
export class SettingStudentInvoiceModule { }
