import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Expert } from 'src/app/modelSTG/expert';
import { RegisterRequest } from 'src/app/modelSTG/register-request';
import { passwordResponce, register } from 'src/app/models/register.model';
import { AuthService } from 'src/app/servicesSTG/auth.service';
import { DataService } from 'src/app/shared/service/data/data.service';
import { routes } from 'src/app/shared/service/routes/routes';

@Component({
  selector: 'app-registerexpert',
  templateUrl: './registerexpert.component.html',
  styleUrls: ['./registerexpert.component.scss']
})
export class RegisterexpertComponent {
  public routes = routes;
  public registerForm:register={}
  public passwordResponce:passwordResponce={};
  registerRequest: Expert = new Expert();
  Dpts:any;
  errorMsg ! : string;
  public register: any = [];

  password= 'password';
  show = true;
  
  public registerOwlOptions: OwlOptions = {
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
    this.register = this.DataService.register;
    console.log(this.register )
  }

  ngOnInit(): void {
    console.log("hello")
  }
  onClick() {
    if (this.password === 'password') {
      this.password = 'text';
      this.show = false;
    } else {
      this.password = 'password';
      this.show = true;
    }
  }
  registerStagiaire(){
    this.authService.registerexpert(this.registerRequest)
    .subscribe(result=>{
      this.router.navigate(["home/"])
   
      console.log("TTTTTTTT")
      console.log(result)
    
    },
    (err:HttpErrorResponse)=>this.errorMsg='this email is existe')
  }

  public onChangePassword(password:any){
    if(password.match(/^$|\s+/)) {
      this.passwordResponce.passwordResponceText = "whitespaces are not allowed"
      this.passwordResponce.passwordResponceImage = ""
      this.passwordResponce.passwordResponceKey = ''
      return
    }
    if(password.length == 0){
      this.passwordResponce.passwordResponceText = ""
      this.passwordResponce.passwordResponceImage = ""
      this.passwordResponce.passwordResponceKey = ''
      return
    }
    if (password.length < 8) {
      this.passwordResponce.passwordResponceText = "Weak. Must contain at least 8 characters"
      this.passwordResponce.passwordResponceImage = "assets/img/icon/angry.svg"
      this.passwordResponce.passwordResponceKey = '0'
    } else if (password.search(/[a-z]/) < 0) {
      this.passwordResponce.passwordResponceText = "Average. Must contain at least 1 upper case and number"
      this.passwordResponce.passwordResponceImage = "assets/img/icon/anguish.svg"
      this.passwordResponce.passwordResponceKey = '1'
    } else if(password.search(/[A-Z]/) < 0) {
      this.passwordResponce.passwordResponceText = "Average. Must contain at least 1 upper case and number"
      this.passwordResponce.passwordResponceImage = "assets/img/icon/anguish.svg"
      this.passwordResponce.passwordResponceKey = '1'
    } else  if (password.search(/[0-9]/) < 0) {
      this.passwordResponce.passwordResponceText= "Average. Must contain at least 1 upper case and number"
      this.passwordResponce.passwordResponceImage = "assets/img/icon/anguish.svg"
      this.passwordResponce.passwordResponceKey = '1'
    } else  if (password.search(/(?=.*?[#?!@$%^&*-])/) < 0) {
      this.passwordResponce.passwordResponceText = "Almost. Must contain special symbol"
      this.passwordResponce.passwordResponceImage = "assets/img/icon/smile.svg"
      this.passwordResponce.passwordResponceKey = '2'
    }else {
      this.passwordResponce.passwordResponceText = "Awesome! You have a secure password."
        this.passwordResponce.passwordResponceImage = "assets/img/icon/smile.svg"
         this.passwordResponce.passwordResponceKey = '3'
     }
  }

  
}
