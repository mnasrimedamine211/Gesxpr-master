import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WithdrawalInstructorRoutingModule } from './withdrawal-instructor-routing.module';
import { WithdrawalInstructorComponent } from './withdrawal-instructor.component';
import { FeatherIconModule } from 'src/app/shared/module/feather.module';


@NgModule({
  declarations: [
    WithdrawalInstructorComponent
  ],
  imports: [
    CommonModule,
    WithdrawalInstructorRoutingModule,
    FeatherIconModule
  ]
})
export class WithdrawalInstructorModule { }
