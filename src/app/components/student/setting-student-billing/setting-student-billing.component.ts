import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/shared/service/routes/routes';

@Component({
  selector: 'app-setting-student-billing',
  templateUrl: './setting-student-billing.component.html',
  styleUrls: ['./setting-student-billing.component.scss']
})
export class SettingStudentBillingComponent implements OnInit {
  public routes = routes;

  constructor() { }

  ngOnInit(): void {
  }

}
