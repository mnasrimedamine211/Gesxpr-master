import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstructorEditRoutingModule } from './instructor-edit-routing.module';
import { InstructorEditComponent } from './instructor-edit.component';
import { FeatherIconModule } from 'src/app/shared/module/feather.module';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    InstructorEditComponent
  ],
  imports: [
    CommonModule,
    InstructorEditRoutingModule,
    FeatherIconModule,
    RouterModule,
    MatIconModule
  ]
})
export class InstructorEditModule { }
