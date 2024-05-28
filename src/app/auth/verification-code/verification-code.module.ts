import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VerificationCodeRoutingModule } from './verification-code-routing.module';
import { VerificationCodeComponent } from './verification-code.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/module/shared.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    VerificationCodeComponent
  ],
  imports: [
    CommonModule,
    VerificationCodeRoutingModule,
    FormsModule,
    HttpClientModule,
    SharedModule
  ]
})
export class VerificationCodeModule { }
