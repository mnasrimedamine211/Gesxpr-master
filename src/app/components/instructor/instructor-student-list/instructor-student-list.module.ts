import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstructorStudentListRoutingModule } from './instructor-student-list-routing.module';
import { InstructorStudentListComponent } from './instructor-student-list.component';
import { FeatherIconModule } from 'src/app/shared/module/feather.module';


@NgModule({
  declarations: [
    InstructorStudentListComponent
  ],
  imports: [
    CommonModule,
    InstructorStudentListRoutingModule,
    FeatherIconModule
  ]
})
export class InstructorStudentListModule { }
