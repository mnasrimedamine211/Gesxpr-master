import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/service/data/data.service';
import { routes } from 'src/app/shared/service/routes/routes';
@Component({
  selector: 'app-deposit-instructor-dashboard',
  templateUrl: './deposit-instructor-dashboard.component.html',
  styleUrls: ['./deposit-instructor-dashboard.component.scss']
})
export class DepositInstructorDashboardComponent implements OnInit {
  public profileDetails: any = [];
  public routes = routes;
  public referredUsers: any = [];
  public depositInstructorDashboard: any = [];


  constructor(private DataService: DataService) {
    this.profileDetails = this.DataService.profileDetails;
    this.referredUsers = this.DataService.referredUsers;
    this.depositInstructorDashboard = this.DataService.depositInstructorDashboard;

  }

  ngOnInit(): void {
  }

}
