import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/service/data/data.service';
import { routes } from 'src/app/shared/service/routes/routes';

@Component({
  selector: 'app-purchase-history',
  templateUrl: './purchase-history.component.html',
  styleUrls: ['./purchase-history.component.scss']
})
export class PurchaseHistoryComponent implements OnInit {
  public purchaseHistory: any = [];
  public routes = routes;
  constructor(private DataService: DataService) {
    this.purchaseHistory = this.DataService.purchaseHistory;
  }

  ngOnInit(): void {
  }

}
