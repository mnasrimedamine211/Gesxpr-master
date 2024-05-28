import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstructorProfileComponent } from './instructor-profile.component';

const routes: Routes = [{ path: '', component: InstructorProfileComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstructorProfileRoutingModule { }
