import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionsStudentComponent } from './transactions-student.component';

const routes: Routes = [{ path: '', component: TransactionsStudentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionsStudentRoutingModule { }
