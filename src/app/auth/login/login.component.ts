import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { DataService } from 'src/app/shared/service/data/data.service';
import { Router } from '@angular/router';
import { routes } from 'src/app/shared/service/routes/routes';
import { AuthService } from 'src/app/servicesSTG/auth.service';
import { AuthenticationRequest } from 'src/app/modelSTG/authentication-request';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public routes = routes;
  password= 'password';
  show = true;
  authenticationRequest :AuthenticationRequest=new AuthenticationRequest();
  errorMsg : string=""
  public welcomeLogin: any = [];

  public welcomeLoginOwlOptions: OwlOptions = {
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
    this.welcomeLogin = this.DataService.welcomeLogin;
  }

  ngOnInit(): void {}

  onClick() {
    if (this.password === 'password') {
      this.password = 'text';
      this.show = false;
    } else {
      this.password = 'password';
      this.show = true;
    }
  }

  login(){
    this.authService.login(this.authenticationRequest).subscribe(
      ress =>{
        this.authService.setUserToken(ress);
        const name=localStorage.getItem("fullname");
        const role=localStorage.getItem("role");
        console.log("ggggggg",role);
        if(role=="EXPERT")
          {
            this.router.navigate(['/instructor/instructor-dashboard']);
          }
          if(role=="RESP_STE")
            {

              this.router.navigate(['/expert/setting-edit-profile']);

            }

       this.router.navigate(['/instructor/instructor-dashboard']);

      },
      error =>{
        this.errorMsg= "login ou mot de pass incorect";
      }
    );
  }
}
