import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/shared/service/routes/routes';

@Component({
  selector: 'app-instructor-edit-profile',
  templateUrl: './instructor-edit-profile.component.html',
  styleUrls: ['./instructor-edit-profile.component.scss']
})
export class InstructorEditProfileComponent implements OnInit {
  selected='option1';
  public routes = routes;
  constructor() { }

  ngOnInit(): void {
  }

}
