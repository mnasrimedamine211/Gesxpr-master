import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseWishlistRoutingModule } from './course-wishlist-routing.module';
import { CourseWishlistComponent } from './course-wishlist.component';
import { FeatherIconModule } from 'src/app/shared/module/feather.module';


@NgModule({
  declarations: [
    CourseWishlistComponent
  ],
  imports: [
    CommonModule,
    CourseWishlistRoutingModule,
    FeatherIconModule
  ]
})
export class CourseWishlistModule { }
