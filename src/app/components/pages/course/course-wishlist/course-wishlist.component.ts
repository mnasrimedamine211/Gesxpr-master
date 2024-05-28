import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/service/data/data.service';
import { routes } from 'src/app/shared/service/routes/routes';

@Component({
  selector: 'app-course-wishlist',
  templateUrl: './course-wishlist.component.html',
  styleUrls: ['./course-wishlist.component.scss']
})
export class CourseWishlistComponent implements OnInit {
  public courseWishlist: any = [];
  public routes = routes;

  constructor(private DataService: DataService) {
    this.courseWishlist = this.DataService.courseWishlist;
  }

  ngOnInit(): void {
  }
  toggleClass(data: any) {
    data.active = !data.active;
  }
}
