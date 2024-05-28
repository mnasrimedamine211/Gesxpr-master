import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstructorStudentGridRoutingModule } from './instructor-student-grid-routing.module';
import { InstructorStudentGridComponent } from './instructor-student-grid.component';
import { FeatherIconModule } from 'src/app/shared/module/feather.module';


@NgModule({
  declarations: [
    InstructorStudentGridComponent
  ],
  imports: [
    CommonModule,
    InstructorStudentGridRoutingModule,
    FeatherIconModule
  ]
})
export class InstructorStudentGridModule { }
