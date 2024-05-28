import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstructorStudentGridComponent } from './instructor-student-grid.component';

const routes: Routes = [{ path: '', component: InstructorStudentGridComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstructorStudentGridRoutingModule { }
