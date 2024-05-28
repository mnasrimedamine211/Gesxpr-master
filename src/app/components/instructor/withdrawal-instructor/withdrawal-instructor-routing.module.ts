import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WithdrawalInstructorComponent } from './withdrawal-instructor.component';

const routes: Routes = [{ path: '', component: WithdrawalInstructorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WithdrawalInstructorRoutingModule { }
