import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingSupportTicketsComponent } from './setting-support-tickets.component';

const routes: Routes = [{ path: '', component: SettingSupportTicketsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingSupportTicketsRoutingModule { }
