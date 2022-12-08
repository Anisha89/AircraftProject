
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, BehaviorSubject } from 'rxjs';
import { Servicehistory } from '../model/servicehistory';
@Injectable({
  providedIn: 'root'
})
export class ServicehistoryService {
  private content = new BehaviorSubject<string>('');
  private usercontent = new BehaviorSubject<string>('');
  private rowperpage = new BehaviorSubject<string>('');
  private content1 = new BehaviorSubject<string>('');
  public share = this.content.asObservable();
  public share1 = this.usercontent.asObservable();
  public rowshare1 = this.rowperpage.asObservable();
  public share2 = this.content1.asObservable();
  public updatedata(text, text1, text2) {
    console.log(text);
    this.content.next(text);
    console.log(text1);
    this.usercontent.next(text1);
    this.content1.next(text2);
    console.log(text2);

    console.log("The Role content value is = " + this.content.value);
    console.log("The User content value is = " + this.usercontent.value);
    console.log("The status1 content value is= " + this.content1.value)
  }
  public settingupdate(t1) {
    console.log("Rows per page in register.ts " + t1);
    this.rowperpage.next(t1);
    console.log("Rows per page in register.ts " + this.rowperpage.value);
  }

  constructor(private _http: HttpClient) { }



  // servicehistory url
  public fetchUserListFromRemoteservicehistory(): Observable<any> {
    return this._http.get<any>("http://localhost:8080/getServicehistorylist");
  }





  public fetchUserListFromRemoteservice(service: string): Observable<any> {
    return this._http.get<any>("http://localhost:8080/servicehistoryservice/" + service);
  }

  /*
  public fetchUserListFromRemoteserviceaircraft(aircraft:string):Observable <any>
  {
    return this._http.get <any> ("http://localhost:8080/servicehistoryaircraft/"+aircraft);
  }
  */

  public fetchUserListFromRemoteserviceaircraft(aircraft: string): Observable<any> {
    return this._http.get<any>("http://localhost:8080/servicehistoryaircraft/" + aircraft);
  }

  //servicehistory url
  public fetchUserByIdFromRemoteservicehistory(id: Number): Observable<any> {
    return this._http.get<any>("http://localhost:8080/getServicehistorybyid/" + id);
  }


  // servicehistory url
  public addUsertoRemoteservicehistory(servicehistory: Servicehistory): Observable<any> {
    return this._http.post<any>("http://localhost:8080/addServicehistory", servicehistory);
  }



  public getdataservicehistory(pa: Number, per: Number): Observable<any> {
    return this._http.get<any>("http://localhost:8080/servicehistory1/page/" + pa + "/" + per);
  }




  public fetchfindlastservicehistory(): Observable<any> {
    return this._http.get<any>("http://localhost:8080/findlastservicehistory");
  }


  public countrecordservicehistory(): Observable<any> {
    return this._http.get<any>("http://localhost:8080/getcountlistservicehistory");
  }

  public counteruserecordservicehistory(no1: String): Observable<any> {
    return this._http.get<any>("http://localhost:8080/getcountaircraftservicehistory?aircraft=" + no1);
  }



  public fetchUserByservicehistory(aircraft: string, page: number, per: number): Observable<any> {
    return this._http.get<any>("http://localhost:8080/displayservicehistory/" + aircraft + "/" + page + "/" + per);
  }

  public fetchUserByservicehistory1(startdate: any, enddate: any): Observable<any> {
    // return this._http.get <any> ("http://localhost:8080/getallbydatebetween?startdate=2018-01-01&enddate=2025-12-30");
    alert(startdate);
    return this._http.get<any>("http://localhost:8080/getallbydatebetween?startdate=" + startdate + "&enddate=" + enddate);
  }

}


