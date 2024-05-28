import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingStudentPrivacyRoutingModule } from './setting-student-privacy-routing.module';
import { SettingStudentPrivacyComponent } from './setting-student-privacy.component';
import { FeatherIconModule } from 'src/app/shared/module/feather.module';
import { SharedModule } from 'src/app/shared/module/shared.module';


@NgModule({
  declarations: [
    SettingStudentPrivacyComponent
  ],
  imports: [
    CommonModule,
    SettingStudentPrivacyRoutingModule,
    FeatherIconModule,
    SharedModule
  ]
})
export class SettingStudentPrivacyModule { }
