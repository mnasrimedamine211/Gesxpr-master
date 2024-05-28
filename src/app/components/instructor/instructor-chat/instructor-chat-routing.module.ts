import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstructorChatComponent } from './instructor-chat.component';

const routes: Routes = [{ path: '', component: InstructorChatComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstructorChatRoutingModule { }
