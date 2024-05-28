import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepositInstructorComponent } from './deposit-instructor.component';

const routes: Routes = [{ path: '', component: DepositInstructorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepositInstructorRoutingModule { }
