import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingStudentSubscriptionComponent } from './setting-student-subscription.component';

const routes: Routes = [{ path: '', component: SettingStudentSubscriptionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingStudentSubscriptionRoutingModule { }
