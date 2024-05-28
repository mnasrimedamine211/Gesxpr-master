import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/shared/service/routes/routes';

@Component({
  selector: 'app-instructor-notification',
  templateUrl: './instructor-notification.component.html',
  styleUrls: ['./instructor-notification.component.scss']
})
export class InstructorNotificationComponent implements OnInit {
  public routes = routes;
  constructor() { }

  ngOnInit(): void {
  }

}
