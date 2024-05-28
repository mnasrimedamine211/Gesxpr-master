import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from 'src/app/shared/service/data/data.service';
import { routes } from 'src/app/shared/service/routes/routes';
import { SkillsDialogComponent } from './skills-dialog/skills-dialog.component';
import { EducationDialogComponent } from './education-dialog/education-dialog.component';
import { ExperienceDialogComponent } from './experience-dialog/experience-dialog.component';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.scss'],
})
export class StudentProfileComponent implements OnInit {
  public studentProfileEducation: any = [];
  public studentProfileExperience: any = [];
  public studentProfileCourses: any = [];
  public studentProfileReviews: any = [];
  public routes = routes;
  public studentProfileContactDetails: any = [];
  skills: string[] = [
    'Angular',
    'React',
    'NodeJS',
    'ExpressJS',
    'MongoDb & SQL',
    'SpringBoot',
  ];
  constructor(private DataService: DataService, private dialog: MatDialog) {
    this.studentProfileEducation = this.DataService.studentProfileEducation;
    this.studentProfileExperience = this.DataService.studentProfileExperience;
    this.studentProfileCourses = this.DataService.studentProfileCourses;
    this.studentProfileReviews = this.DataService.studentProfileReviews;
    this.studentProfileContactDetails =
      this.DataService.studentProfileContactDetails;
  }

  ngOnInit(): void {}
  //Education
  openEducationsDialog() {
    const dialogRef = this.dialog.open(EducationDialogComponent, {
      width: '600px',
      data: this.studentProfileEducation,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      console.log(this.studentProfileEducation);
      // call api for update education and the arg is studentProfileEducation
    });
  }
  //experience
  openExperienceDialog(){
    const dialogRef = this.dialog.open(ExperienceDialogComponent, {
      width: '600px',
      data: this.studentProfileExperience,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      console.log(this.studentProfileExperience);
      // call api for update education and the arg is studentProfileExperience
    });
  }
  //skills
  openSkillsDialog(): void {
    const dialogRef = this.dialog.open(SkillsDialogComponent, {
      width: '400px',
      data: this.skills,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      console.log(this.skills);
      // call api for update skills and the arg is skills
    });
  }
}
