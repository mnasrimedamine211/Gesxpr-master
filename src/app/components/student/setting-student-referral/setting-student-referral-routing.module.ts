import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingStudentReferralComponent } from './setting-student-referral.component';

const routes: Routes = [{ path: '', component: SettingStudentReferralComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingStudentReferralRoutingModule { }
