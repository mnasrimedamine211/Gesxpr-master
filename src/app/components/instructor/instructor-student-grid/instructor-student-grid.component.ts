import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/service/data/data.service';
import { routes } from 'src/app/shared/service/routes/routes';

@Component({
  selector: 'app-instructor-student-grid',
  templateUrl: './instructor-student-grid.component.html',
  styleUrls: ['./instructor-student-grid.component.scss']
})
export class InstructorStudentGridComponent implements OnInit {
  public routes = routes;
  public instructorStudentGrid: any = [];

  constructor(private DataService: DataService) {
    this.instructorStudentGrid = this.DataService.instructorStudentGrid;
  }

  ngOnInit(): void {
  }

}
