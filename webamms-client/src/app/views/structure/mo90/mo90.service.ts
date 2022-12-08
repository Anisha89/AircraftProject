import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Mo90 } from './mo90.model';

@Injectable({
  providedIn: 'root'
})
export class Mo90Service {

  
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

  
   
    public fetchUserListFromRemotemo90():Observable <any>
    {
      return this._http.get <any> ("http://localhost:8080/getmo90list");
    }
  
    public fetchUserByIdFromRemotemo90(id:number):Observable <any>
    {
      return this._http.get <any> ("http://localhost:8080/getmo90byid/"+id);
    }
  
    public addUsertoRemotemo90(mo90:Mo90):Observable <any>{
      return this._http.post<any>("http://localhost:8080/addmo90",mo90);
     }
  
    public deleteUserByIdFromRemotemo90(id:number):Observable <any>
    {
      return this._http.delete<any>("http://localhost:8080/deletemo90byidtest/"+id);
    }
  
    public getdatamo90(pa:Number,per:Number):Observable <any>
    {
      return this._http.get <any> ("http://localhost:8080/mo90/page/"+pa +"/"+per);
    }
  
    public  fetchfindlastmo90():Observable <any>
    {
      return this._http.get <any> ("http://localhost:8080/findlastmo90");
    }
  
    public countrecordmo90():Observable <any>
    {
      return this._http.get <any>("http://localhost:8080/getcountlistmo90");
    }
  
  /*  public deleteimageservice(sn:string):Observable <any>
    {
      return this._http.get <any>("http://localhost:8080/deleteservice/"+sn);
    }*/
    public counteruserecordmo90(no1:String):Observable <any>
    {
      return this._http.get <any>("http://localhost:8080/getcountmo90?seqno="+ no1);
    }
    public fetchUserBymo90(page:number, per:number, no1:String):Observable <any>
    {
      return this._http.get <any> ("http://localhost:8080/displaymo90/"+page+"/"+per+"?seqno="+no1);
    } 
   
 
}