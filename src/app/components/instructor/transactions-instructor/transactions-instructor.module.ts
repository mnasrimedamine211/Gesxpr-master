import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionsInstructorRoutingModule } from './transactions-instructor-routing.module';
import { TransactionsInstructorComponent } from './transactions-instructor.component';


@NgModule({
  declarations: [
    TransactionsInstructorComponent
  ],
  imports: [
    CommonModule,
    TransactionsInstructorRoutingModule
  ]
})
export class TransactionsInstructorModule { }
