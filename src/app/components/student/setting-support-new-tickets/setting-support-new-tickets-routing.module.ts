import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingSupportNewTicketsComponent } from './setting-support-new-tickets.component';

const routes: Routes = [{ path: '', component: SettingSupportNewTicketsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingSupportNewTicketsRoutingModule { }
