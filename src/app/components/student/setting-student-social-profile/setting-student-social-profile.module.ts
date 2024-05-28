import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingStudentSocialProfileRoutingModule } from './setting-student-social-profile-routing.module';
import { SettingStudentSocialProfileComponent } from './setting-student-social-profile.component';
import { FeatherIconModule } from 'src/app/shared/module/feather.module';


@NgModule({
  declarations: [
    SettingStudentSocialProfileComponent
  ],
  imports: [
    CommonModule,
    SettingStudentSocialProfileRoutingModule,
    FeatherIconModule
  ]
})
export class SettingStudentSocialProfileModule { }
