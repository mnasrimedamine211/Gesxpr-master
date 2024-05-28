import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/service/data/data.service';
import { routes } from 'src/app/shared/service/routes/routes';

@Component({
  selector: 'app-deposit-student-dashboard',
  templateUrl: './deposit-student-dashboard.component.html',
  styleUrls: ['./deposit-student-dashboard.component.scss']
})
export class DepositStudentDashboardComponent implements OnInit {
  public routes = routes;
  public depositStudentDashboard : any = [];
  public latestTransactions : any = [];

  constructor(private DataService: DataService) {
    this.depositStudentDashboard = this.DataService.depositStudentDashboard;
    }
  ngOnInit(): void {
    this.tableData();
  }
  private tableData(): void {
    this.latestTransactions= [];
    this.DataService.latestTransactionsList().subscribe((res: any) => {
      res.data.map((res: any) => {
        this.latestTransactions.push(res);
      });

    });
  }

}
