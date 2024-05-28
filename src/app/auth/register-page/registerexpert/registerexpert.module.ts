import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterexpertRoutingModule } from './registerexpert-routing.module';
import { RegisterexpertComponent } from './registerexpert/registerexpert.component';
import { FormsModule } from '@angular/forms';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FeatherIconModule } from 'src/app/shared/module/feather.module';


@NgModule({
  declarations: [
    RegisterexpertComponent
  ],
  imports: [
    CommonModule,
    RegisterexpertRoutingModule,
    CommonModule,
    FormsModule,
    CarouselModule,
    FeatherIconModule,
    HttpClientModule
  ]
})
export class RegisterexpertModule { }
