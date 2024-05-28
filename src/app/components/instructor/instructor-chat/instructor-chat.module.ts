import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstructorChatRoutingModule } from './instructor-chat-routing.module';
import { InstructorChatComponent } from './instructor-chat.component';


@NgModule({
  declarations: [
    InstructorChatComponent
  ],
  imports: [
    CommonModule,
    InstructorChatRoutingModule
  ]
})
export class InstructorChatModule { }
