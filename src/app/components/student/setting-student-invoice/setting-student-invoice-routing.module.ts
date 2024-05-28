import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingStudentInvoiceComponent } from './setting-student-invoice.component';

const routes: Routes = [{ path: '', component: SettingStudentInvoiceComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingStudentInvoiceRoutingModule {}
 