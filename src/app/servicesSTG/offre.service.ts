import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Offre } from '../modelSTG/offre';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OffreService {
idoff!:number
  private baseUrl=environment.baseurl+"/offrestage"
  constructor(private router : Router,private httpClient: HttpClient) { }


  addoffre(addoffre : Offre):Observable<Offre>{
    console.log("fffffffffffffff",addoffre)
    const url=this.baseUrl+"/save"
    return this.httpClient.post<Offre>(url,addoffre)
  }

  finddpetById(id: number): Observable<Offre> {
    return this.httpClient.get<Offre>(`${this.baseUrl}/findbyid/${id}`)
    
  }
  getList(): Observable<Offre[]> {
    return this.httpClient.get<Offre[]>(`${this.baseUrl}/findall`)
    .pipe(
      map((response:any) => response as Offre[])
    );
    
  }

  deleteById(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}/delete/${id}`)
    
  }


}
