import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstructorGrid2RoutingModule } from './instructor-grid2-routing.module';
import { InstructorGrid2Component } from './instructor-grid2.component';
import { FeatherIconModule } from 'src/app/shared/module/feather.module';


@NgModule({
  declarations: [
    InstructorGrid2Component
  ],
  imports: [
    CommonModule,
    InstructorGrid2RoutingModule,
    FeatherIconModule
  ]
})
export class InstructorGrid2Module { }
