import { Injectable } from '@angular/core';
import { Gse } from '../model/gse';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GseserviceService {
  private content = new BehaviorSubject<string>('');
  private usercontent = new BehaviorSubject<string>('');
  private rowperpage = new BehaviorSubject<string>('');
  public share = this.content.asObservable();
  public share1 = this.usercontent.asObservable();
  public rowshare1 = this.rowperpage.asObservable();

  public updatedata(text, text1) {
    this.content.next(text);
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

  public fetchUserByIdFromRemotegse(id: number): Observable<any> {
    return this._http.get<any>("http://localhost:8080/getgsebyid/" + id);
  }

  public addUsertoRemotegse(gse: Gse): Observable<any> {
    return this._http.post<any>("http://localhost:8080/addgse", gse);
  }

  public deleteUserByIdFromRemotegse(id: number): Observable<any> {
    return this._http.delete<any>("http://localhost:8080/deletegsebyidtest/" + id);
  }

  public getdatagse(pa: Number, per: Number): Observable<any> {
    return this._http.get<any>("http://localhost:8080/gse1/page/" + pa + "/" + per);
  }

  public fetchfindlastgse(): Observable<any> {
    return this._http.get<any>("http://localhost:8080/findlastgse");
  }

  public countrecordgse(): Observable<any> {
    return this._http.get<any>("http://localhost:8080/getcountlistgse");
  }

  public deleteimagegse(sn: string): Observable<any> {
    return this._http.get<any>("http://localhost:8080/delete/" + sn);
  }
  public counteruserecordgse(no1: String): Observable<any> {
    return this._http.get<any>("http://localhost:8080/getcountgse?gseno=" + no1);
  }
  public fetchUserBygse(page: number, per: number, no1: String): Observable<any> {
    return this._http.get<any>("http://localhost:8080/displaygse/" + page + "/" + per + "?gseno=" + no1);
  }
  public fetchUserListFromRemoteservicecondition(values: string): Observable<any> {
    return this._http.get<any>("http://localhost:8080/getgselist1/" + values);
  }
}
