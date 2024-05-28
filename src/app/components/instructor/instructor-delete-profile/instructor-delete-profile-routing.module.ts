import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstructorDeleteProfileComponent } from './instructor-delete-profile.component';

const routes: Routes = [{ path: '', component: InstructorDeleteProfileComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstructorDeleteProfileRoutingModule { }
