import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Validators } from 'ngx-editor';

@Component({
  selector: 'app-education-dialog',
  templateUrl: './education-dialog.component.html',
  styleUrls: ['./education-dialog.component.scss'],
})
export class EducationDialogComponent implements OnInit, OnDestroy {
  educationForms: FormGroup[] = [];
  newEducationForm: FormGroup;
  editingHeading: boolean[] = [];
  editingParagraph: boolean[] = [];
  editingContent: boolean[] = [];
  addNewEducation: boolean = false;
  constructor(
    public dialogRef: MatDialogRef<EducationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any[],
    private fb: FormBuilder
  ) {
    this.newEducationForm = this.fb.group({
      heading: ['', Validators.required],
      paragraph: ['', Validators.required],
      content: ['', Validators.required],
    });
  }
  ngOnDestroy(): void {
    this.addNewEducation = false;
  }

  ngOnInit(): void {
    this.data.forEach((item, index) => {
      this.educationForms[index] = this.fb.group({
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
    this.addNewEducation = true;
  }
  toggleEdit(index: number, field: string): void {
    switch (field) {
      case 'heading':
        if (this.editingHeading[index]) {
          this.data[index].heading = this.educationForms[index].value.heading;
        }
        this.editingHeading[index] = !this.editingHeading[index];
        break;
      case 'paragraph':
        if (this.editingParagraph[index]) {
          this.data[index].paragraph =
            this.educationForms[index].value.paragraph;
        }
        this.editingParagraph[index] = !this.editingParagraph[index];
        break;
      case 'content':
        if (this.editingContent[index]) {
          this.data[index].content = this.educationForms[index].value.content;
        }
        this.editingContent[index] = !this.editingContent[index];
        break;
    }
  }

  deleteEducation(index: number): void {
    if (confirm('Are you sure you want to delete this education item?')) {
      this.data.splice(index, 1);
      this.educationForms.splice(index, 1);
      this.editingHeading.splice(index, 1);
      this.editingParagraph.splice(index, 1);
      this.editingContent.splice(index, 1);
    }
  }

  addEducation(): void {
    this.newEducationForm.markAllAsTouched();
    const newEdu = this.newEducationForm.value;

    if (this.newEducationForm.invalid) {
      console.log(this.newEducationForm.invalid, newEdu);
      return;
    }


    this.data.push({
      heading: newEdu.heading,
      paragraph: newEdu.paragraph,
      content: newEdu.content,
      letter: newEdu.heading.charAt(0).toUpperCase(),
    });

    this.educationForms.push(
      this.fb.group({
        heading: new FormControl(newEdu.heading),
        paragraph: new FormControl(newEdu.paragraph),
        content: new FormControl(newEdu.content),
      })
    );

    this.editingHeading.push(false);
    this.editingParagraph.push(false);
    this.editingContent.push(false);

    this.newEducationForm.reset();
    this.addNewEducation = false;
  }
}
