import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/service/data/data.service';
import { routes } from 'src/app/shared/service/routes/routes';

@Component({
  selector: 'app-pricing-plan',
  templateUrl: './pricing-plan.component.html',
  styleUrls: ['./pricing-plan.component.scss']
})
export class PricingPlanComponent implements OnInit {
  public pricingPlan : any = [];
  public routes = routes;

  constructor(private DataService: DataService) {
    this.pricingPlan = this.DataService.pricingPlan;
    }

  ngOnInit(): void {
  }

}
