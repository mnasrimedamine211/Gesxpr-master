import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstructorEarningsRoutingModule } from './instructor-earnings-routing.module';
import { InstructorEarningsComponent } from './instructor-earnings.component';

import { FeatherIconModule } from 'src/app/shared/module/feather.module';
import { SharedModule } from 'src/app/shared/module/shared.module';

@NgModule({
  declarations: [
    InstructorEarningsComponent
  ],
  imports: [
    CommonModule,
    InstructorEarningsRoutingModule,
    FeatherIconModule,
    SharedModule
  ]
})
export class InstructorEarningsModule { }
