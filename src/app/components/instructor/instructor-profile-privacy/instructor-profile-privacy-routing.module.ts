import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstructorProfilePrivacyComponent } from './instructor-profile-privacy.component';

const routes: Routes = [{ path: '', component: InstructorProfilePrivacyComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstructorProfilePrivacyRoutingModule { }
