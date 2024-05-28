import { Injectable } from '@angular/core';
import { CrudprofilStagiaireDTO } from '../modelSTG/crudprofil-stagiaire-dto';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudprofilStagiaireService {
  private baseUrl=environment.baseurl+"/profil"
  constructor(private router : Router,private httpClient: HttpClient) { }


  updateprof(crudprofilStagiaireDTO : CrudprofilStagiaireDTO):Observable<CrudprofilStagiaireDTO>{
    const url=this.baseUrl+"/update"
    return this.httpClient.post<CrudprofilStagiaireDTO>(url,crudprofilStagiaireDTO)
  }

  finddpetById(id: number): Observable<CrudprofilStagiaireDTO> {
    return this.httpClient.get<CrudprofilStagiaireDTO>(`${this.baseUrl}/findbyid/${id}`)
    
  }
}
