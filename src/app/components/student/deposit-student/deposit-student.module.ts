import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepositStudentRoutingModule } from './deposit-student-routing.module';
import { DepositStudentComponent } from './deposit-student.component';
import { FeatherIconModule } from 'src/app/shared/module/feather.module';


@NgModule({
  declarations: [
    DepositStudentComponent
  ],
  imports: [
    CommonModule,
    DepositStudentRoutingModule,
    FeatherIconModule
  ]
})
export class DepositStudentModule { }
