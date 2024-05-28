import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/shared/service/routes/routes';


@Component({
  selector: 'app-course-message',
  templateUrl: './course-message.component.html',
  styleUrls: ['./course-message.component.scss']
})
export class CourseMessageComponent implements OnInit {
  public routes = routes;

  constructor() { }

  ngOnInit(): void {
  }

}
