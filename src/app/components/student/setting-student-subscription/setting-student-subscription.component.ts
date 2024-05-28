import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/service/data/data.service';
import { routes } from 'src/app/shared/service/routes/routes';


@Component({
  selector: 'app-setting-student-subscription',
  templateUrl: './setting-student-subscription.component.html',
  styleUrls: ['./setting-student-subscription.component.scss']
})
export class SettingStudentSubscriptionComponent implements OnInit {
  public routes = routes;
  public settingStudentActive: any = [];
  public settingStudentExpired: any = [];

  constructor(private DataService: DataService) {
    this.settingStudentActive = this.DataService.settingStudentActive;
    this.settingStudentExpired = this.DataService.settingStudentExpired;

  }

  ngOnInit(): void {
  }

}
