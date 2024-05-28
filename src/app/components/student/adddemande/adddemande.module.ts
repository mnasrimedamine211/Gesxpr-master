import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdddemandeRoutingModule } from './adddemande-routing.module';
import { DemandeComponent } from './demande/demande.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    DemandeComponent
  ],
  imports: [
    CommonModule,
    AdddemandeRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class AdddemandeModule { }
