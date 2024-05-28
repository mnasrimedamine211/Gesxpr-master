import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstructorLinkedAccountRoutingModule } from './instructor-linked-account-routing.module';
import { InstructorLinkedAccountComponent } from './instructor-linked-account.component';
import { FeatherIconModule } from 'src/app/shared/module/feather.module';


@NgModule({
  declarations: [
    InstructorLinkedAccountComponent
  ],
  imports: [
    CommonModule,
    InstructorLinkedAccountRoutingModule,
    FeatherIconModule
  ]
})
export class InstructorLinkedAccountModule { }
