import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingStudentNotificationRoutingModule } from './setting-student-notification-routing.module';
import { SettingStudentNotificationComponent } from './setting-student-notification.component';
import { FeatherIconModule } from 'src/app/shared/module/feather.module';


@NgModule({
  declarations: [
    SettingStudentNotificationComponent
  ],
  imports: [
    CommonModule,
    SettingStudentNotificationRoutingModule,
    FeatherIconModule
  ]
})
export class SettingStudentNotificationModule { }
