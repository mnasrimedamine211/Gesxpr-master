import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepositInstructorRoutingModule } from './deposit-instructor-routing.module';
import { DepositInstructorComponent } from './deposit-instructor.component';
import { FeatherIconModule } from 'src/app/shared/module/feather.module';


@NgModule({
  declarations: [
    DepositInstructorComponent
  ],
  imports: [
    CommonModule,
    DepositInstructorRoutingModule,
    FeatherIconModule
  ],
})
export class DepositInstructorModule { }
