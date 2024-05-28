import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/service/data/data.service';
import { routes } from 'src/app/shared/service/routes/routes';

@Component({
  selector: 'app-setting-support-tickets',
  templateUrl: './setting-support-tickets.component.html',
  styleUrls: ['./setting-support-tickets.component.scss']
})
export class SettingSupportTicketsComponent implements OnInit {
  public routes = routes;
  public settingSupportTickets1: any = [];
  public settingSupportTickets2: any = [];
  public settingSupportTickets3: any = [];
  public settingSupportTickets4: any = [];

  constructor(private DataService: DataService) {
    this.settingSupportTickets1 = this.DataService.settingSupportTickets1;
    this.settingSupportTickets2 = this.DataService.settingSupportTickets2;
    this.settingSupportTickets3 = this.DataService.settingSupportTickets3;
    this.settingSupportTickets4 = this.DataService.settingSupportTickets4;
  }

  ngOnInit(): void {
  }

}
