
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Sortie } from '../model/sortie';

@Injectable({
  providedIn: 'root'
})
export class SortieService {
  
  constructor(private http:HttpClient) { }
  private baseURL="http://localhost:8080/api/v1/sortie";

  public fetchUserListFromRemotesortie(aircraft:string):Observable <any>
  {
    return this.http.get <any> ("http://localhost:8080/api/v1/Sortie/"+aircraft);
  }
  public fetchsortie(aircraft:string,startDate:number,endDate:number, optradio:number):Observable <any>
  {
    let url = "http://localhost:8080/api/v1/Sortie/"+aircraft+"/"+startDate+"/"+endDate+"/"+optradio;
    console.log('url = ' + url);
    return this.http.get <any> (url);
  }



  getSortieList(): Observable<Sortie[]>{
    return this.http.get<Sortie[]>(`${this.baseURL}`);
  }


  getSortiebyid(id: number): Observable<Sortie>{
    return this.http.get<Sortie>(`${this.baseURL}/${id}`);
  }


  createSortie(sortie: Sortie): Observable<Object>{
    return  this.http.post(`${this.baseURL}`, sortie);
  }

  updateSortie(id: number, sortie: Sortie): Observable<Object>{
    return this.http.put(`${this.baseURL}/${id}`, sortie);
  }

  deleteSortie(id: number): Observable<Object>{
    return this.http.delete(`${this.baseURL}/${id}`);
  }
}