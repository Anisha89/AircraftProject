import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Mo120 } from './mo120.model';

@Injectable({
  providedIn: 'root'
})
export class Mo120Service {

  
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

  
   
    public fetchUserListFromRemotemo120():Observable <any>
    {
      return this._http.get <any> ("http://localhost:8080/getmo120list");
    }
  
    public fetchUserByIdFromRemotemo120(id:number):Observable <any>
    {
      return this._http.get <any> ("http://localhost:8080/getmo120byid/"+id);
    }
  
    public addUsertoRemotemo120(mo120:Mo120):Observable <any>{
      return this._http.post<any>("http://localhost:8080/addmo120",mo120);
     }
  
    public deleteUserByIdFromRemotemo120(id:number):Observable <any>
    {
      return this._http.delete<any>("http://localhost:8080/deletemo120byidtest/"+id);
    }
  
    public getdatamo120(pa:Number,per:Number):Observable <any>
    {
      return this._http.get <any> ("http://localhost:8080/mo120/page/"+pa +"/"+per);
    }
  
    public  fetchfindlastmo120():Observable <any>
    {
      return this._http.get <any> ("http://localhost:8080/findlastmo120");
    }
  
    public countrecordmo120():Observable <any>
    {
      return this._http.get <any>("http://localhost:8080/getcountlistmo120");
    }
  
  /*  public deleteimageservice(sn:string):Observable <any>
    {
      return this._http.get <any>("http://localhost:8080/deleteservice/"+sn);
    }*/
    public counteruserecordmo120(no1:String):Observable <any>
    {
      return this._http.get <any>("http://localhost:8080/getcountmo120?seqno="+ no1);
    }
    public fetchUserBymo120(page:number, per:number, no1:String):Observable <any>
    {
      return this._http.get <any> ("http://localhost:8080/displaymo120/"+page+"/"+per+"?seqno="+no1);
    } 
   
 
}