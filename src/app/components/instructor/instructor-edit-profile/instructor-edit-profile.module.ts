import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstructorEditProfileRoutingModule } from './instructor-edit-profile-routing.module';
import { InstructorEditProfileComponent } from './instructor-edit-profile.component';
import { FeatherIconModule } from 'src/app/shared/module/feather.module';
import { SharedModule } from 'src/app/shared/module/shared.module';


@NgModule({
  declarations: [
    InstructorEditProfileComponent
  ],
  imports: [
    CommonModule,
    InstructorEditProfileRoutingModule,
    FeatherIconModule,
    SharedModule
  ]
})
export class InstructorEditProfileModule { }
