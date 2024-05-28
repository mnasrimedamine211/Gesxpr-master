import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { DataService } from 'src/app/shared/service/data/data.service';
import { routes } from 'src/app/shared/service/routes/routes';

@Component({
  selector: 'app-register-step-three',
  templateUrl: './register-step-three.component.html',
  styleUrls: ['./register-step-three.component.scss']
})
export class RegisterStepThreeComponent implements OnInit {
  public registerThree: any = [];
  public routes = routes;

  public registerThreeOwlOptions: OwlOptions = {
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

  constructor(private DataService: DataService,public router: Router) {
    this.registerThree = this.DataService.registerThree;
  }

  ngOnInit(): void {
  }
  directPath() {
    this.router.navigate(['/auth/register-page/register-step-four']);
  }
}
