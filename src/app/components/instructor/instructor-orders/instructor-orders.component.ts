import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/service/data/data.service';
import { routes } from 'src/app/shared/service/routes/routes';
@Component({
  selector: 'app-instructor-orders',
  templateUrl: './instructor-orders.component.html',
  styleUrls: ['./instructor-orders.component.scss']
})
export class InstructorOrdersComponent implements OnInit {
  public routes = routes;
  public orders: any = [];

  constructor(private DataService: DataService) {
    this.orders = this.DataService.orders;
  }

  ngOnInit(): void {
  }

}
