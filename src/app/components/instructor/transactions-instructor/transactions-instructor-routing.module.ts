import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionsInstructorComponent } from './transactions-instructor.component';

const routes: Routes = [{ path: '', component: TransactionsInstructorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionsInstructorRoutingModule { }
