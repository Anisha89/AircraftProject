import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Observable, BehaviorSubject } from 'rxjs';
import {HttpClient,HttpHeaderResponse, HttpParams}from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
private content=new BehaviorSubject<string>('');
private usercontent=new BehaviorSubject<string>('');
private rowperpage =new BehaviorSubject<string>('');
private content1=new BehaviorSubject<string>('');
public share=this.content.asObservable();
public share1=this.usercontent.asObservable();
public rowshare1=this.rowperpage.asObservable();
public share2=this.usercontent.asObservable();
  constructor(private _http:HttpClient  ) { }
 public updatedata(text,text1,text2)
{
  console.log(text);
  this.content.next(text);
  console.log(text1);
  this.usercontent.next(text1);
  this.content1.next(text2)
  console.log("The Role content value is = "+this.content.value);
  console.log("The User content value is = "+this.usercontent.value);

} 
public settingupdate(t1) 
{
  console.log("Rows per page in register.ts "+t1);
  this.rowperpage.next(t1);
  console.log("Rows per page in register.ts "+this.rowperpage.value);
}
  public loginUserFromRemote(user:User):Observable <any>{
return this._http.post<any>("http://localhost:8080/login",user);
  }
  public registeruserFromRemote(user:User):Observable <any>{
    return this._http.post<any>("http://localhost:8080/registeruser",user);
 
  }
  public fetchUserListFromRemote():Observable <any>
  {
    return this._http.get <any> ("http://localhost:8080/getuserlist");
  }
  public fetchUserByIdFromRemote(id:number):Observable <any>
  {
    return this._http.get <any> ("http://localhost:8080/getuserbyid/"+id);
  }
  public addUsertoRemote(user:User):Observable <any>{
    return this._http.post<any>("http://localhost:8080/adduser",user);
 
  }
  public deleteUserByIdFromRemote(id:number):Observable <any>
  {
    return this._http.delete<any>("http://localhost:8080/deleteuserbyidtest/"+id);
  }
  public getdata(pa:Number,per:Number):Observable <any>
  {
    return this._http.get <any> ("http://localhost:8080/user1/page/"+pa +"/"+per);
  }
  public  fetchfindlast():Observable <any>
  {
    return this._http.get <any> ("http://localhost:8080/findlast");
  }
  public countrecord():Observable <any>
  {
    return this._http.get <any>("http://localhost:8080/getcountlist");
  }
  public deleteimage(sn:string):Observable <any>
  {
    return this._http.get <any>("http://localhost:8080/delete/"+sn);
  }
  public fetchUserByuseremail(page:number, per:number, name:String):Observable <any>
  {
    return this._http.get <any> ("http://localhost:8080/displayusername/"+page+"/"+per+"?username="+name);
  }
  public counteruserecord(name1:String):Observable <any>
  {
    return this._http.get <any>("http://localhost:8080/getcountuser?username="+name1);
  }
  
   public forgetmailsend(user:User):Observable <any>
  {
      
    return this._http.post<string>("http://localhost:8080/forgotpassword",user);
  }
 
public reset(reset_token:string,password:string):Observable<any>{
  return this._http.put<any>('http://localhost:8080/resetpassword?token='+ reset_token,{
 password
 });
}

}
