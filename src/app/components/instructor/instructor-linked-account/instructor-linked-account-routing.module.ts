import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstructorLinkedAccountComponent } from './instructor-linked-account.component';

const routes: Routes = [{ path: '', component: InstructorLinkedAccountComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstructorLinkedAccountRoutingModule { }
