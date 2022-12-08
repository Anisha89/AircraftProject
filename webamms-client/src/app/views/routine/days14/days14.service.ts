import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Days14 } from './days14.model';

@Injectable({
  providedIn: 'root'
})
export class Days14Service {

  
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
    
     
      public fetchUserListFromRemotedays14():Observable <any>
      {
        return this._http.get <any> ("http://localhost:8080/getdays14list");
      }
    
      public fetchUserByIdFromRemotdays14(id:number):Observable <any>
      {
        return this._http.get <any> ("http://localhost:8080/getdays14byid/"+id);
      }
    
      public addUsertoRemotedays14(days14:Days14):Observable <any>{
        return this._http.post<any>("http://localhost:8080/adddays14",days14);
       }
    
      public deleteUserByIdFromRemotedays14(id:number):Observable <any>
      {
        return this._http.delete<any>("http://localhost:8080/deletedays14byidtest/"+id);
      }
    
      public getdatadays14(pa:Number,per:Number):Observable <any>
      {
        return this._http.get <any> ("http://localhost:8080/days14/page/"+pa +"/"+per);
      }
    
      public  fetchfindlastdays14():Observable <any>
      {
        return this._http.get <any> ("http://localhost:8080/findlastdays14");
      }
    
      public countrecorddays14():Observable <any>
      {
        return this._http.get <any>("http://localhost:8080/getcountlistdays14");
      }
    
    /*  public deleteimageservice(sn:string):Observable <any>
      {
        return this._http.get <any>("http://localhost:8080/deleteservice/"+sn);
      }*/
      public counteruserecorddays14(no1:String):Observable <any>
      {
        return this._http.get <any>("http://localhost:8080/getcountdays14?seqno="+ no1);
      }
      public fetchUserBydays14(page:number, per:number, no1:String):Observable <any>
      {
        return this._http.get <any> ("http://localhost:8080/displaydays14/"+page+"/"+per+"?seqno="+no1);
      } 
     
   
  }