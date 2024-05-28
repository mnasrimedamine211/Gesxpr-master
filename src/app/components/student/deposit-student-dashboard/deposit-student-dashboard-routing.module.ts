import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepositStudentDashboardComponent } from './deposit-student-dashboard.component';

const routes: Routes = [{ path: '', component: DepositStudentDashboardComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepositStudentDashboardRoutingModule { }
