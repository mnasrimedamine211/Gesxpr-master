import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentViewRoutingModule } from './student-view-routing.module';
import { StudentViewComponent } from './student-view.component';


@NgModule({
  declarations: [
    StudentViewComponent
  ],
  imports: [
    CommonModule,
    StudentViewRoutingModule
  ]
})
export class StudentViewModule { }
