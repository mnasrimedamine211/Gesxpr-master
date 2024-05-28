import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingStudentAccountsComponent } from './setting-student-accounts.component';

const routes: Routes = [{ path: '', component: SettingStudentAccountsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingStudentAccountsRoutingModule { }
