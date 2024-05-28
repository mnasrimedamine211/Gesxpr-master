import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/service/data/data.service';
import { routes } from 'src/app/shared/service/routes/routes';

@Component({
  selector: 'app-transactions-instructor',
  templateUrl: './transactions-instructor.component.html',
  styleUrls: ['./transactions-instructor.component.scss']
})
export class TransactionsInstructorComponent implements OnInit {
  public routes = routes;
  public transactionsInstructor: any = [];
  public transactionInstructorProfile: any = [];

  constructor(private DataService: DataService) {
    this.transactionsInstructor = this.DataService.transactionsInstructor;
    this.transactionInstructorProfile = this.DataService.transactionInstructorProfile;
  }

  ngOnInit(): void {
  }

}
