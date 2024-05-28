import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingStudentSubscriptionRoutingModule } from './setting-student-subscription-routing.module';
import { SettingStudentSubscriptionComponent } from './setting-student-subscription.component';
import { FeatherIconModule } from 'src/app/shared/module/feather.module';


@NgModule({
  declarations: [
    SettingStudentSubscriptionComponent
  ],
  imports: [
    CommonModule,
    SettingStudentSubscriptionRoutingModule,
    FeatherIconModule
  ]
})
export class SettingStudentSubscriptionModule { }
