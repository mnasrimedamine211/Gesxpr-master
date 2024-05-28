import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstructorSocialProfilesRoutingModule } from './instructor-social-profiles-routing.module';
import { InstructorSocialProfilesComponent } from './instructor-social-profiles.component';
import { FeatherIconModule } from 'src/app/shared/module/feather.module';


@NgModule({
  declarations: [
    InstructorSocialProfilesComponent
  ],
  imports: [
    CommonModule,
    InstructorSocialProfilesRoutingModule,
    FeatherIconModule
  ]
})
export class InstructorSocialProfilesModule { }
