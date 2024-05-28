import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingSupportNewTicketsRoutingModule } from './setting-support-new-tickets-routing.module';
import { SettingSupportNewTicketsComponent } from './setting-support-new-tickets.component';
import { NgxEditorModule } from 'ngx-editor';
import { SharedModule } from 'src/app/shared/module/shared.module';
import { NgxDropzoneModule } from 'ngx-dropzone';
// import { NgxFileDragDropModule } from 'ngx-file-drag-drop';

@NgModule({
  declarations: [
    SettingSupportNewTicketsComponent
  ],
  imports: [
    CommonModule,
    SettingSupportNewTicketsRoutingModule,
    NgxEditorModule,
    SharedModule,
    NgxDropzoneModule



  ]
})
export class SettingSupportNewTicketsModule { }
