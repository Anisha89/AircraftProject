import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Mo24 } from './mo24.model';

@Injectable({
  providedIn: 'root'
})
export class Mo24Service {

  
  private content=new BehaviorSubject<string>('');
  private usercontent=new BehaviorSubject<string>('');
  private rowperpage =new BehaviorSubject<string>('');
  public share=this.content.asObservable();
  public share1=this.usercontent.asObservable();
  public rowshare1=this.rowperpage.asObservable();
    
   public updatedata(text,text1)
  {
    console.log(text);
    this.content.next(text);
    console.log(text1);
    this.usercontent.next(text1);
    console.log("The Role content value is = "+this.content.value);
    console.log("The User content value is = "+this.usercontent.value);
  
  } 
  public settingupdate(t1) 
  {
    console.log("Rows per page in register.ts "+t1);
    this.rowperpage.next(t1);
    console.log("Rows per page in register.ts "+this.rowperpage.value);
  }
    constructor(private _http:HttpClient) { }
  
    public fetchUserListFromRemotegse():Observable <any>
    {
      return this._http.get <any> ("http://localhost:8080/getgselist");
    }
    
   public fetchUserListFromRemotetools():Observable <any>
   {
     return this._http.get <any> ("http://localhost:8080/gettoolslist");
   }
   public fetchUserListFromRemotespare():Observable <any>
   {
     return this._http.get <any> ("http://localhost:8080/getsparelist");
   }
  
   public fetchUserListFromRemoteconsumable():Observable <any>
   {
     return this._http.get <any> ("http://localhost:8080/getconsumablelist");
   }

   
    public fetchUserListFromRemotemo24():Observable<any>
    {
      return this._http.get <any> ("http://localhost:8080/getmo24list");
    }
  
    public fetchUserByIdFromRemotemo24(id:number):Observable <any>
    {
      return this._http.get <any> ("http://localhost:8080/getmo24byid/"+id);
    }
  
    public addUsertoRemotemo24(mo24:Mo24):Observable <any>{
      return this._http.post<any>("http://localhost:8080/addmo24",mo24);
     }
  
    public deleteUserByIdFromRemotemo24(id:number):Observable <any>
    {
      return this._http.delete<any>("http://localhost:8080/deletemo24byidtest/"+id);
    }
  
    public getdatamo24(pa:Number,per:Number):Observable <any>
    {
      return this._http.get <any> ("http://localhost:8080/mo24/page/"+pa +"/"+per);
    }
  
    public  fetchfindlastmo24():Observable <any>
    {
      return this._http.get <any> ("http://localhost:8080/findlastmo24");
    }
  
    public countrecordmo24():Observable <any>
    {
      return this._http.get <any>("http://localhost:8080/getcountlistmo24");
    }
  
  /*  public deleteimageservice(sn:string):Observable <any>
    {
      return this._http.get <any>("http://localhost:8080/deleteservice/"+sn);
    }*/
    public counteruserecordmo24(no1:String):Observable <any>
    {
      return this._http.get <any>("http://localhost:8080/getcountmo24?seqno="+ no1);
    }
    public fetchUserBymo24(page:number, per:number, no1:String):Observable <any>
    {
      return this._http.get <any> ("http://localhost:8080/displaymo24/"+page+"/"+per+"?seqno="+no1);
    } 
   
 
}

