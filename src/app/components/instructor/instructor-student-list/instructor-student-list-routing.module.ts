import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstructorStudentListComponent } from './instructor-student-list.component';

const routes: Routes = [{ path: '', component: InstructorStudentListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstructorStudentListRoutingModule { }
