import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstructorNotificationRoutingModule } from './instructor-notification-routing.module';
import { InstructorNotificationComponent } from './instructor-notification.component';
import { FeatherIconModule } from 'src/app/shared/module/feather.module';


@NgModule({
  declarations: [
    InstructorNotificationComponent
  ],
  imports: [
    CommonModule,
    InstructorNotificationRoutingModule,
    FeatherIconModule
  ]
})
export class InstructorNotificationModule { }
