import { Component, OnInit, ViewChild } from '@angular/core';
import { toHTML } from 'ngx-editor';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { Validators, Editor, Toolbar } from 'ngx-editor';
import { routes } from 'src/app/shared/service/routes/routes';

@Component({
  selector: 'app-instructor-new-tickets',
  templateUrl: './instructor-new-tickets.component.html',
  styleUrls: ['./instructor-new-tickets.component.scss']
})
export class InstructorNewTicketsComponent implements OnInit {
  public routes = routes;
  selected='1'
  selected2='1'
  editor!: Editor;
  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];

  form = new FormGroup({
    editorContent: new FormControl('', Validators.required()),
  });
  files: File[] = [];

  onSelect(event:any) {
  this.files.push(...event.addedFiles);
  }
  
  onRemove(event:any) {
   this.files.splice(this.files.indexOf(event), 1);
  }
  ngOnInit(): void {
    this.editor = new Editor();
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }

}
