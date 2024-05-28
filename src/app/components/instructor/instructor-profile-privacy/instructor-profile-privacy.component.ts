import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/shared/service/routes/routes';

@Component({
  selector: 'app-instructor-profile-privacy',
  templateUrl: './instructor-profile-privacy.component.html',
  styleUrls: ['./instructor-profile-privacy.component.scss']
})
export class InstructorProfilePrivacyComponent implements OnInit {
  selected = 'option1';
  public routes = routes;
  constructor() { }

  ngOnInit(): void {
  }

}
