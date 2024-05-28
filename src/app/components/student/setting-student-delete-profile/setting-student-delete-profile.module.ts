import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingStudentDeleteProfileRoutingModule } from './setting-student-delete-profile-routing.module';
import { SettingStudentDeleteProfileComponent } from './setting-student-delete-profile.component';
import { FeatherIconModule } from 'src/app/shared/module/feather.module';


@NgModule({
  declarations: [
    SettingStudentDeleteProfileComponent
  ],
  imports: [
    CommonModule,
    SettingStudentDeleteProfileRoutingModule,
    FeatherIconModule
  ]
})
export class SettingStudentDeleteProfileModule { }
