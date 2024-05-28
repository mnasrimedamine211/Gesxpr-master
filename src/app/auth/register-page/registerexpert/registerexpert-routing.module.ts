import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterexpertComponent } from './registerexpert/registerexpert.component';

const routes: Routes = [{ path: '', component: RegisterexpertComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterexpertRoutingModule { }
