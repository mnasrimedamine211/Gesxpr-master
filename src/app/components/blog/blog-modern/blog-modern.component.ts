import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/service/data/data.service';
import { routes } from 'src/app/shared/service/routes/routes';

@Component({
  selector: 'app-blog-modern',
  templateUrl: './blog-modern.component.html',
  styleUrls: ['./blog-modern.component.scss']
})
export class BlogModernComponent implements OnInit {
  public routes = routes;
  public blogModern : any = [];

  constructor(private DataService: DataService) {
    this.blogModern = this.DataService.blogModern;
    }

  ngOnInit(): void {
  }

}
