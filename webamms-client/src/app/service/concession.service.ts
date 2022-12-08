import { Injectable } from "@angular/core";
import { HttpClient, HttpEvent, HttpRequest } from "@angular/common/http";
import { Observable, BehaviorSubject } from "rxjs";
import { Concession } from "../model/concession";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class ConcessionService {
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

  baseUrl = "http://localhost:8080";
  constructor(private _http: HttpClient) { }

  public fetchUserListFromRemoteconcession(): Observable<any> {
    return this._http.get<any>("http://localhost:8080/getConcessionlist");
  }

  public fetchUserByIdFromRemoteconcession(id: number): Observable<any> {
    return this._http.get<any>("http://localhost:8080/getConcessionbyid/" + id);
  }

  public addUsertoRemoteconcession(concession: Concession): Observable<any> {
    return this._http.post<any>(
      "http://localhost:8080/addConcession",
      concession
    );
  }

  public deleteUserByIdFromRemoteconcession(
    idconcession: number
  ): Observable<any> {
    return this._http.delete<any>(
      "http://localhost:8080/deleteConcessionbyid/" + idconcession
    );
  }

  public getdataconcession(pa: Number, per: Number): Observable<any> {
    return this._http.get<any>(
      "http://localhost:8080/concession1/page/" + pa + "/" + per
    );
  }
  public deleteUserByIdFromRemoteconcession1(id: number): Observable<any> {
    return this._http.delete<any>("http://localhost:8080/deleteconcessionbyidtest/" + id);
  }

  public displayconcession1(aircraft: string, page: number, per: number): Observable<any> {
    return this._http.get<any>("http://localhost:8080/displayconcession/" + aircraft + "/" + page + "/" + per);
  }
  public fetchUserByconcession(page: number, per: number): Observable<any> {
    return this._http.get<any>(
      "http://localhost:8080/concessionlist/" + page + "/" + per
    );
  }
  public fetchUserListFromRemoteaircraft(aircraft: string): Observable<any> {
    return this._http.get<any>(
      "http://localhost:8080/Concessionaircraft/" + aircraft
    );
  }

  public download(file: File): Observable<any> {
    // return this._http.get <any> ("http://localhost:8080/downloadpdf/"+file,{responseType:'blob' });

    return this._http
      .get("http://localhost:8080/downloadconcession/" + file, {
        responseType: "blob",
      })
      .pipe(
        map((response) => {
          return {
            filename: "yourFileName.pdf",
            data: response,
          };
        })
      );
  }

  public upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('POST', `${this.baseUrl}/uploadconcession`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this._http.request(req);
  }
}
