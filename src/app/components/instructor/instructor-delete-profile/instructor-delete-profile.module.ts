import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstructorDeleteProfileRoutingModule } from './instructor-delete-profile-routing.module';
import { InstructorDeleteProfileComponent } from './instructor-delete-profile.component';
import { FeatherIconModule } from 'src/app/shared/module/feather.module';


@NgModule({
  declarations: [
    InstructorDeleteProfileComponent
  ],
  imports: [
    CommonModule,
    InstructorDeleteProfileRoutingModule,
    FeatherIconModule
  ]
})
export class InstructorDeleteProfileModule { }
