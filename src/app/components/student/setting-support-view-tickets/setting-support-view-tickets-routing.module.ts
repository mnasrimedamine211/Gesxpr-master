import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingSupportViewTicketsComponent } from './setting-support-view-tickets.component';

const routes: Routes = [{ path: '', component: SettingSupportViewTicketsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingSupportViewTicketsRoutingModule { }
