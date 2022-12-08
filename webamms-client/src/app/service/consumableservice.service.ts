import { Injectable } from '@angular/core';
import { Consumable } from '../model/consumable';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ConsumableserviceService {
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


  public fetchUserListFromRemoteconsumable(): Observable<any> {
    return this._http.get<any>("http://localhost:8080/getconsumablelist");
  }

  public fetchUserByIdFromRemoteconsumable(id: number): Observable<any> {
    return this._http.get<any>("http://localhost:8080/getconsumablebyid/" + id);
  }

  public addUsertoRemoteconsumable(consumable: Consumable): Observable<any> {
    return this._http.post<any>("http://localhost:8080/addconsumable", consumable);
  }

  public deleteUserByIdFromRemoteconsumable(id: number): Observable<any> {
    return this._http.delete<any>("http://localhost:8080/deleteconsumablebyidtest/" + id);
  }

  public getdataconsumable(pa: Number, per: Number): Observable<any> {
    return this._http.get<any>("http://localhost:8080/consumable1/page/" + pa + "/" + per);
  }

  public fetchfindlastconsumable(): Observable<any> {
    return this._http.get<any>("http://localhost:8080/findlastconsumable");
  }

  public countrecordconsumable(): Observable<any> {
    return this._http.get<any>("http://localhost:8080/getcountlistconsumable");
  }

  public deleteimageconsumable(sn: string): Observable<any> {
    return this._http.get<any>("http://localhost:8080/delete/" + sn);
  }
  public counteruserecordconsumable(no1: String): Observable<any> {
    return this._http.get<any>("http://localhost:8080/getcountconsumable?consumableno=" + no1);
  }
  public fetchUserByconsumable(page: number, per: number, no1: String): Observable<any> {
    return this._http.get<any>("http://localhost:8080/displayconsumable/" + page + "/" + per + "?consumableno=" + no1);
  }
  public fetchUserListFromRemoteconsumablecondition(values: string): Observable<any> {
    return this._http.get<any>("http://localhost:8080/getconsumablelist1/" + values);
  }
}