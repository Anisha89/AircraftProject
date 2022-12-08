import { Component, OnInit } from '@angular/core';



import { GseserviceService } from '../../../service/gseservice.service';
import { ServiceService } from '../../../service/service.service';
import { SpareserviceService } from '../../../service/spareservice.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ConsumableserviceService } from '../../../service/consumableservice.service';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { NotificationService } from '../../../service/toastrnotification.service';
import { Service,Gse,Tools,Consumable,Spare } from '../../../model/service';
import { ToolsserviceService } from '../../../service/toolsservice.service';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-addservice',
  templateUrl: './addservice.component.html',
  styleUrls: ['./addservice.component.css']
})

export class AddserviceComponent implements OnInit {
  service =new Service();
 
 
  isgse=true;
  isspare=true;
  istools=true;
  isconsumable=true;
   nam2: Array<any> = [];
  nam3:Array<any>= [];
  nam4:Array<any>= [];
  nam5:Array<any>=[];
  namestr:any;
  namestrsp:any;
  namestrtl:any;
  namestrcl:any;
  data:any;
  dataspare:any;
  datatools:any;
  dataconsumable:any;
  m1:any=100;
  m1sp:any=100;
  m1tl:any=100;
  m1cl:any=100;
d:any;
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
  gse = new Gse();
  spare=new Spare();
  tools = new Tools();
  consumable=new Consumable();
 
  constructor(private _router:Router,private consumableservice:ConsumableserviceService,private toolsservice:ToolsserviceService, private _service :ServiceService,private _gseservice:GseserviceService,private _spareservice:SpareserviceService,private _http:HttpClient,private toastr:NotificationService) { }

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


   


  gseselected()
  {
  
    this._gseservice.fetchUserListFromRemotegse().subscribe(data=>{
      this.data=data
    })
 
  }
  spareselected()
  {
   
   
   this._spareservice.fetchUserListFromRemotespare().subscribe(data=>{
     this.dataspare=data;
   })
 
  }
  toolsselected()
  {
  this.toolsservice.fetchUserListFromRemotetools().subscribe(data=>{
    this.datatools=data;
  })

  }
  consumableselected()
  {
   this.consumableservice.fetchUserListFromRemoteconsumable().subscribe(data=>{
     this.dataconsumable=data
   })
  
    
 
  }

adduserformsubmit(){
    console.log("Welcome to SPARE Registration");
    this.d=Date.now().toString();

 this.service.date_created=this.d;
 if (this.copystr==null||this.copystr==undefined)
 {
 this.service.gsenos='00';
 }
 else{
  this.service.gsenos=this.copystr;
 }
 if (this.copystrsp==null||this.copystrsp==undefined)
 {
 this.service.sparenos='00';
 }
 else{
  this.service.sparenos=this.copystrsp;
 }
 if (this.copystrtl==null||this.copystrtl==undefined)
 {
 this.service.toolsnos='00';
 }
 else{
  this.service.toolsnos=this.copystrtl;
 }
 if (this.copystrcl==null||this.copystrcl==undefined)
 {
 this.service.consumablenos='00';
 }
 else{
  this.service.consumablenos=this.copystrcl;
 }
console.log(this.service.gsenos);
console.log(this.service.gsenos);
  this._service.addUsertoRemoteservice(this.service).subscribe(
    data=>
   {
     console.log(this.service.gsenos);
     console.log("data added successfully");
     this.toastr.showSuccess('Service added successfully', "service");
      this._router.navigate(['/service']);

    },
    error=> 
    {console.log("error");
    this.toastr.showError(error,'Service');
  }
    
    

  )
}

function1(e:any,id:any)
{
  
  if(e.target.checked)
  {
  

  
    if (this.name==undefined )
    {
     
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
      
    }
  else
    {
    
     
      var index=this.nam2.indexOf(id);
    
      if (index >-1)
      {
        this.nam2.splice(index,1);
      }
        console.log("Un checked"+id);
        this.name=this.str1;
  
        console.log("the name of nam2="+this.nam2);
        this.copystr=this.nam2.toString();

       
    }




    this.namestr=this.name;
    console.log(typeof(this.namestr));
    if (typeof(this.namestr==='number'))
    {
      this.namestr=this.namestr.toString();
    }

    
    
  }

  
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
      
    }
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

    
    
  }

  function3(e:any,id:any)
{
  
  if(e.target.checked)
  {
  

  
    if (this.nametl==undefined )
    {
    
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
 
      if (index2 >-1)
      {
        this.nam4.splice(index2,1);
      }
        console.log("Un checked"+id);
        this.nametl=this.str2;
 
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
    

    
      if (this.namecl==undefined )
      {
     
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
        
      }
    else
      {
      
       
        var index3=this.nam5.indexOf(id);
     
        if (index3 >-1)
        {
          this.nam5.splice(index3,1);
        }
          console.log("Un checked"+id);
          this.namecl=this.str3;
   
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
 
    console.log( event.target.value);
    this.service.type=event.target.value;
  }
 
   
 }

