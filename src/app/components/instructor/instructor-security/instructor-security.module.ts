import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstructorSecurityRoutingModule } from './instructor-security-routing.module';
import { InstructorSecurityComponent } from './instructor-security.component';
import { FeatherIconModule } from 'src/app/shared/module/feather.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    InstructorSecurityComponent
  ],
  imports: [
    CommonModule,
    InstructorSecurityRoutingModule,
    FeatherIconModule,
    FormsModule
  ]
})
export class InstructorSecurityModule { }
