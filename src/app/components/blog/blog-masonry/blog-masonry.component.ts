import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/service/data/data.service';
import { routes } from 'src/app/shared/service/routes/routes';

@Component({
  selector: 'app-blog-masonry',
  templateUrl: './blog-masonry.component.html',
  styleUrls: ['./blog-masonry.component.scss']
})
export class BlogMasonryComponent implements OnInit {
  public blogMasonry : any = [];
  public routes = routes;

  constructor(private DataService: DataService) {
    this.blogMasonry = this.DataService.blogMasonry;
    }

  ngOnInit(): void {
  }

}
