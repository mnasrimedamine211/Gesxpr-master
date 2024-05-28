import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/service/data/data.service';
import { routes } from 'src/app/shared/service/routes/routes';

@Component({
  selector: 'app-setting-student-referral',
  templateUrl: './setting-student-referral.component.html',
  styleUrls: ['./setting-student-referral.component.scss']
})
export class SettingStudentReferralComponent implements OnInit {
  public routes = routes;
  public settingStudentEarnings: any = [];
  public settingStudentReferral: any = [];
  selected2='option1'
  selected='option1'
  constructor(private DataService: DataService) {
    this.settingStudentEarnings = this.DataService.settingStudentEarnings;
    this.settingStudentReferral = this.DataService.settingStudentReferral;
  }

  ngOnInit(): void {
  }

}
