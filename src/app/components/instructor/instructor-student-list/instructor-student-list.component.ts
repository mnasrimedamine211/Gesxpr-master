import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/service/data/data.service';
import { routes } from 'src/app/shared/service/routes/routes';

@Component({
  selector: 'app-instructor-student-list',
  templateUrl: './instructor-student-list.component.html',
  styleUrls: ['./instructor-student-list.component.scss']
})
export class InstructorStudentListComponent implements OnInit {
  public routes = routes;
  public instructorStudentList: any = [];

  constructor(private DataService: DataService) {
    this.instructorStudentList = this.DataService.instructorStudentList;}

  ngOnInit(): void {
  }

}
