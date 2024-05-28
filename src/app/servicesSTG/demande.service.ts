import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Demande } from '../modelSTG/demande';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {
  private baseUrl=environment.baseurl+"/Demande"
  constructor(private router : Router,private httpClient: HttpClient) { }


  addDemande(addDemande : Demande):Observable<Demande>{
    console.log("fffffffffffffff",addDemande)
    const url=this.baseUrl+"/save"
    return this.httpClient.post<Demande>(url,addDemande)
  }

  finddpetById(id: number): Observable<Demande> {
    return this.httpClient.get<Demande>(`${this.baseUrl}/findbyid/${id}`)
    
  }
  getList(): Observable<Demande[]> {
    return this.httpClient.get<Demande[]>(`${this.baseUrl}/findall`)
    .pipe(
      map((response:any) => response as Demande[])
    );
    
  }

  deleteById(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}/delete/${id}`)
    
  }


}
