import { Component, OnInit } from '@angular/core';
;

import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { ConsumableserviceService } from '../../../../service/consumableservice.service';
import { ToolsserviceService } from '../../../../service/toolsservice.service';

import { GseserviceService } from '../../../../service/gseservice.service';

import { SpareserviceService } from '../../../../service/spareservice.service';
import { Mo72 ,Gse,Tools,Consumable,Spare} from '../../mo72/mo72.model';
import { Mo72Service } from '../../mo72/mo72.service';
import { NotificationService } from '../../../../service/toastrnotification.service';
@Component({
  selector: 'app-editmo72',
  templateUrl: './editmo72.component.html',
  styleUrls: ['./editmo72.component.css']
})
export class Editmo72Component implements OnInit {


  
  seldata:any;
  seldataspare:any;
  seldatatools:any;
  seldataconsumable:any;
  isselected=false;
    isgse=true;
    istools=false;
    isspare=false;
    isconsumable=false;
    myInterval: number | false = 0;
    slides: any[] = [];
    activeSlideIndex: number = 0;
    noWrapSlides: boolean = false;
    xx:any;
    myid:any;
    myidsp:any;
    myidtl:any;
    myidcl:any;
    userroll:any;
    enable:boolean=true;
    nam2: Array<any> = ['0'];
    nam3: Array<any> = ['0'];
    nam4: Array<any> = ['0'];
    nam5: Array<any> = ['0'];
    str1:any='';
    str1sp:any='';
    str1tl:any='';
    str1cl:any='';
    m:any=0;
    x:any;
    start:any;
  
    m1:any;
    msp:any;
    mtl:any;
    mcl:any;
    totalItems:any;
    rec1:any;
    recsp:any;
    rectl:any;
    reccl:any;
    config:any;
    namestr:any;
    namespare:any;
    nametools:any;
    nameconsumable:any;
    name:string;
    nametl:string;
    namesp:string;
    namecl:string;
    res2:number=0;
    res2sp:number=0;
    res2tl:number=0;
    res2cl:number=0;
    res1:any;
    res3:any;
    res3sp:any
    res3tl:any
    res3cl:any;
    checkname:any;
    checknamesp:any;
    checknametl:any;
    checknamecl:any;
    copystr:any;
    copystrsp:any;
    copystrtl:any;
    copystrcl:any;
    datagse:any;
    dataspare:any;
    datatools:any;
    dataconsumable:any;
    name2:any;
    name2sp:any;
    name2tl:any;
    name2cl:any;
    namelen:number=0;
    namesplit:any;
    datac:any;
    datat:any;
    needcheck=false;
  gse= new Gse();
  mo72=new Mo72();
  spare=new Spare();
  tools=new Tools();
  consumable=new Consumable
    constructor(private _router:Router,private cservice:ConsumableserviceService,private tservice:ToolsserviceService, private _activatedroute:ActivatedRoute,private _service :Mo72Service,private _gseservice:GseserviceService,private _spareservice:SpareserviceService,private toastr:NotificationService
      ,private _http:HttpClient) { }
  
    ngOnInit(): void 
    {
      this.userroll=localStorage.getItem('a');
      if (this.userroll=="viewer")
      {
        this.enable=true;
      }
      else{
        this.enable=false;
      }
      let id = parseInt(this._activatedroute.snapshot.paramMap.get('id'));
      this._service.fetchUserByIdFromRemotemo72(id).subscribe(
        data=>{
          console.log("data recevied");
          this.mo72=data;
          console.log("The gse s are="+this.mo72.gsenos);
     console.log(this.mo72);
       //   console.log("The spares  are="+this.mo72.sparenos);
           this.nam2=this.mo72.gsenos;
            this.name=this.mo72.gsenos;

             this.nam3=this.mo72.sparenos;
            this.namesp=this.mo72.sparenos;

            this.nam4=this.mo72.toolsnos;
            this.nametl=this.mo72.toolsnos;

            this.nam5=this.mo72.consumablenos;
            this.namecl=this.mo72.consumablenos;
            this.copystr=this.nam2.toString();//if no editing happen the current ans remains for gse
            this.copystrsp=this.nam3.toString();//if no editing happen the current ans remains for spare
            this.copystrtl=this.nam4.toString();
            this.copystrcl=this.nam5.toString();
  
            if (this.mo72.gsenos != null)
            {
          
            }
            if (this.mo72.sparenos!=null)
            {
            }
            if (this.mo72.toolsnos!=null)
            {
            }
            if (this.mo72.consumablenos!=null)
            {
            }
         if (this.mo72.gsenos==null)
         {
          
         }
         if (this.mo72.sparenos==null)
         {
          
         } 
         if (this.mo72.toolsnos==null)
         {
          
         } 
         if (this.mo72.consumablenos==null)
         {
          
         } 
        },
        error=> console.log("exception occured")
        
      )
        /*for gse*/
        this._gseservice.fetchUserListFromRemotegse().subscribe(data=>{
          this.datagse=data
          console.log(this.datagse);
        })
     
        this._spareservice.fetchUserListFromRemotespare().subscribe(data=>{
          this.dataspare=data;
          console.log(this.dataspare)
        })
        this.tservice.fetchUserListFromRemotetools().subscribe(data=>{
          this.datatools=data
          console.log(this.datatools)
        })
     
     this.cservice.fetchUserListFromRemoteconsumable().subscribe(data=>{
       this.dataconsumable=data
       console.log(this.dataconsumable)
     })
  
    }
   
  function1(e:any,id:any)
  {
   this.myid=id;
    if(e.target.checked)
    {
    
  
    
      if (this.name==undefined || this.name==null)
      {
       // alert("i m undefined");
          this.name=id;
          this.nam2[0]=id;
         // alert(this.nam2);
      }
      else    
      {
       
          this.name=this.name+","+id;
          this.name2=this.nam2;
          this.name2=this.name2.split(",");
         this.name2.push(id);
         this.nam2=this.name2.toString();
             
          
      }
        console.log("selid:"+this.name);
        console.log("selid array"+this.nam2);
        this.copystr=this.nam2.toString();
        
    }/*checked*/
    else
      {
       this.myid=JSON.stringify(id);
         this.name2=this.nam2;
         this.name2=this.name2.split(",");
      
        var index=this.name2.indexOf(this.myid);
      
        if (index >-1)
        {
          
          this.name2.splice(index,1);
          this.nam2=this.name2.toString();
        }
          console.log("Un checked"+id);
          this.name=this.str1;
      
          console.log("the name of nam2="+this.nam2);
            this.copystr=this.nam2.toString();
  
         
      }
  
  //alert(this.copystr);
      /*function*/
  }
  
  //function2 for spare 
  //************* 
  function2(e:any,id:any)
  {
   this.myidsp=id;
    if(e.target.checked)
    {
    
  
    
      if (this.namesp==undefined || this.namesp==null )
      {
       // alert("i m undefined");
          this.namesp=id;
          this.nam3[0]=id;
        //  alert(this.nam3);
      }
  else    
      {
       
          this.namesp=this.namesp+","+id;
          this.name2sp=this.nam3;
          this.name2sp=this.name2sp.split(",");
         this.name2sp.push(id);
         this.nam3=this.name2sp.toString();
      
           
          
      }
        console.log("selid in spare:"+this.namesp);
        console.log("selid array in spare"+this.nam3);
        this.copystrsp=this.nam3.toString();
        
    }/*checked*/
    else
      {
       this.myid=JSON.stringify(id);
         this.name2sp=this.nam3;
         this.name2sp=this.name2sp.split(",");
      
        var index1=this.name2sp.indexOf(this.myid);
      
        if (index1 >-1)
        {
          
          this.name2sp.splice(index1,1);
          this.nam3=this.name2sp.toString();
        }
          console.log("Un checked in spare"+id);
          this.namesp=this.str1sp;
      
          console.log("the name of nam3="+this.nam3);
            this.copystrsp=this.nam3.toString();
  
         
      }
  
  
      /*function2*/
  }
  //************* */


  function3(e:any,id:any)
  {
   this.myidtl=id;
    if(e.target.checked)
    {
    
  
    
      if (this.nametl==undefined || this.nametl==null )
      {
       // alert("i m undefined");
          this.nametl=id;
          this.nam4[0]=id;
        //  alert(this.nam3);
      }
  else    
      {
       
          this.nametl=this.nametl+","+id;
          this.name2tl=this.nam4;
          this.name2tl=this.name2tl.split(",");
         this.name2tl.push(id);
         this.nam4=this.name2tl.toString();
      
           
          
      }
        console.log("selid in spare:"+this.nametl);
        console.log("selid array in spare"+this.nam4);
        this.copystrtl=this.nam4.toString();
        
    }/*checked*/
    else
      {
       this.myid=JSON.stringify(id);
         this.name2tl=this.nam4;
         this.name2tl=this.name2tl.split(",");
      
        var index2=this.name2tl.indexOf(this.myid);
      
        if (index2 >-1)
        {
          
          this.name2tl.splice(index2,1);
          this.nam4=this.name2tl.toString();
        }
          console.log("Un checked in spare"+id);
          this.nametl=this.str1tl;
      
          console.log("the name of nam3="+this.nam4);
            this.copystrtl=this.nam4.toString();
  
         
      }
  
  
      /*function2*/
  }
  
  




  function4(e:any,id:any)
  {
   this.myidcl=id;
    if(e.target.checked)
    {
    
  
    
      if (this.namecl==undefined || this.namecl==null )
      {
       // alert("i m undefined");
          this.namecl=id;
          this.nam5[0]=id;
        //  alert(this.nam3);
      }
  else    
      {
       
          this.namecl=this.namecl+","+id;
          this.name2cl=this.nam5;
          this.name2cl=this.name2cl.split(",");
         this.name2cl.push(id);
         this.nam5=this.name2cl.toString();
      
           
          
      }
        console.log("selid in spare:"+this.namecl);
        console.log("selid array in spare"+this.nam5);
        this.copystrcl=this.nam5.toString();
        
    }/*checked*/
    else
      {
       this.myid=JSON.stringify(id);
         this.name2cl=this.nam5;
         this.name2cl=this.name2cl.split(",");
      
        var index3=this.name2cl.indexOf(this.myid);
      
        if (index3 >-1)
        {
          
          this.name2cl.splice(index3,1);
          this.nam5=this.name2cl.toString();
        }
          console.log("Un checked in spare"+id);
          this.namecl=this.str1cl;
      
          console.log("the name of nam3="+this.nam5);
            this.copystrcl=this.nam5.toString();
  
         
      }
  
  
      /*function2*/
  }
  updateeditformsubmit(){
    this.mo72.gsenos=this.copystr;
    this.mo72.sparenos=this.copystrsp;
    this.mo72.toolsnos=this.copystrtl;
    this.mo72.consumablenos=this.copystrcl;
    
    this._service. addUsertoRemotemo72(this.mo72).subscribe(
       data=>
      {
        console.log("data edited successfully");
         this._router .navigate(['/system/mo72']);
         this.toastr.showInfo('Mo72 service updation success', 'Mo72 update');

       },
       error=>  this.toastr.showError(error,' Mo72 update')
      
   
     )
   }
   
  }
