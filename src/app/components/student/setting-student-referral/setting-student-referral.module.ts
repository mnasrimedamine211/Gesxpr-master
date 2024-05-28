import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingStudentReferralRoutingModule } from './setting-student-referral-routing.module';
import { SettingStudentReferralComponent } from './setting-student-referral.component';
import { FeatherIconModule } from 'src/app/shared/module/feather.module';
import { SharedModule } from 'src/app/shared/module/shared.module';


@NgModule({
  declarations: [
    SettingStudentReferralComponent
  ],
  imports: [
    CommonModule,
    SettingStudentReferralRoutingModule,
    FeatherIconModule,
    SharedModule
  ]
})
export class SettingStudentReferralModule { }
