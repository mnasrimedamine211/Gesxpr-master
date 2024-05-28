import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/service/data/data.service';
import { routes } from 'src/app/shared/service/routes/routes';

@Component({
  selector: 'app-transactions-student',
  templateUrl: './transactions-student.component.html',
  styleUrls: ['./transactions-student.component.scss']
})
export class TransactionsStudentComponent implements OnInit {
  public routes = routes;
  public transactionStudent: any = [];

  constructor(private DataService: DataService) {
    this.transactionStudent = this.DataService.transactionStudent;
  }

  ngOnInit(): void {
  }

}
