import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstructorEarningsComponent } from './instructor-earnings.component';

const routes: Routes = [{ path: '', component: InstructorEarningsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstructorEarningsRoutingModule { }
