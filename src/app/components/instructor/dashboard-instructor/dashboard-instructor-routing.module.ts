import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardInstructorComponent } from './dashboard-instructor.component';

const routes: Routes = [{ path: '', component: DashboardInstructorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardInstructorRoutingModule { }
