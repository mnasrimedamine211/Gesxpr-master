import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstructorEditProfileComponent } from './instructor-edit-profile.component';

const routes: Routes = [{ path: '', component: InstructorEditProfileComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstructorEditProfileRoutingModule { }
