import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/service/data/data.service';
import { routes } from 'src/app/shared/service/routes/routes';

@Component({
  selector: 'app-deposit-student',
  templateUrl: './deposit-student.component.html',
  styleUrls: ['./deposit-student.component.scss']
})
export class DepositStudentComponent implements OnInit {
  public routes = routes;
  public depositStudent : any = [];

  constructor(private DataService: DataService) {
    this.depositStudent = this.DataService.depositStudent;
    }

  ngOnInit(): void {
  }

}
