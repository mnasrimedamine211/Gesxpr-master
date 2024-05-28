import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-skills-dialog',
  templateUrl: './skills-dialog.component.html',
  styleUrls: ['./skills-dialog.component.scss'],
})
export class SkillsDialogComponent {
  isEditing: boolean[] = [];
  skillControls: FormControl[] = [];
  newSkillControl: FormControl;

  constructor(
    public dialogRef: MatDialogRef<SkillsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string[]
  ) {
    this.isEditing = new Array(data.length).fill(false);
    this.skillControls = data.map(skill => new FormControl(skill, Validators.required));
    this.newSkillControl = new FormControl('', Validators.required);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  editSkill(index: number): void {
    this.isEditing[index] = true;
  }

  saveEdit(index: number): void {
    if (this.skillControls[index].valid) {
      const skill = this.skillControls[index].value;
      if (skill !== null) {
        this.data[index] = skill;
      }
      this.isEditing[index] = false;
    }
  }

  deleteSkill(index: number): void {
    this.data.splice(index, 1);
    this.skillControls.splice(index, 1);
    this.isEditing.splice(index, 1);
  }

  addSkill(): void {
    if (this.newSkillControl.valid) {
      const newSkill = this.newSkillControl.value;
      if (newSkill !== null && newSkill.trim() !== '') {
        this.data.push(newSkill.trim());
        this.skillControls.push(new FormControl(newSkill.trim(), Validators.required));
        this.isEditing.push(false);
        this.newSkillControl.reset();
      }
    }
  }
}
