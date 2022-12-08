import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Aircraft } from '../model/aircraft';
import { Sortie } from '../model/sortie';
@Injectable({
  providedIn: 'root'
})
export class AircraftService {
  private content = new BehaviorSubject<string>('');
  public share = this.content.asObservable();
  private baseURL = "http://localhost:8080/api/v1/aircraftinfo";
  constructor(private http: HttpClient) { }

  getAircraftinfoList(): Observable<Aircraft[]> {
    return this.http.get<Aircraft[]>(`${this.baseURL}`);
  }

  getAircraftinfoById(id: number): Observable<Aircraft> {
    return this.http.get<Aircraft>(`${this.baseURL}/${id}`);
  }
  updateArcraftinfo(id: number, aircraftinfo: Sortie): Observable<Object> {
    return this.http.put(`${this.baseURL}/${id}`, aircraftinfo);
  }
  createAicraft(aircraftinfo: Aircraft): Observable<Object> {
    return this.http.post(`${this.baseURL}`, aircraftinfo);
  }
  public fetchUserListFromRemoteaircraft(aircraft: string): Observable<any> {
    return this.http.get<any>("http://localhost:8080/api/v1/Aircraft/" + aircraft);
  }

}
