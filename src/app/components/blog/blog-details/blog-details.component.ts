import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/service/data/data.service';
import { routes } from 'src/app/shared/service/routes/routes';
@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent implements OnInit {
  public blogDetailsRecentPosts : any = [];
  public routes = routes;
  constructor(private DataService: DataService) {
    this.blogDetailsRecentPosts = this.DataService.blogDetailsRecentPosts;
    }
  ngOnInit(): void {
  }

}
