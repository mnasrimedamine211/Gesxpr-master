import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/shared/service/routes/routes';

@Component({
  selector: 'app-instructor-social-profiles',
  templateUrl: './instructor-social-profiles.component.html',
  styleUrls: ['./instructor-social-profiles.component.scss']
})
export class InstructorSocialProfilesComponent implements OnInit {
  public routes = routes;

  constructor() { }

  ngOnInit(): void {
  }

}
