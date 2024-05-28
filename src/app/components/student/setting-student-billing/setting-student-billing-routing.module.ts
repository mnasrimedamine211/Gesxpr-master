import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingStudentBillingComponent } from './setting-student-billing.component';

const routes: Routes = [{ path: '', component: SettingStudentBillingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingStudentBillingRoutingModule { }
