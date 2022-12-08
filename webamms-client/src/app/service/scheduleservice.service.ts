import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Schedule } from "../model/schedule";

import { Observable, BehaviorSubject } from "rxjs";
import { Servicehistory } from "../model/servicehistory";
@Injectable({
  providedIn: "root",
})
export class ScheduleserviceService {
  private content = new BehaviorSubject<string>("");
  private usercontent = new BehaviorSubject<string>("");
  private rowperpage = new BehaviorSubject<string>("");
  private content1 = new BehaviorSubject<string>("");
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
    console.log("The status1 content value is= " + this.content1.value);
  }
  public settingupdate(t1) {
    console.log("Rows per page in register.ts " + t1);
    this.rowperpage.next(t1);
    console.log("Rows per page in register.ts " + this.rowperpage.value);
  }

  constructor(private _http: HttpClient) { }

  public fetchUserListFromRemoteschedule(): Observable<any> {
    return this._http.get<any>("http://localhost:8080/getschedulelist");
  }
  // servicehistory url
  public fetchUserListFromRemoteservicehistory(): Observable<any> {
    return this._http.get<any>("http://localhost:8080/getServicehistorylist");
  }

  public fetchUserByIdFromRemoteschedule(id: number): Observable<any> {
    return this._http.get<any>("http://localhost:8080/getschedulebyid/" + id);
  }

  public fetchUserListFromRemoteaircraft(aircraft: string): Observable<any> {
    return this._http.get<any>(
      "http://localhost:8080/scheduleaircraft/" + aircraft
    );
  }
  public fetchUserListFromRemoteservice(service: string): Observable<any> {
    return this._http.get<any>(
      "http://localhost:8080/servicehistoryservice/" + service
    );
  }

  public fetchUserListFromRemoteserviceaircraft(
    aircraft: string
  ): Observable<any> {
    return this._http.get<any>(
      "http://localhost:8080/servicehistoryaircraft/" + aircraft
    );
  }

  //servicehistory url
  public fetchUserByIdFromRemoteservicehistory(id: Number): Observable<any> {
    return this._http.get<any>(
      "http://localhost:8080/getServicehistorybyid/" + id
    );
  }

  public addUsertoRemoteschedule(schedule: Schedule): Observable<any> {
    return this._http.post<any>("http://localhost:8080/addschedule", schedule);
  }
  // servicehistory url
  public addUsertoRemoteservicehistory(
    servicehistory: Servicehistory
  ): Observable<any> {
    return this._http.post<any>(
      "http://localhost:8080/addServicehistory",
      servicehistory
    );
  }

  public deleteUserByIdFromRemoteschedule(id: number): Observable<any> {
    return this._http.delete<any>(
      "http://localhost:8080/deleteschedulebyidtest/" + id
    );
  }

  public getdataschedule(pa: Number, per: Number): Observable<any> {
    return this._http.get<any>(
      "http://localhost:8080/schedule1/page/" + pa + "/" + per
    );
  }
  public getdataservicehistory(pa: Number, per: Number): Observable<any> {
    return this._http.get<any>(
      "http://localhost:8080/servicehistory1/page/" + pa + "/" + per
    );
  }

  public fetchfindlastschedule(): Observable<any> {
    return this._http.get<any>("http://localhost:8080/findlastschedule");
  }

  public fetchfindlastservicehistory(): Observable<any> {
    return this._http.get<any>("http://localhost:8080/findlastservicehistory");
  }

  public countrecordschedule(): Observable<any> {
    return this._http.get<any>("http://localhost:8080/getcountlistschedule");
  }
  public countrecordservicehistory(): Observable<any> {
    return this._http.get<any>(
      "http://localhost:8080/getcountlistservicehistory"
    );
  }
  public counteruserecordschedule(no1: String): Observable<any> {
    return this._http.get<any>(
      "http://localhost:8080/getcountschedule?service=" + no1
    );
  }
  public counteruserecordservicehistory(no1: String): Observable<any> {
    return this._http.get<any>(
      "http://localhost:8080/getcountservicehistory?service=" + no1
    );
  }

  public fetchUserByschedule(
    page: number,
    per: number,
    no1: String
  ): Observable<any> {
    return this._http.get<any>(
      "http://localhost:8080/displayschedule/" +
      page +
      "/" +
      per +
      "?concessionnates=" +
      no1
    );
  }

  public fetchUserByservicehistory(
    page: number,
    per: number,
    no1: String
  ): Observable<any> {
    return this._http.get<any>(
      "http://localhost:8080/displayservicehistory/" +
      page +
      "/" +
      per +
      "?service=" +
      no1
    );
  }

  public fetchUserByservicehistory1(): Observable<any> {
    return this._http.get<any>(
      "http://localhost:8080/getallbydatebetween?startdate=2018-01-01&enddate=2025-12-30"
    );
  }

  public fetchUserByservicedue(): Observable<any> {
    return this._http.get<any>("http://localhost:8080/findServiceDue1");
  }

  public getCompletedCount(): Observable<any> {
    return this._http.get<any>("http://localhost:8080/getCompletedCount");
  }

  public getNotStartedCount(): Observable<any> {
    return this._http.get<any>("http://localhost:8080/getNotStartedCount");
  }

  public getProgressCount(): Observable<any> {
    return this._http.get<any>("http://localhost:8080/getProgressCount");
  }

  public getservicedue3554(): Observable<any> {
    return this._http.get<any>("http://localhost:8080/getservicedue3554");
  }

  public getservicedue3555(): Observable<any> {
    return this._http.get<any>("http://localhost:8080/getservicedue3555");
  }

  public getservicedue3556(): Observable<any> {
    return this._http.get<any>("http://localhost:8080/getservicedue3556");
  }

  public getStatusAvailable(): Observable<any> {
    return this._http.get<any>(
      "http://localhost:8080/api/v1/getStatusAvailable"
    );
  }

  public getStatusAog(): Observable<any> {
    return this._http.get<any>("http://localhost:8080/api/v1/getStatusAog");
  }

  public getStatusInspection(): Observable<any> {
    return this._http.get<any>(
      "http://localhost:8080/api/v1/getStatusInspection"
    );
  }
}
