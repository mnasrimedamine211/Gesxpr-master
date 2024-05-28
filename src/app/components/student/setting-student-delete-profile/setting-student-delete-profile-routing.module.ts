import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingStudentDeleteProfileComponent } from './setting-student-delete-profile.component';

const routes: Routes = [{ path: '', component: SettingStudentDeleteProfileComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingStudentDeleteProfileRoutingModule { }
