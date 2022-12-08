import { Injectable, Type } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";
import {HttpClient,} from "@angular/common/http";
import { Service } from "../model/service";
@Injectable({
  providedIn: "root",
})
export class ServiceService {
  private content = new BehaviorSubject<string>("");
  private usercontent = new BehaviorSubject<string>("");
  private rowperpage = new BehaviorSubject<string>("");
  public share = this.content.asObservable();
  public share1 = this.usercontent.asObservable();
  public rowshare1 = this.rowperpage.asObservable();

  public updatedata(text, text1) {
    console.log(text);
    this.content.next(text);
    console.log(text1);
    this.usercontent.next(text1);
    console.log("The Role content value is = " + this.content.value);
    console.log("The User content value is = " + this.usercontent.value);
  }
  public settingupdate(t1) {
    console.log("Rows per page in register.ts " + t1);
    this.rowperpage.next(t1);
    console.log("Rows per page in register.ts " + this.rowperpage.value);
  }
  constructor(private _http: HttpClient) { }

  public fetchUserListFromRemotegse(): Observable<any> {
    return this._http.get<any>("http://localhost:8080/getgselist");
  }

  public fetchUserListFromRemotetools(): Observable<any> {
    return this._http.get<any>("http://localhost:8080/gettoolslist");
  }
  public fetchUserListFromRemotespare(): Observable<any> {
    return this._http.get<any>("http://localhost:8080/getsparelist");
  }

  public fetchUserListFromRemoteconsumable(): Observable<any> {
    return this._http.get<any>("http://localhost:8080/getconsumablelist");
  }

  public fetchUserListFromRemoteservice(): Observable<any> {
    return this._http.get<any>("http://localhost:8080/getservicelist");
  }

  public fetchUserByIdFromRemoteservice(id: number): Observable<any> {
    return this._http.get<any>("http://localhost:8080/getservicebyid/" + id);
  }

  public addUsertoRemoteservice(service: Service): Observable<any> {
    return this._http.post<any>("http://localhost:8080/addservice", service);
  }

  public deleteUserByIdFromRemoteservice(id: number): Observable<any> {
    return this._http.delete<any>(
      "http://localhost:8080/deleteservicebyidtest/" + id
    );
  }

  public getdataservice(pa: Number, per: Number): Observable<any> {
    return this._http.get<any>(
      "http://localhost:8080/service1/page/" + pa + "/" + per
    );
  }

  public fetchfindlastservice(): Observable<any> {
    return this._http.get<any>("http://localhost:8080/findlastservice");
  }

  public countrecordservice(): Observable<any> {
    return this._http.get<any>("http://localhost:8080/getcountlistservice");
  }

  public deleteimageservice(sn: string): Observable<any> {
    return this._http.get<any>("http://localhost:8080/deleteservice/" + sn);
  }
  public counteruserecordservice(no1: String): Observable<any> {
    return this._http.get<any>(
      "http://localhost:8080/getcountservice?seqno=" + no1
    );
  }
  public fetchUserByservice(
    page: number,
    per: number,
    no1: String
  ): Observable<any> {
    return this._http.get<any>(
      "http://localhost:8080/displayservice/" +
      page +
      "/" +
      per +
      "?seqno=" +
      no1
    );
  }
}
