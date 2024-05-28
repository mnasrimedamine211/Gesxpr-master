import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingStudentSecurityComponent } from './setting-student-security.component';

const routes: Routes = [{ path: '', component: SettingStudentSecurityComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingStudentSecurityRoutingModule { }
