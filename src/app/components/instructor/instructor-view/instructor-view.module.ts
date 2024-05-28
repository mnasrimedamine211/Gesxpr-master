import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstructorViewRoutingModule } from './instructor-view-routing.module';
import { InstructorViewComponent } from './instructor-view.component';


@NgModule({
  declarations: [
    InstructorViewComponent
  ],
  imports: [
    CommonModule,
    InstructorViewRoutingModule
  ]
})
export class InstructorViewModule { }
