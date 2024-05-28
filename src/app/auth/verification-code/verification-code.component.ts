import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Actionrestpasswwithcode } from 'src/app/modelSTG/actionrestpasswwithcode';
import { AuthService } from 'src/app/servicesSTG/auth.service';
import { DataService } from 'src/app/shared/service/data/data.service';
import { routes } from 'src/app/shared/service/routes/routes';

@Component({
  selector: 'app-verification-code',
  templateUrl: './verification-code.component.html',
  styleUrls: ['./verification-code.component.scss']
})
export class VerificationCodeComponent implements OnInit {
  restpwaction :Actionrestpasswwithcode=new Actionrestpasswwithcode();
  errorMsg : string=""
  public verificationCode: any = [];
  public routes = routes;
  public oneTimePassword = {
    data1: "",
    data2: "",
    data3: "",
    data4: ""
  };
  public verificationCodeOwlOptions: OwlOptions = {
    margin: 24,
    nav: true,
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1170: {
        items: 1,
      },
    },
  };

  public ValueChanged(data: string, box: string): void {
    if (box == 'digit-1' && data.length > 0) {
      document.getElementById('digit-2')?.focus();
    } else if (box == 'digit-2' && data.length > 0) {
      document.getElementById('digit-3')?.focus();
    } else if (box == 'digit-3' && data.length > 0) {
      document.getElementById('digit-4')?.focus();
    } else {
      return
    }
  }
  public tiggerBackspace(data: any, box: string) {
    let StringyfyData: any;
    if (data) {
      StringyfyData = data.toString();
    } else {
      StringyfyData = null;
    }
    if (box == 'digit-4' && StringyfyData == null) {
      document.getElementById('digit-3')?.focus();
    } else if (box == 'digit-3' && StringyfyData == null) {
      document.getElementById('digit-2')?.focus();
    } else if (box == 'digit-2' && StringyfyData == null) {
      document.getElementById('digit-1')?.focus();
    }
  }


  constructor(private DataService: DataService, private authService : AuthService, private router: Router) {
    this.verificationCode = this.DataService.verificationCode;
  }

  ngOnInit(): void {
  } 
  actionrestpword(){
    this.authService.restpw(this.restpwaction).subscribe(
      
      ress =>{
      

      },error =>{
        this.errorMsg= "login ou mot de pass incorect"
      }
    )
    this.router.navigate(["/auth/login"])

  }

  directLogin() {
    this.router.navigate(['']);
  }
}
