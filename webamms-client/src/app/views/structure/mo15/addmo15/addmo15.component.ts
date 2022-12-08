import { Component, OnInit } from '@angular/core';

import { from } from 'rxjs';

import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Mo15, Tools,Spare,Consumable, Gse  } from '../mo15.model';
import { Mo15Service } from '../mo15.service';
import { ConsumableserviceService } from '../../../../service/consumableservice.service';
import { NotificationService } from '../../../../service/toastrnotification.service';
import { SpareserviceService } from '../../../../service/spareservice.service';
import { GseserviceService } from '../../../../service/gseservice.service';
import { ToolsserviceService } from '../../../../service/toolsservice.service';


@Component({
  selector: 'app-addmo15',
  templateUrl: './addmo15.component.html',
  styleUrls: ['./addmo15.component.css']
})

export class Addmo15Component implements OnInit {
  mo15 =new Mo15();
  ischecked:boolean=false;
  checkname:any;
  checknamesp:any;
  checknametl:any;
  checknamecl:any;
  isgse=true;
  isspare=true;
  istools=true;
  isconsumable=true;
  needcheck=false;
  nam=['1','2','3','4'];
  nam1=['37','36','35'];
  nam2: Array<any> = [];
  nam3:Array<any>= [];
  nam4:Array<any>= [];
  nam5:Array<any>=[];
  namestr:any;
  namestrsp:any;
  namestrtl:any;
  namestrcl:any;
  rec1:any;
  rec1sp:any;
  rectl:any;
   reccl:any;
  data:any;
  dataspare:any;
  datatools:any;
  dataconsumable:any;
  m1:any=100;
  m1sp:any=100;
  m1tl:any=100;
  m1cl:any=100;
  d:any;
  x:any;
  k:any=1;
l:any=0;  
  start:any;
  name:string;
  namesp:string;
  nametl:string;
  namecl:string;
copystr:any;
copystrsp:any;
copystrtl:any;
copystrcl:any;
  str1:any='';
  str:any;
  str2:any='';
  str3:any='';
  res1:any;
  res:any;
  res2:number=0;
  res2sp:number=0;
  res2tl:number=0;
  res2cl:number=0;
  res3:any;
  res3sp:any;
  res3tl:any;
  res3cl:any;
    m:any;
    config:any;
    identify:boolean=false;
    gseno:any;
    totalItems:any;
    currentPage: number = 1;
  gse = new Gse();
  spare=new Spare();
  tools = new Tools();
  consumable=new Consumable();
;  
  constructor(private _router:Router,private consumableservice:ConsumableserviceService,private toolsservice:ToolsserviceService, private _service :Mo15Service,private _gseservice:GseserviceService,private _spareservice:SpareserviceService,private _http:HttpClient,private toastr:NotificationService) { }

  ngOnInit(): void {
    
    this._gseservice.fetchUserListFromRemotegse().subscribe(data=>{
      this.gse=data
      console.log(this.gse);
    })
 
    this._spareservice.fetchUserListFromRemotespare().subscribe(data=>{
      this.dataspare=data;
      console.log(this.dataspare)
    })
    this.toolsservice.fetchUserListFromRemotetools().subscribe(data=>{
      this.datatools=data
      console.log(this.datatools)
    })
 
 this.consumableservice.fetchUserListFromRemoteconsumable().subscribe(data=>{
   this.dataconsumable=data
   console.log(this.dataconsumable)
 })
  }
  
  

 

  /**Checkfun1 end */


  


adduserformsubmit(){
    console.log("Welcome to SPARE Registration");
    this.d=Date.now().toString();

 this.mo15.date_created=this.d;
 if (this.copystr==null||this.copystr==undefined)
 {
 this.mo15.gsenos='00';
 }
 else{
  this.mo15.gsenos=this.copystr;
 }
 if (this.copystrsp==null||this.copystrsp==undefined)
 {
 this.mo15.sparenos='00';
 }
 else{
  this.mo15.sparenos=this.copystrsp;
 }
 if (this.copystrtl==null||this.copystrtl==undefined)
 {
 this.mo15.toolsnos='00';
 }
 else{
  this.mo15.toolsnos=this.copystrtl;
 }
 if (this.copystrcl==null||this.copystrcl==undefined)
 {
 this.mo15.consumablenos='00';
 }
 else{
  this.mo15.consumablenos=this.copystrcl;
 }
console.log(this.mo15.gsenos);
console.log(this.mo15.toolsnos);
  this._service.addUsertoRemotemo15(this.mo15).subscribe(
    data=>
   {
     console.log(this.mo15.gsenos);
     console.log("data added successfully");
     this.toastr.showSuccess('Mo15 service added successfully', "Mo15 service");
      this._router.navigate(['/structure/mo15']);

    },
    error=> 
    {console.log("error");
    this.toastr.showError(error,'Mo15 service');
  }
    
    

  )
}

function1(e:any,id:any)
{
  
  if(e.target.checked)
  {
  
  //this.gseno=parseInt(id);
  
    if (this.name==undefined )
    {
     // alert("i m undefined");
        this.name=id;
        this.nam2[0]=id;
    }
    else    
    {
             this.name=this.name+","+id;

        this.nam2.push(id);
     }
      console.log("selid:"+this.name);
      console.log("selid array"+this.nam2);
      this.copystr=this.nam2.toString();
      
    }/*checked*/
  else
    {
    
     
      var index=this.nam2.indexOf(id);
    //  alert(index);
      if (index >-1)
      {
        this.nam2.splice(index,1);
      }
        console.log("Un checked"+id);
        this.name=this.str1;
    //    console.log("The name is"+this.name);
        console.log("the name of nam2="+this.nam2);
        this.copystr=this.nam2.toString();

       
    }




    this.namestr=this.name;
    console.log(typeof(this.namestr));
    if (typeof(this.namestr==='number'))
    {
      this.namestr=this.namestr.toString();
    }

    
    
  }/*function1*/

  /*function 2 starts*/
  function2(e:any,id:any)
{
  
  if(e.target.checked)
  {
  
  //this.gseno=parseInt(id);
  
    if (this.namesp==undefined )
    {
     // alert("i m undefined");
        this.namesp=id;
        this.nam3[0]=id;
    }
    else    
    {
             this.namesp=this.namesp+","+id;

        this.nam3.push(id);
     }
      console.log("selid in spare:"+this.namesp);
      console.log("selid array in spare"+this.nam3);
      this.copystrsp=this.nam3.toString();
      
    }/*checked*/
  else
    {
    
     
      var index1=this.nam3.indexOf(id);
    //  alert(index1);
      if (index1 >-1)
      {
        this.nam3.splice(index1,1);
      }
        console.log("Un checked"+id);
        this.namesp=this.str1;
    //    console.log("The name is"+this.name);
        console.log("the name of nam2="+this.nam3);
        this.copystrsp=this.nam3.toString();

       
    }




    this.namestrsp=this.namesp;
    console.log(typeof(this.namestrsp));
    if (typeof(this.namestrsp==='number'))
    {
      this.namestrsp=this.namestrsp.toString();
    }

    
    
  }/*function2*/

  function3(e:any,id:any)
{
  
  if(e.target.checked)
  {
  
  //this.gseno=parseInt(id);
  
    if (this.nametl==undefined )
    {
     // alert("i m undefined");
        this.nametl=id;
        this.nam4[0]=id;
    }
    else    
    {
             this.nametl=this.nametl+","+id;

        this.nam4.push(id);
     }
      console.log("selid in spare:"+this.nametl);
      console.log("selid array in tools"+this.nam4);
      this.copystrtl=this.nam4.toString();
      
    }/*checked*/
  else
    {
    
     
      var index2=this.nam4.indexOf(id);
    //  alert(index1);
      if (index2 >-1)
      {
        this.nam4.splice(index2,1);
      }
        console.log("Un checked"+id);
        this.nametl=this.str2;
    //    console.log("The name is"+this.name);
        console.log("the name of nam4="+this.nam4);
        this.copystrtl=this.nam4.toString();

       
    }




    this.namestrtl=this.nametl;
    console.log(typeof(this.namestrtl));
    if (typeof(this.namestrtl==='number'))
    {
      this.namestrtl=this.namestrtl.toString();
    }

    
    
  }

  function4(e:any,id:any)
  {
    
    if(e.target.checked)
    {
    
    //this.gseno=parseInt(id);
    
      if (this.namecl==undefined )
      {
       // alert("i m undefined");
          this.namecl=id;
          this.nam5[0]=id;
      }
      else    
      {
               this.namecl=this.namecl+","+id;
  
          this.nam5.push(id);
       }
        console.log("selid in spare:"+this.namecl);
        console.log("selid array in tools"+this.nam5);
        this.copystrcl=this.nam5.toString();
        
      }/*checked*/
    else
      {
      
       
        var index3=this.nam5.indexOf(id);
      //  alert(index1);
        if (index3 >-1)
        {
          this.nam5.splice(index3,1);
        }
          console.log("Un checked"+id);
          this.namecl=this.str3;
      //    console.log("The name is"+this.name);
          console.log("the name of nam5="+this.nam5);
          this.copystrcl=this.nam5.toString();
  
         
      }
  
  
  
  
      this.namestrcl=this.namecl;
      console.log(typeof(this.namestrcl));
      if (typeof(this.namestrcl==='number'))
      {
        this.namestrcl=this.namestrcl.toString();
      }
  
      
      
    }
  selectChangeHandler (event: any) {
    //update the ui
    console.log( event.target.value);
    this.mo15.type=event.target.value;
  }


}