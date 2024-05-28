import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/shared/service/routes/routes';

@Component({
  selector: 'app-pricing-plan2',
  templateUrl: './pricing-plan2.component.html',
  styleUrls: ['./pricing-plan2.component.scss']
})
export class PricingPlan2Component implements OnInit {
  public routes = routes;
  constructor() { }

  ngOnInit(): void {
  }

}
