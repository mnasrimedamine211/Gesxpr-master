import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuijesuisComponent } from './quijesuis/quijesuis.component';

const routes: Routes = [{path:"" , component:QuijesuisComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuijesuisRoutingModule { }
