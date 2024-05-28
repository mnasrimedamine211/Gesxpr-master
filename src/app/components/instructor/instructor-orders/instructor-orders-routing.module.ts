import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstructorOrdersComponent } from './instructor-orders.component';

const routes: Routes = [{ path: '', component: InstructorOrdersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstructorOrdersRoutingModule { }
