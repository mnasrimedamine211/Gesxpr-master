import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Validators } from 'ngx-editor';

@Component({
  selector: 'app-experience-dialog',
  templateUrl: './experience-dialog.component.html',
  styleUrls: ['./experience-dialog.component.scss']
})
export class ExperienceDialogComponent implements OnInit , OnDestroy {
  experienceForms: FormGroup[] = [];
  newExperienceForm: FormGroup;
  editingHeading: boolean[] = [];
  editingParagraph: boolean[] = [];
  editingContent: boolean[] = [];
  addNewExperience: boolean = false;
  constructor(
    public dialogRef: MatDialogRef<ExperienceDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any[],
    private fb: FormBuilder
  ) {
    this.newExperienceForm = this.fb.group({
      heading: ['', Validators.required],
      paragraph: ['', Validators.required],
      content: ['', Validators.required],
    });
  }
  ngOnDestroy(): void {
    this.addNewExperience = false;
  }

  ngOnInit(): void {
    this.data.forEach((item, index) => {
      this.experienceForms[index] = this.fb.group({
        heading: new FormControl(item.heading),
        paragraph: new FormControl(item.paragraph),
        content: new FormControl(item.content),
      });
      this.editingHeading[index] = false;
      this.editingParagraph[index] = false;
      this.editingContent[index] = false;
    });
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
  addNew() {
    this.addNewExperience = true;
  }
  toggleEdit(index: number, field: string): void {
    switch (field) {
      case 'heading':
        if (this.editingHeading[index]) {
          this.data[index].heading = this.experienceForms[index].value.heading;
        }
        this.editingHeading[index] = !this.editingHeading[index];
        break;
      case 'paragraph':
        if (this.editingParagraph[index]) {
          this.data[index].paragraph =
            this.experienceForms[index].value.paragraph;
        }
        this.editingParagraph[index] = !this.editingParagraph[index];
        break;
      case 'content':
        if (this.editingContent[index]) {
          this.data[index].content = this.experienceForms[index].value.content;
        }
        this.editingContent[index] = !this.editingContent[index];
        break;
    }
  }

  deleteExperience(index: number): void {
    if (confirm('Are you sure you want to delete this experience item?')) {
      this.data.splice(index, 1);
      this.experienceForms.splice(index, 1);
      this.editingHeading.splice(index, 1);
      this.editingParagraph.splice(index, 1);
      this.editingContent.splice(index, 1);
    }
  }

  addExperience(): void {
    this.newExperienceForm.markAllAsTouched();
    const newEdu = this.newExperienceForm.value;

    if (this.newExperienceForm.invalid) {
      console.log(this.newExperienceForm.invalid, newEdu);
      return;
    }


    this.data.push({
      heading: newEdu.heading,
      paragraph: newEdu.paragraph,
      content: newEdu.content,
      letter: newEdu.heading.charAt(0).toUpperCase(),
    });

    this.experienceForms.push(
      this.fb.group({
        heading: new FormControl(newEdu.heading),
        paragraph: new FormControl(newEdu.paragraph),
        content: new FormControl(newEdu.content),
      })
    );

    this.editingHeading.push(false);
    this.editingParagraph.push(false);
    this.editingContent.push(false);

    this.newExperienceForm.reset();
    this.addNewExperience = false;
  }
}
