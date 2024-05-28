import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/service/data/data.service';
import { routes } from 'src/app/shared/service/routes/routes';

@Component({
  selector: 'app-instructor-payouts',
  templateUrl: './instructor-payouts.component.html',
  styleUrls: ['./instructor-payouts.component.scss']
})
export class InstructorPayoutsComponent implements OnInit {
  public withdrawHistory: any = [];
  public routes = routes;
  selected='option1'
  selected2='option1'
  selected3 ='option1'
  constructor(private DataService: DataService) {
    this.withdrawHistory = this.DataService.withdrawHistory;
  }

  ngOnInit(): void {
  }
}

