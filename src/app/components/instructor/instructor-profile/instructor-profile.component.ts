import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/service/data/data.service';
import { routes } from 'src/app/shared/service/routes/routes';

@Component({
  selector: 'app-instructor-profile',
  templateUrl: './instructor-profile.component.html',
  styleUrls: ['./instructor-profile.component.scss']
})
export class InstructorProfileComponent implements OnInit {
  public routes = routes;
[x: string]: any;
  public instructorProfile: any = [];
  public instructorProfileEducation: any = [];
  public instructorProfileExperience: any = [];
  public instructorProfileCourses: any = [];
  public instructorProfileReviews: any = [];
  public instructorProfileOverview: any = [];
  public instructorProfileContactDetails: any = [];

   constructor(private DataService: DataService) {
    this.instructorProfile = this.DataService.instructorProfile;
    this.instructorProfileEducation = this.DataService.instructorProfileEducation;
    this.instructorProfileExperience = this.DataService.instructorProfileExperience;
    this.instructorProfileCourses = this.DataService.instructorProfileCourses;
    this.instructorProfileReviews = this.DataService.instructorProfileReviews;
    this.instructorProfileOverview = this.DataService.instructorProfileOverview;
    this.instructorProfileContactDetails = this.DataService.instructorProfileContactDetails;
   }

  ngOnInit(): void {
  }
  toggleClass(data: any) {
    data.active = !data.active;
  }
}
