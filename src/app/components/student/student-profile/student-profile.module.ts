import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentProfileRoutingModule } from './student-profile-routing.module';
import { StudentProfileComponent } from './student-profile.component';
import { FeatherIconModule } from 'src/app/shared/module/feather.module';
import { MatIconModule } from '@angular/material/icon';
import { SkillsDialogComponent } from './skills-dialog/skills-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { EducationDialogComponent } from './education-dialog/education-dialog.component';
import { ExperienceDialogComponent } from './experience-dialog/experience-dialog.component';


@NgModule({
  declarations: [StudentProfileComponent, SkillsDialogComponent, EducationDialogComponent, ExperienceDialogComponent],
  imports: [
    CommonModule,
    StudentProfileRoutingModule,
    FeatherIconModule,
    MatIconModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatTooltipModule

  ],
})
export class StudentProfileModule {}
