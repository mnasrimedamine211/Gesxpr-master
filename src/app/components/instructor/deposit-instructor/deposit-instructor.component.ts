import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/service/data/data.service';
import { routes } from 'src/app/shared/service/routes/routes';

@Component({
  selector: 'app-deposit-instructor',
  templateUrl: './deposit-instructor.component.html',
  styleUrls: ['./deposit-instructor.component.scss']
})
export class DepositInstructorComponent implements OnInit {
  public depositHistory: any = [];
  public routes = routes;
  public depositInstructor: any = [];

  constructor(private DataService: DataService) {
    this.depositHistory = this.DataService.depositHistory;
    this.depositInstructor = this.DataService.depositInstructor;

  }

  ngOnInit(): void {
  }

}
