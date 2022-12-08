import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Mo12 } from './mo12.model';

@Injectable({
  providedIn: 'root'
})
export class Mo12Service {

  
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
  
   
    public fetchUserListFromRemotemo12():Observable<any>
    {
      return this._http.get <any> ("http://localhost:8080/getmo12list");
    }
  
    public fetchUserByIdFromRemotemo12(id:number):Observable <any>
    {
      return this._http.get <any> ("http://localhost:8080/getmo12byid/"+id);
    }
  
    public addUsertoRemotemo12(mo12:Mo12):Observable <any>{
      return this._http.post<any>("http://localhost:8080/addmo12",mo12);
     }
  
    public deleteUserByIdFromRemotemo12(id:number):Observable <any>
    {
      return this._http.delete<any>("http://localhost:8080/deletemo12byidtest/"+id);
    }
  
    public getdatamo12(pa:Number,per:Number):Observable <any>
    {
      return this._http.get <any> ("http://localhost:8080/mo12/page/"+pa +"/"+per);
    }
  
    public  fetchfindlastmo12():Observable <any>
    {
      return this._http.get <any> ("http://localhost:8080/findlastmo12");
    }
  
    public countrecordmo12():Observable <any>
    {
      return this._http.get <any>("http://localhost:8080/getcountlistmo12");
    }
  
  /*  public deleteimageservice(sn:string):Observable <any>
    {
      return this._http.get <any>("http://localhost:8080/deleteservice/"+sn);
    }*/
    public counteruserecordmo12(no1:String):Observable <any>
    {
      return this._http.get <any>("http://localhost:8080/getcountmo12?seqno="+ no1);
    }
    public fetchUserBymo12(page:number, per:number, no1:String):Observable <any>
    {
      return this._http.get <any> ("http://localhost:8080/displaymo12/"+page+"/"+per+"?seqno="+no1);
    } 
   
 
}
