import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstructorCourseComponent } from './instructor-course.component';

const routes: Routes = [{ path: '', component: InstructorCourseComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstructorCourseRoutingModule { }
