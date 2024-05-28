import { NgModule } from '@angular/core';
import { FeatherIconModule } from './feather.module';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { MatSelectModule } from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CountUpModule } from "ngx-countup";
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgChartsModule } from 'ng2-charts';
import { NgApexchartsModule } from 'ng-apexcharts';
import { DataService } from '../service/data/data.service';
import { HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSliderModule } from '@angular/material/slider';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { FilePondModule } from 'ngx-filepond';
@NgModule({
  imports: [
    FeatherIconModule,
    FormsModule,
    NgCircleProgressModule.forRoot({
      "radius": 50,
      "space": -10,
      "outerStrokeWidth": 10,
      "innerStrokeWidth": 10,
      "animationDuration": 1000,
      "clockwise": false,
      "startFromZero": false,
      "lazy": false,
      "outerStrokeLinecap":"square",
      "showSubtitle": false,
      "showTitle" : false,
      "showUnits" : false,
      "showBackground" : false
    }),
    CarouselModule,
    MatSelectModule,
    MatFormFieldModule,
    CountUpModule,
    SlickCarouselModule,
    NgChartsModule,
    NgApexchartsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatSliderModule,
    MatNativeDateModule,
    // MatDatepickerModule,
    MatCardModule,
    MatSortModule,
    MatTableModule,
    MatStepperModule,
    MatIconModule,
    TooltipModule,
    FilePondModule
  ],
  exports: [
    FeatherIconModule,
    NgCircleProgressModule,
    CarouselModule,
    FormsModule,
    MatSelectModule,
    MatFormFieldModule,
    CountUpModule,
    SlickCarouselModule,
    NgChartsModule,
    NgApexchartsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatSliderModule,
    MatNativeDateModule,
    // MatDatepickerModule,
    MatCardModule,
    MatSortModule,
    MatTableModule,
    MatStepperModule,
    MatIconModule,
    TooltipModule,
    FilePondModule
  ],
  providers:[
    DataService
  ]
})
export class SharedModule {}
