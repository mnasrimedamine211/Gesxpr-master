import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstructorProfileRoutingModule } from './instructor-profile-routing.module';
import { InstructorProfileComponent } from './instructor-profile.component';
import { FeatherIconModule } from 'src/app/shared/module/feather.module';


@NgModule({
  declarations: [
    InstructorProfileComponent
  ],
  imports: [
    CommonModule,
    InstructorProfileRoutingModule,
    FeatherIconModule
  ]
})
export class InstructorProfileModule { }
