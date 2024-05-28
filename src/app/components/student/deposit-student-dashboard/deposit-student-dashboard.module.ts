import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepositStudentDashboardRoutingModule } from './deposit-student-dashboard-routing.module';
import { DepositStudentDashboardComponent } from './deposit-student-dashboard.component';


@NgModule({
  declarations: [
    DepositStudentDashboardComponent
  ],
  imports: [
    CommonModule,
    DepositStudentDashboardRoutingModule
  ]
})
export class DepositStudentDashboardModule { }
