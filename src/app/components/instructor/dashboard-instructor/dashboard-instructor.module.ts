import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardInstructorRoutingModule } from './dashboard-instructor-routing.module';
import { DashboardInstructorComponent } from './dashboard-instructor.component';


@NgModule({
  declarations: [
    DashboardInstructorComponent
  ],
  imports: [
    CommonModule,
    DashboardInstructorRoutingModule
  ]
})
export class DashboardInstructorModule { }
