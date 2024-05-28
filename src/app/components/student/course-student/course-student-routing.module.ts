import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseStudentComponent } from './course-student.component';

const routes: Routes = [{ path: '', component: CourseStudentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseStudentRoutingModule { }
