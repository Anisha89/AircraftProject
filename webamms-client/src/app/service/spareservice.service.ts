import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaderResponse, HttpParams } from '@angular/common/http';
import { Spare } from '../model/spare';
@Injectable({
  providedIn: 'root'
})
export class SpareserviceService {

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


  public fetchUserListFromRemotespare(): Observable<any> {
    return this._http.get<any>("http://localhost:8080/getsparelist");
  }

  public fetchUserByIdFromRemotespare(id: number): Observable<any> {
    return this._http.get<any>("http://localhost:8080/getsparebyid/" + id);
  }

  public addUsertoRemotespare(spare: Spare): Observable<any> {
    return this._http.post<any>("http://localhost:8080/addspare", spare);
  }

  public deleteUserByIdFromRemotespare(id: number): Observable<any> {
    return this._http.delete<any>("http://localhost:8080/deletesparebyidtest/" + id);
  }

  public getdataspare(pa: Number, per: Number): Observable<any> {
    return this._http.get<any>("http://localhost:8080/spare1/page/" + pa + "/" + per);
  }

  public fetchfindlastspare(): Observable<any> {
    return this._http.get<any>("http://localhost:8080/findlastspare");
  }

  public countrecordspare(): Observable<any> {
    return this._http.get<any>("http://localhost:8080/getcountlistspare");
  }

  public deleteimagespare(sn: string): Observable<any> {
    return this._http.get<any>("http://localhost:8080/deletespare/" + sn);
  }
  public counteruserecordspare(no1: String): Observable<any> {
    return this._http.get<any>("http://localhost:8080/getcountspare?seqno=" + no1);
  }
  public fetchUserByspare(page: number, per: number, no1: String): Observable<any> {
    return this._http.get<any>("http://localhost:8080/displayspare/" + page + "/" + per + "?seqno=" + no1);
  }

  public fetchUserListFromRemotesparecondition(values: string): Observable<any> {
    return this._http.get<any>("http://localhost:8080/getsparelist1/" + values);
  }
}

