import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingSupportViewTicketsRoutingModule } from './setting-support-view-tickets-routing.module';
import { SettingSupportViewTicketsComponent } from './setting-support-view-tickets.component';
import { NgxEditorModule } from 'ngx-editor';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxDropzoneModule } from 'ngx-dropzone';
// import { NgxFileDragDropModule } from 'ngx-file-drag-drop';


@NgModule({
  declarations: [
    SettingSupportViewTicketsComponent
  ],
  imports: [
    CommonModule,
    SettingSupportViewTicketsRoutingModule,
    NgxEditorModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDropzoneModule

  ]
})
export class SettingSupportViewTicketsModule { }
