import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/shared/service/routes/routes';
@Component({
  selector: 'app-instructor-delete-profile',
  templateUrl: './instructor-delete-profile.component.html',
  styleUrls: ['./instructor-delete-profile.component.scss']
})
export class InstructorDeleteProfileComponent implements OnInit {
  public routes = routes;
  constructor() { }

  ngOnInit(): void {
  }

}
