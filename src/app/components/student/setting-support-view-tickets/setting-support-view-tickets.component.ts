import { Component, OnInit } from '@angular/core';
import { toHTML } from 'ngx-editor';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { Validators, Editor, Toolbar } from 'ngx-editor';
import { routes } from 'src/app/shared/service/routes/routes';

@Component({
  selector: 'app-setting-support-view-tickets',
  templateUrl: './setting-support-view-tickets.component.html',
  styleUrls: ['./setting-support-view-tickets.component.scss']
})
export class SettingSupportViewTicketsComponent implements OnInit {
  public routes = routes;
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
  files: File[] = [];

  onSelect(event:any) {
  this.files.push(...event.addedFiles);
  }
  
  onRemove(event:any) {
   this.files.splice(this.files.indexOf(event), 1);
  }
  form = new FormGroup({
    editorContent: new FormControl('', Validators.required()),
  });
  constructor() { }

  ngOnInit(): void {
    this.editor = new Editor();
  }
  ngOnDestroy(): void {
    this.editor.destroy();
  }
}
