import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstructorOrdersRoutingModule } from './instructor-orders-routing.module';
import { InstructorOrdersComponent } from './instructor-orders.component';
import { FeatherIconModule } from 'src/app/shared/module/feather.module';


@NgModule({
  declarations: [
    InstructorOrdersComponent
  ],
  imports: [
    CommonModule,
    InstructorOrdersRoutingModule,
    FeatherIconModule
  ]
})
export class InstructorOrdersModule { }
