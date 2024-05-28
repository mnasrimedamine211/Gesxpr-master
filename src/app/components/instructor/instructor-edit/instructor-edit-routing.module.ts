import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstructorEditComponent } from './instructor-edit.component';

const routes: Routes = [{ path: '', component: InstructorEditComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstructorEditRoutingModule { }
