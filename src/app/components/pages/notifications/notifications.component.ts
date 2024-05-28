import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/service/data/data.service';
import { routes } from 'src/app/shared/service/routes/routes';


@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
  public routes = routes;
  public notificationsToday : any = [];
  public notificationsYesterday : any = [];

  constructor(private DataService: DataService) {
    this.notificationsToday = this.DataService.notificationsToday;
    this.notificationsYesterday = this.DataService.notificationsYesterday;
    }

  ngOnInit(): void {
  }

}
