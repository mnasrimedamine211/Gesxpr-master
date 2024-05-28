import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudprofilStagiaireDTO } from 'src/app/modelSTG/crudprofil-stagiaire-dto';
import { CrudprofilStagiaireService } from 'src/app/servicesSTG/crudprofil-stagiaire.service';
import { routes } from 'src/app/shared/service/routes/routes';

@Component({
  selector: 'app-setting-edit-profile',
  templateUrl: './setting-edit-profile.component.html',
  styleUrls: ['./setting-edit-profile.component.scss']
})
export class SettingEditProfileComponent implements OnInit {
  editproRequest: CrudprofilStagiaireDTO = new CrudprofilStagiaireDTO();
  errorMsg=""
  public routes = routes;
  selected ='option1';
  constructor(private crusprofil:CrudprofilStagiaireService,private router: Router) { }

  ngOnInit(): void {
this.showuser()
  }

  showuser(){
  const id=Number(localStorage.getItem("userId"))
    this.crusprofil.finddpetById(id)
    .subscribe(result=>{
      
   this.editproRequest=result
     
      console.log("fffffffff",result)
    
    },
    (err:HttpErrorResponse)=>this.errorMsg='this email is existe')
  }

  updateprofilStagiaire(){
    console.log("nour",this.editproRequest)
    this.editproRequest.id=Number(localStorage.getItem("userId"))

    //
    console.log("nour",this.editproRequest)
    
    this.crusprofil.updateprof(this.editproRequest)
    .subscribe(result=>{
      //this.router.navigate(["home/"])
   
      console.log("TTTTTTTT")
      console.log(result)
    
    },
    (err:HttpErrorResponse)=>this.errorMsg='this email is existe')
  }
 

}
