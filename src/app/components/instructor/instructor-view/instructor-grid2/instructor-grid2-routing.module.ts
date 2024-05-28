import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstructorGrid2Component } from './instructor-grid2.component';

const routes: Routes = [{ path: '', component: InstructorGrid2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstructorGrid2RoutingModule { }
