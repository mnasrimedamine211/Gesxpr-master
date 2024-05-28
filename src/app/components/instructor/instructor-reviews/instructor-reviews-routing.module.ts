import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstructorReviewsComponent } from './instructor-reviews.component';

const routes: Routes = [{ path: '', component: InstructorReviewsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstructorReviewsRoutingModule { }
