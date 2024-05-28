import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { routes } from 'src/app/shared/service/routes/routes';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  last: string = '';
  public routes = routes;

  constructor(private router: Router) {
    this.last = this.router.url.split('/')[2]?.replace('-', ' ');
    this.router.events.subscribe((data: any) => {
      if (data instanceof NavigationStart) {
        this.last = data.url.split('/')[2]?.replace('-', ' ');
      }
    });
  }

  ngOnInit(): void {}
}
