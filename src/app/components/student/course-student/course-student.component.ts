import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/service/data/data.service';
import { routes } from 'src/app/shared/service/routes/routes';

@Component({
  selector: 'app-course-student',
  templateUrl: './course-student.component.html',
  styleUrls: ['./course-student.component.scss']
})
export class CourseStudentComponent implements OnInit {
  public routes = routes;
  public courseStudent: any = [];

  constructor(private DataService: DataService) {
    this.courseStudent = this.DataService.courseStudent;}

  ngOnInit(): void {
  }

}
