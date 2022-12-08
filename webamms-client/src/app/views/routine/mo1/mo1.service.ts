import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Mo1 } from './mo1.model';

@Injectable({
  providedIn: 'root'
})
export class Mo1Service {

  
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
  
   
    public fetchUserListFromRemotemo1():Observable <any>
    {
      return this._http.get <any> ("http://localhost:8080/getmo1list");
    }
  
    public fetchUserByIdFromRemotemo1(id:number):Observable <any>
    {
      return this._http.get <any> ("http://localhost:8080/getmo1byid/"+id);
    }
  
    public addUsertoRemotemo1(mo1:Mo1):Observable <any>{
      return this._http.post<any>("http://localhost:8080/addmo1",mo1);
     }
  
    public deleteUserByIdFromRemotemo1(id:number):Observable <any>
    {
      return this._http.delete<any>("http://localhost:8080/deletemo1byidtest/"+id);
    }
  
    public getdatamo1(pa:Number,per:Number):Observable <any>
    {
      return this._http.get <any> ("http://localhost:8080/mo1/page/"+pa +"/"+per);
    }
  
    public  fetchfindlastmo1():Observable <any>
    {
      return this._http.get <any> ("http://localhost:8080/findlastmo1");
    }
  
    public countrecordmo1():Observable <any>
    {
      return this._http.get <any>("http://localhost:8080/getcountlistmo1");
    }
  
  /*  public deleteimageservice(sn:string):Observable <any>
    {
      return this._http.get <any>("http://localhost:8080/deleteservice/"+sn);
    }*/
    public counteruserecordmo1(no1:String):Observable <any>
    {
      return this._http.get <any>("http://localhost:8080/getcountmo1?seqno="+ no1);
    }
    public fetchUserBymo1(page:number, per:number, no1:String):Observable <any>
    {
      return this._http.get <any> ("http://localhost:8080/displaymo1/"+page+"/"+per+"?seqno="+no1);
    } 
   
 
}