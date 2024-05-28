import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthenticationRequest } from '../modelSTG/authentication-request';
import { Observable } from 'rxjs';
import { AuthenticationResponse } from '../modelSTG/authentication-response';
import { RegisterRequest } from '../modelSTG/register-request';
import { Reponse } from '../modelSTG/reponse';
import { jwtDecode } from "jwt-decode";
import { Modelemailresetpassw } from '../modelSTG/modelemailresetpassw';
import { Actionrestpasswwithcode } from '../modelSTG/actionrestpasswwithcode';
import { CrudprofilStagiaireDTO } from '../modelSTG/crudprofil-stagiaire-dto';

import { Respsociete } from '../modelSTG/respsociete';
import { Expert } from '../modelSTG/expert';
@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private router : Router,private httpClient: HttpClient) { }
  private baseUrl=environment.baseurl+"/auth"
  private baseUrl1=environment.baseurl+"/profil"
  role!:any
  isUserAuthenticated():boolean{
    if (localStorage.getItem ("accesstoken")){
      return true;
    }
    this.router.navigate(["/login"])
return false;
  }

  requestrestpw(email: Modelemailresetpassw):Observable<any>{
    const url=this.baseUrl+"/password-reset-request"
    return this.httpClient.post<any>(url,email)
  }

  restpw(code: Actionrestpasswwithcode):Observable<any>{
    const url=this.baseUrl+"/reset-password"
    return this.httpClient.post<any>(url,code)
  }


  login(authenticationRequest : AuthenticationRequest):Observable<AuthenticationResponse>{
    const url=this.baseUrl+"/authenticate"
    return this.httpClient.post<AuthenticationResponse>(url,authenticationRequest)
  }
 // setUserToken (authenticationResponse: AuthenticationResponse){
   // localStorage.setItem("accesstoken",JSON.stringify(authenticationResponse))

 // }
  register(registerRequest: RegisterRequest):Observable<Reponse>{
    const url=this.baseUrl+"/register-stagiair"
    return this.httpClient.post<Reponse>(url,registerRequest)
  }

  registerexpert(registerRequest: Expert):Observable<Reponse>{
    const url=this.baseUrl+"/registerExpert"
    return this.httpClient.post<Reponse>(url,registerRequest)
  }
  registerresposable(registerRequest: Respsociete):Observable<Reponse>{
    const url=this.baseUrl+"/registerResponsableSociete"
    return this.httpClient.post<Reponse>(url,registerRequest)
  }


   setUserToken (authenticationResponse: AuthenticationResponse){
    localStorage.setItem("accessToken",JSON.stringify(authenticationResponse))
  const token = authenticationResponse.accessToken;
  if (token) {
  const decodedToken = jwtDecode(token) as any;
  const fullname = decodedToken.fullname;
  localStorage.setItem("fullname", fullname);
  const userId = decodedToken.userId;
  localStorage.setItem("userId", userId);
  const role = decodedToken.role;
  localStorage.setItem("role", role);

  console.log("uuuuuuuuuuuuuuuuuuuuuuuuuu")
  console.log("HHHHHHHHH",decodedToken)
    }


}
/*getrole(){
var user:any
user=localStorage.getItem("accesstoken")
return JSON.parse(user).role

}*/

  getRole = () => {
    var user: any;
    user = localStorage.getItem('accessToken');
    let token = JSON.parse(user).token;
    const decodedToken = JSON.parse(atob(token.split('.')[1]));
    return decodedToken.authorities[0].authority;
  }

  //update profil
  updateprofilstagiaire(registerRequest: CrudprofilStagiaireDTO):Observable<Reponse>{
    const url=this.baseUrl1+"/update"
    return this.httpClient.post<Reponse>(url,registerRequest)
  }



}


