import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/service/data/data.service';
import { routes } from 'src/app/shared/service/routes/routes';

@Component({
  selector: 'app-students-grid',
  templateUrl: './students-grid.component.html',
  styleUrls: ['./students-grid.component.scss']
})
export class StudentsGridComponent implements OnInit {
  public routes = routes;
  public studentGrid1: any = [];

  constructor(private DataService: DataService) {
    this.studentGrid1 = this.DataService.studentGrid1;}

  ngOnInit(): void {
  }

}
