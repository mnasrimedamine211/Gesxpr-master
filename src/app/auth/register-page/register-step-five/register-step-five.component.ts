import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/service/data/data.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { routes } from 'src/app/shared/service/routes/routes';

@Component({
  selector: 'app-register-step-five',
  templateUrl: './register-step-five.component.html',
  styleUrls: ['./register-step-five.component.scss']
})
export class RegisterStepFiveComponent implements OnInit {
  public registerFive: any = [];
  public routes = routes;
  public registerFiveOwlOptions: OwlOptions = {
    margin: 25,
    nav: true,
    loop: true,
    responsive: {
        0: {
          items: 1
        },
        768 : {
          items: 3
        },
        1170: {
          items: 4
        }
    },
  };

  constructor(private DataService: DataService) {
    this.registerFive = this.DataService.registerFive;
  }

  ngOnInit(): void {
  }

}
