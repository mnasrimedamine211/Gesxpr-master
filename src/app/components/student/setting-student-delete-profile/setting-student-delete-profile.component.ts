import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/shared/service/routes/routes';

@Component({
  selector: 'app-setting-student-delete-profile',
  templateUrl: './setting-student-delete-profile.component.html',
  styleUrls: ['./setting-student-delete-profile.component.scss']
})
export class SettingStudentDeleteProfileComponent implements OnInit {
  public routes = routes;

  constructor() { }

  ngOnInit(): void {
  }

}
