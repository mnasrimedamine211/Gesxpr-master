import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsGrid2Component } from './students-grid2.component';

const routes: Routes = [{ path: '', component: StudentsGrid2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsGrid2RoutingModule { }
