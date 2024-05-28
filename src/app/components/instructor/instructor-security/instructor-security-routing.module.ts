import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstructorSecurityComponent } from './instructor-security.component';

const routes: Routes = [{ path: '', component: InstructorSecurityComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstructorSecurityRoutingModule { }
