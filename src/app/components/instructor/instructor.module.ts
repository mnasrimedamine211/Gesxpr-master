import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstructorRoutingModule } from './instructor-routing.module';
import { InstructorComponent } from './instructor.component';
import { FeatherIconModule } from 'src/app/shared/module/feather.module';
import { SharedModule } from 'src/app/shared/module/shared.module';


@NgModule({
  declarations: [
    InstructorComponent
  ],
  imports: [
    CommonModule,
    InstructorRoutingModule,
    FeatherIconModule,
    SharedModule
  ]
})
export class InstructorModule { }
