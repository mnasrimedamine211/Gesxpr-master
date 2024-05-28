import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingStudentSocialProfileComponent } from './setting-student-social-profile.component';

const routes: Routes = [{ path: '', component: SettingStudentSocialProfileComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingStudentSocialProfileRoutingModule { }
