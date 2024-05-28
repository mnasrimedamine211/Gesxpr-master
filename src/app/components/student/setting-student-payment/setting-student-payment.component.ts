import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/shared/service/routes/routes';

@Component({
  selector: 'app-setting-student-payment',
  templateUrl: './setting-student-payment.component.html',
  styleUrls: ['./setting-student-payment.component.scss']
})
export class SettingStudentPaymentComponent implements OnInit {
  public routes = routes;
  constructor() { }

  ngOnInit(): void {
  }

}
