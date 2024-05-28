import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingStudentPrivacyComponent } from './setting-student-privacy.component';

const routes: Routes = [{ path: '', component: SettingStudentPrivacyComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingStudentPrivacyRoutingModule { }
