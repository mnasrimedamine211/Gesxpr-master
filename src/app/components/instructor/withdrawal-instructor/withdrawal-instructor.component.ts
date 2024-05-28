import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/service/data/data.service';
import { routes } from 'src/app/shared/service/routes/routes';

@Component({
  selector: 'app-withdrawal-instructor',
  templateUrl: './withdrawal-instructor.component.html',
  styleUrls: ['./withdrawal-instructor.component.scss']
})
export class WithdrawalInstructorComponent implements OnInit {
  public withdrawalInstructor: any = [];
  public routes = routes;
  public withdrawalInstructorProfile: any = [];

  constructor(private DataService: DataService) {
    this.withdrawalInstructor = this.DataService.withdrawalInstructor;
    this.withdrawalInstructorProfile = this.DataService.withdrawalInstructorProfile;

  }

  ngOnInit(): void {
  }

}
