import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/shared/service/routes/routes';

@Component({
  selector: 'app-setting-student-social-profile',
  templateUrl: './setting-student-social-profile.component.html',
  styleUrls: ['./setting-student-social-profile.component.scss']
})
export class SettingStudentSocialProfileComponent implements OnInit {
  public routes = routes;

  constructor() { }

  ngOnInit(): void {
  }

}
