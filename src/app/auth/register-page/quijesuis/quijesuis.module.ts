import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuijesuisRoutingModule } from './quijesuis-routing.module';
import { QuijesuisComponent } from './quijesuis/quijesuis.component';


@NgModule({
  declarations: [
    QuijesuisComponent
  ],
  imports: [
    CommonModule,
    QuijesuisRoutingModule
  ]
})
export class QuijesuisModule { }
