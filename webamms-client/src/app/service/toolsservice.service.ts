import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaderResponse, HttpParams } from '@angular/common/http';
import { Tools } from '../model/tools';
@Injectable({
  providedIn: 'root'
})
export class ToolsserviceService {
  private content = new BehaviorSubject<string>('');
  private usercontent = new BehaviorSubject<string>('');
  private rowperpage = new BehaviorSubject<string>('');
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


  public fetchUserListFromRemotetools(): Observable<any> {
    return this._http.get<any>("http://localhost:8080/gettoolslist");
  }

  public fetchUserByIdFromRemotetools(id: number): Observable<any> {
    return this._http.get<any>("http://localhost:8080/gettoolsbyid/" + id);
  }

  public addUsertoRemotetools(tools: Tools): Observable<any> {
    return this._http.post<any>("http://localhost:8080/addtools", tools);
  }

  public deleteUserByIdFromRemotetools(id: number): Observable<any> {
    return this._http.delete<any>("http://localhost:8080/deletetoolsbyidtest/" + id);
  }

  public getdatatools(pa: Number, per: Number): Observable<any> {
    return this._http.get<any>("http://localhost:8080/tools1/page/" + pa + "/" + per);
  }

  public fetchfindlasttools(): Observable<any> {
    return this._http.get<any>("http://localhost:8080/findlasttools");
  }

  public countrecordtools(): Observable<any> {
    return this._http.get<any>("http://localhost:8080/getcountlisttools");
  }

  public deleteimagetools(sn: string): Observable<any> {
    return this._http.get<any>("http://localhost:8080/delete/" + sn);
  }
  public counteruserecordtools(no1: String): Observable<any> {
    return this._http.get<any>("http://localhost:8080/getcounttools?toolsno=" + no1);
  }
  public fetchUserBytools(page: number, per: number, no1: String): Observable<any> {
    return this._http.get<any>("http://localhost:8080/displaytools/" + page + "/" + per + "?toolsno=" + no1);
  }
  public fetchUserListFromRemotetoolscondition(values: string): Observable<any> {
    return this._http.get<any>("http://localhost:8080/gettoolslist1/" + values);
  }
}
