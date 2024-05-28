import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsGrid2RoutingModule } from './students-grid2-routing.module';
import { StudentsGrid2Component } from './students-grid2.component';
import { FeatherIconModule } from 'src/app/shared/module/feather.module';


@NgModule({
  declarations: [
    StudentsGrid2Component
  ],
  imports: [
    CommonModule,
    StudentsGrid2RoutingModule,
    FeatherIconModule
  ]
})
export class StudentsGrid2Module { }
