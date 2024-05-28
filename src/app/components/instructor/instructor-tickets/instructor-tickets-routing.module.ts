import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstructorTicketsComponent } from './instructor-tickets.component';

const routes: Routes = [{ path: '', component: InstructorTicketsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstructorTicketsRoutingModule { }
