import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstructorProfilePrivacyRoutingModule } from './instructor-profile-privacy-routing.module';
import { InstructorProfilePrivacyComponent } from './instructor-profile-privacy.component';
import { FeatherIconModule } from 'src/app/shared/module/feather.module';
import { SharedModule } from 'src/app/shared/module/shared.module';


@NgModule({
  declarations: [
    InstructorProfilePrivacyComponent
  ],
  imports: [
    CommonModule,
    InstructorProfilePrivacyRoutingModule,
    FeatherIconModule,
    SharedModule
  ]
})
export class InstructorProfilePrivacyModule { }
