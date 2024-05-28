import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingStudentPaymentComponent } from './setting-student-payment.component';

const routes: Routes = [{ path: '', component: SettingStudentPaymentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingStudentPaymentRoutingModule { }
