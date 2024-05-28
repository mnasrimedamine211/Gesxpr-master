import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstructorCourseRoutingModule } from './instructor-course-routing.module';
import { InstructorCourseComponent } from './instructor-course.component';
import { FeatherIconModule } from 'src/app/shared/module/feather.module';
import { SharedModule } from 'src/app/shared/module/shared.module';



@NgModule({
  declarations: [
    InstructorCourseComponent
  ],
  imports: [
    CommonModule,
    InstructorCourseRoutingModule,
    FeatherIconModule,
    SharedModule
  ],
})
export class InstructorCourseModule { }
