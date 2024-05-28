import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsGridRoutingModule } from './students-grid-routing.module';
import { StudentsGridComponent } from './students-grid.component';
import { FeatherIconModule } from 'src/app/shared/module/feather.module';


@NgModule({
  declarations: [
    StudentsGridComponent
  ],
  imports: [
    CommonModule,
    StudentsGridRoutingModule,
    FeatherIconModule
  ]
})
export class StudentsGridModule { }
