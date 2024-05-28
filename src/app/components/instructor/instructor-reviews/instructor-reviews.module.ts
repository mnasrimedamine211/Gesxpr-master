import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstructorReviewsRoutingModule } from './instructor-reviews-routing.module';
import { InstructorReviewsComponent } from './instructor-reviews.component';
import { SharedModule } from 'src/app/shared/module/shared.module';
import { FeatherIconModule } from 'src/app/shared/module/feather.module';

@NgModule({
  declarations: [
    InstructorReviewsComponent
  ],
  imports: [
    CommonModule,
    InstructorReviewsRoutingModule,
    SharedModule,
    FeatherIconModule
  ]
})
export class InstructorReviewsModule { }
