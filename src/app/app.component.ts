import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { SidebarService } from './shared/service/sidebar/sidebar.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Expert consulting';

  //title = 'dreams-lms';
}
