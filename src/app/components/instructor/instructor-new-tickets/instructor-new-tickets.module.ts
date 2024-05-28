import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstructorNewTicketsRoutingModule } from './instructor-new-tickets-routing.module';
import { InstructorNewTicketsComponent } from './instructor-new-tickets.component';
import { NgxEditorModule } from 'ngx-editor';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from 'src/app/shared/module/shared.module';
import { NgxDropzoneModule } from 'ngx-dropzone';
// import { NgxFileDragDropModule } from 'ngx-file-drag-drop';

@NgModule({
  declarations: [
    InstructorNewTicketsComponent
  ],
  imports: [
    CommonModule,
    InstructorNewTicketsRoutingModule,
    NgxEditorModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgxDropzoneModule

  ]
})
export class InstructorNewTicketsModule { }
