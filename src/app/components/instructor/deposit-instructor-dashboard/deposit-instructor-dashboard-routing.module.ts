import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepositInstructorDashboardComponent } from './deposit-instructor-dashboard.component';

const routes: Routes = [{ path: '', component: DepositInstructorDashboardComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepositInstructorDashboardRoutingModule { }
