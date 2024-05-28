import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/service/data/data.service';
import { routes } from 'src/app/shared/service/routes/routes';
@Component({
  selector: 'app-blog-grid',
  templateUrl: './blog-grid.component.html',
  styleUrls: ['./blog-grid.component.scss']
})
export class BlogGridComponent implements OnInit {
  public blogGrid : any = [];
  public routes = routes;
  public blogGridRecentPosts : any = [];

  constructor(private DataService: DataService) {
    this.blogGrid = this.DataService.blogGrid;
    this.blogGridRecentPosts = this.DataService.blogGridRecentPosts;
    }

  ngOnInit(): void {
  }

}
