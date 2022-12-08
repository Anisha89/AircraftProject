import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Mo18 } from './mo18.model';

@Injectable({
  providedIn: 'root'
})
export class Mo18Service {

  
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
  
   
    public fetchUserListFromRemotemo18():Observable<any>
    {
      return this._http.get <any> ("http://localhost:8080/getmo18list");
    }
  
    public fetchUserByIdFromRemotemo18(id:number):Observable <any>
    {
      return this._http.get <any> ("http://localhost:8080/getmo18byid/"+id);
    }
  
    public addUsertoRemotemo18(mo18:Mo18):Observable <any>{
      return this._http.post<any>("http://localhost:8080/addmo18",mo18);
     }
  
    public deleteUserByIdFromRemotemo18(id:number):Observable <any>
    {
      return this._http.delete<any>("http://localhost:8080/deletemo18byidtest/"+id);
    }
  
    public getdatamo18(pa:Number,per:Number):Observable <any>
    {
      return this._http.get <any> ("http://localhost:8080/mo18/page/"+pa +"/"+per);
    }
  
    public  fetchfindlastmo18():Observable <any>
    {
      return this._http.get <any> ("http://localhost:8080/findlastmo18");
    }
  
    public countrecordmo18():Observable <any>
    {
      return this._http.get <any>("http://localhost:8080/getcountlistmo12");
    }
  
  /*  public deleteimageservice(sn:string):Observable <any>
    {
      return this._http.get <any>("http://localhost:8080/deleteservice/"+sn);
    }*/
    public counteruserecordmo18(no1:String):Observable <any>
    {
      return this._http.get <any>("http://localhost:8080/getcountmo18?seqno="+ no1);
    }
    public fetchUserBymo18(page:number, per:number, no1:String):Observable <any>
    {
      return this._http.get <any> ("http://localhost:8080/displaymo18/"+page+"/"+per+"?seqno="+no1);
    } 
   
 
}

