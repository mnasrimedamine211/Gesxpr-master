import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/shared/service/routes/routes';
@Component({
  selector: 'app-instructor-chat',
  templateUrl: './instructor-chat.component.html',
  styleUrls: ['./instructor-chat.component.scss']
})
export class InstructorChatComponent implements OnInit {
  public routes = routes;
  constructor() { }

  ngOnInit(): void {
  }

}
