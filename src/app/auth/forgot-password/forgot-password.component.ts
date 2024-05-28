import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';
import { DataService } from 'src/app/shared/service/data/data.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Router } from '@angular/router';
import { routes } from 'src/app/shared/service/routes/routes';
import { AuthService } from 'src/app/servicesSTG/auth.service';
import { Modelemailresetpassw } from 'src/app/modelSTG/modelemailresetpassw';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  public routes = routes;
  public forgotPassword: any = [];
  restpwRequest :Modelemailresetpassw=new Modelemailresetpassw();
  errorMsg : string=""
  public forgotPasswordOwlOptions: OwlOptions = {
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

  constructor(private DataService: DataService, private authService : AuthService, private router: Router) {
    this.forgotPassword = this.DataService.forgotPassword;
  }

  ngOnInit(){
    Aos.init();
    }
    directLogin() {
      console.log("test")
      this.router.navigate(['/auth/login']);
    }

    requestrestpword(){
      this.authService.requestrestpw(this.restpwRequest).subscribe(
       
        ress =>{

  
  
        },error =>{

          this.errorMsg= "login ou mot de pass incorect"
        }
      )
      this.router.navigate(["/auth/verification-code/"])

    }
}
