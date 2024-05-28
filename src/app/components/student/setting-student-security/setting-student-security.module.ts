import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingStudentSecurityRoutingModule } from './setting-student-security-routing.module';
import { SettingStudentSecurityComponent } from './setting-student-security.component';
import { FormsModule } from '@angular/forms';
import { FeatherIconModule } from 'src/app/shared/module/feather.module';


@NgModule({
  declarations: [
    SettingStudentSecurityComponent
  ],
  imports: [
    CommonModule,
    SettingStudentSecurityRoutingModule,
    FormsModule,
    FeatherIconModule
  ]
})
export class SettingStudentSecurityModule { }
