import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/shared/service/routes/routes';

@Component({
  selector: 'app-come-soon',
  templateUrl: './come-soon.component.html',
  styleUrls: ['./come-soon.component.scss'],
})
export class ComeSoonComponent implements OnInit {
  public routes = routes;
  public projectStartDate: any = new Date(new Date().getFullYear() + 1, 0, 1);

  constructor() {}

  public getDataDiff(): any {
    var diff = this.projectStartDate.getTime() - new Date().getTime();
    var days = Math.floor(diff / (60 * 60 * 24 * 1000));
    var hours = Math.floor(diff / (60 * 60 * 1000)) - days * 24;
    var minutes =
      Math.floor(diff / (60 * 1000)) - (days * 24 * 60 + hours * 60);
    return {
      day: days,
      hour: hours,
      minute: minutes,
    };
  }

  ngOnInit(): void {
  }
}
