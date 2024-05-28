import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/shared/service/routes/routes';
@Component({
  selector: 'app-instructor-linked-account',
  templateUrl: './instructor-linked-account.component.html',
  styleUrls: ['./instructor-linked-account.component.scss']
})
export class InstructorLinkedAccountComponent implements OnInit {
  public routes = routes;
  constructor() { }

  ngOnInit(): void {
  }

}
