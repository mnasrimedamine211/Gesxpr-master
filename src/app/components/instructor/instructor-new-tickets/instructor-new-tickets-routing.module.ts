import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstructorNewTicketsComponent } from './instructor-new-tickets.component';

const routes: Routes = [{ path: '', component: InstructorNewTicketsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstructorNewTicketsRoutingModule { }
