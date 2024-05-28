import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/service/data/data.service';
import { routes } from 'src/app/shared/service/routes/routes';
@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  public blogListRecentPosts : any = [];
  public routes = routes;
  public blogList : any = [];

  constructor(private DataService: DataService) {
    this.blogListRecentPosts = this.DataService.blogListRecentPosts;
    this.blogList = this.DataService.blogList;
    }

  ngOnInit(): void {
  }

}
