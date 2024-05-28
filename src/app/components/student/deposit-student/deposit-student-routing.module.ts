import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepositStudentComponent } from './deposit-student.component';

const routes: Routes = [{ path: '', component: DepositStudentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepositStudentRoutingModule { }
