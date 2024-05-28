import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/service/data/data.service';
import { routes } from 'src/app/shared/service/routes/routes';
@Component({
  selector: 'app-instructor-edit',
  templateUrl: './instructor-edit.component.html',
  styleUrls: ['./instructor-edit.component.scss']
})
export class InstructorEditComponent implements OnInit {
  public routes = routes;
  public instructorEdit : any = [];
  public instructorEditEducation : any = [];
  public instructorEditExperience : any = [];
  public instructorEditCourses : any = [];
  public instructorEditReviews : any = [];
  public instructorEditOverview : any = [];
  public instructorEditContactDetails : any = [];

  constructor(private DataService: DataService) {
    this.instructorEdit = this.DataService.instructorEdit;
    this.instructorEditEducation = this.DataService.instructorEditEducation;
    this.instructorEditExperience = this.DataService.instructorEditExperience;
    this.instructorEditCourses = this.DataService.instructorEditCourses;
    this.instructorEditReviews = this.DataService.instructorEditReviews;
    this.instructorEditOverview = this.DataService.instructorEditOverview;
    this.instructorEditContactDetails = this.DataService.instructorEditContactDetails;
    }

  ngOnInit(): void {
  }
  toggleClass(data: any) {
    data.active = !data.active;
  }
}
