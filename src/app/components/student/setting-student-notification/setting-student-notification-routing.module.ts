import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingStudentNotificationComponent } from './setting-student-notification.component';

const routes: Routes = [{ path: '', component: SettingStudentNotificationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingStudentNotificationRoutingModule { }
