import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstructorTicketsRoutingModule } from './instructor-tickets-routing.module';
import { InstructorTicketsComponent } from './instructor-tickets.component';
import { FeatherIconModule } from 'src/app/shared/module/feather.module';


@NgModule({
  declarations: [
    InstructorTicketsComponent
  ],
  imports: [
    CommonModule,
    InstructorTicketsRoutingModule,
    FeatherIconModule
  ]
})
export class InstructorTicketsModule { }
