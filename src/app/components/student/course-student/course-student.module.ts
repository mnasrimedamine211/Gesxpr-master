import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseStudentRoutingModule } from './course-student-routing.module';
import { CourseStudentComponent } from './course-student.component';
import { FeatherIconModule } from 'src/app/shared/module/feather.module';


@NgModule({
  declarations: [
    CourseStudentComponent
  ],
  imports: [
    CommonModule,
    CourseStudentRoutingModule,
    FeatherIconModule
  ]
})
export class CourseStudentModule { }
