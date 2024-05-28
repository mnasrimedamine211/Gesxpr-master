import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/service/data/data.service';
import { routes } from 'src/app/shared/service/routes/routes';
@Component({
  selector: 'app-dashboard-instructor',
  templateUrl: './dashboard-instructor.component.html',
  styleUrls: ['./dashboard-instructor.component.scss']
})
export class DashboardInstructorComponent implements OnInit {
  public myCourse : any = [];
  public routes = routes;
 constructor(private DataService: DataService) {
    this.myCourse = this.DataService.myCourse;
    } 

  ngOnInit(): void {
  }

}
