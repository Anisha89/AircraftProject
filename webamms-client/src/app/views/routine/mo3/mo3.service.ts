import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Mo3 } from './mo3.model';

@Injectable({
  providedIn: 'root'
})
export class Mo3Service {

  
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
   
    public fetchUserListFromRemotemo3():Observable<any>
    {
      return this._http.get <any> ("http://localhost:8080/getmo3list");
    }
  
    public fetchUserByIdFromRemotemo3(id:number):Observable <any>
    {
      return this._http.get <any> ("http://localhost:8080/getmo3byid/"+id);
    }
  
    public addUsertoRemotemo3(mo3:Mo3):Observable <any>{
      return this._http.post<any>("http://localhost:8080/addmo3",mo3);
     }
  
    public deleteUserByIdFromRemotemo3(id:number):Observable <any>
    {
      return this._http.delete<any>("http://localhost:8080/deletemo3byidtest/"+id);
    }
  
    public getdatamo3(pa:Number,per:Number):Observable <any>
    {
      return this._http.get <any> ("http://localhost:8080/mo3/page/"+pa +"/"+per);
    }
  
    public  fetchfindlastmo3():Observable <any>
    {
      return this._http.get <any> ("http://localhost:8080/findlastmo3");
    }
  
    public countrecordmo3():Observable <any>
    {
      return this._http.get <any>("http://localhost:8080/getcountlistmo3");
    }
  
  /*  public deleteimageservice(sn:string):Observable <any>
    {
      return this._http.get <any>("http://localhost:8080/deleteservice/"+sn);
    }*/
    public counteruserecordmo3(no1:String):Observable <any>
    {
      return this._http.get <any>("http://localhost:8080/getcountmo3?seqno="+ no1);
    }
    public fetchUserBymo3(page:number, per:number, no1:String):Observable <any>
    {
      return this._http.get <any> ("http://localhost:8080/displaymo3/"+page+"/"+per+"?seqno="+no1);
    } 
   
 
}
