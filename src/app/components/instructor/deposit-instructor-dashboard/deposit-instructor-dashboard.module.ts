import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepositInstructorDashboardRoutingModule } from './deposit-instructor-dashboard-routing.module';
import { DepositInstructorDashboardComponent } from './deposit-instructor-dashboard.component';


@NgModule({
  declarations: [
    DepositInstructorDashboardComponent
  ],
  imports: [
    CommonModule,
    DepositInstructorDashboardRoutingModule
  ]
})
export class DepositInstructorDashboardModule { }
