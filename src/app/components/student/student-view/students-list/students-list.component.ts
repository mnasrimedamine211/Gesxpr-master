import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/service/data/data.service';
import { routes } from 'src/app/shared/service/routes/routes';
@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})
export class StudentsListComponent implements OnInit {
  public routes = routes;
  public studentList: any = [];

  constructor(private DataService: DataService) {
    this.studentList = this.DataService.studentList;}

  ngOnInit(): void {
  }

}
