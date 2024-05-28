import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/shared/service/routes/routes';

@Component({
  selector: 'app-course-details2',
  templateUrl: './course-details2.component.html',
  styleUrls: ['./course-details2.component.scss']
})
export class CourseDetails2Component implements OnInit {
  public routes = routes;
  constructor() { }

  ngOnInit(): void {
  }
  public scrollContent(id: string): void {
    document.getElementById(id)?.scrollIntoView({
      block: 'start',
      inline: 'nearest',
    });
  }
}
