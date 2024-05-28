import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionsStudentRoutingModule } from './transactions-student-routing.module';
import { TransactionsStudentComponent } from './transactions-student.component';


@NgModule({
  declarations: [
    TransactionsStudentComponent
  ],
  imports: [
    CommonModule,
    TransactionsStudentRoutingModule
  ]
})
export class TransactionsStudentModule { }
