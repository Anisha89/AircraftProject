import { Component, OnInit,ViewEncapsulation,OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HammerGestureConfig } from '@angular/platform-browser';


import { importExpr } from '@angular/compiler/src/output/output_ast';
import {Router,ActivatedRoute} from '@angular/router'

import { PaginationConfig, PaginationModule } from 'ngx-bootstrap/pagination';
import { PaginationService } from 'ngx-pagination';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { Mo60} from './mo60.model';
import { Gse } from "../../../model/gse";
import { Tools } from "../../../model/tools";
import { Spare } from "../../../model/spare";
import { Consumable } from "../../../model/consumable";
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { ConsumableserviceService } from '../../../service/consumableservice.service';
import { ToolsserviceService } from '../../../service/toolsservice.service';
import { Mo60Service } from './mo60.service';
import { SpareserviceService } from '../../../service/spareservice.service';
import { GseserviceService } from '../../../service/gseservice.service';
import { NotificationService } from '../../../service/toastrnotification.service';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-mo60',
  templateUrl: './mo60.component.html',
  providers: [
    { provide: CarouselConfig, useValue: { interval: 1500, noPause: false } },
  ],
 
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./mo60.component.css']
})

export class Mo60Component implements OnInit,OnDestroy {
  acitvities=[];
  start:any=1;
  datagse:any;
  dataspare:any;
  dataconsumable:any;
  datatools:any;
  end:any;
  nam2: Array<any> = ['0'];
  name3: Array<any> = ['0'];
  name:string;
  activeSlideIndex: number = 0;
  showdeletecaption:boolean =false;
  addshowbutton:boolean=false;
  showdeletebutton:boolean=false;
  showeditbutton:boolean=false;
  showedithidebutton:boolean=false;
  showphotobutton:boolean=false;
  popoverTitle :string = 'Remove SPARE Record';
 popoverMessage :string = ' Delete Yes/No ?';
  rolltext:any;
  rowperpage:any;
  istab=false;
  settingstate:any;
  perpageflag:any;
  perpage:any;
  config:any;
  searchname:any;
  searchpages:any;
  msg1:any;
uname:any;
m2:any;
data:any;
mode:any;
rec1:any;
m1:any;
counter:any;
 m: any;
 x:any;
 count1:any=0;
 count:any=0;
 count5:any=0;
 datapage:any;
  mo60 = new Mo60();
  totalItems:any;
  currentPage: number = 1;
  myInterval: number | false = 0;
  slides: any[] = [];
  noWrapSlides: boolean = false;
  datasno:any;
  selected_id: string;
  
  constructor(private _http:HttpClient,
    private consumableservice:ConsumableserviceService,
    private toolsservice:ToolsserviceService,private _service:Mo60Service,
    private _spareservice:SpareserviceService,private _gseservice:GseserviceService,
    private _route:Router,private _activatedrouter:ActivatedRoute,
    private toastr:NotificationService) 
  {
    this._service.share.subscribe(x=>{this.rolltext=x||localStorage.getItem('a');});
    console.log("the text is ======"+this.rolltext);
    this._service.share1.subscribe(x1=>{this.uname=x1||localStorage.getItem('b');});
    console.log("the Uname text is ======"+this.uname);
   }

  ngOnInit(): void {

    this.x=1;
    console.log (localStorage.getItem('opennav'));
    localStorage.setItem('opennav','mo60');
    localStorage.setItem('openpage',this.x);
    
    this.m=0;
    this.m2=0;
    this.mode="normal";
    this.data = new Array <any> ();
    
    this._activatedrouter.queryParams.subscribe(
      params=>{
        this.rowperpage=params['rowperpage']||localStorage.getItem('rowpp');
        this.settingstate=params['state']||localStorage.getItem('state');
      }
    );
    this.perpage=this.rowperpage;
    this.perpageflag=this.settingstate;
    //alert(this.perpageflag);
    //alert(this.x);
      this.config =
    {
     
    itemsPerPage: this.perpage,
     currentPage:this.m ,
     totalItems:this.rec1,
      id : 'listing_pagination',
    
     } 

     this._service.countrecordmo60().subscribe(
      mydata=>{console.log(mydata);
        this.rec1=mydata;
        console.log("no of record= " +this.rec1);
       this.m1=this.rec1;
        console.log("The m1 is "+this.m1);
        this.counter = this.m1;
        console.log("The perpage is "+this.perpage);
        }
      
    );
         this._service.getdatamo60(0,this.perpage).subscribe(
          (data)=>{console.log(data);
            this.data=data;
            this.mo60=data;
          this.totalItems=this.rec1;
          let activities=this.mo60;
           }/*for first mo60*/
      )/* for first getdata*/

      this._service.fetchUserListFromRemotegse().subscribe(data=>{
        console.log(data);
        this.datagse=data;
      })
      this._service.fetchUserListFromRemotetools().subscribe(data=>{
       console.log(data);
       this.datatools=data;
     })
     this._service.fetchUserListFromRemotespare().subscribe(data=>{
       console.log(data);
       this.dataspare=data;
     })
     this._service.fetchUserListFromRemoteconsumable().subscribe(data=>{
       console.log(data);
       this.dataconsumable=data;
     })
      
    if (this.rolltext=="viewer")
{
  this.addshowbutton=false;
  this.showdeletecaption=false;
  this.showdeletebutton=false;
  this.showeditbutton=false;
  this.showedithidebutton=false;
}
else if(this.rolltext=="regular")
{
  console.log('im regular');
  this.addshowbutton=false;
  this.showdeletecaption=false;
  this.showdeletebutton=false;
  this.showeditbutton=true;
  this.showedithidebutton=false;
  this.showphotobutton=true;
}
else if(this.rolltext=="admin")
{
  console.log('im Admin');
  this.addshowbutton=true;
  this.showdeletecaption=true;
  this.showdeletebutton=true;
  this.showeditbutton=true;
  this.showedithidebutton=false;
}


  }/*nginit*/
  ngOnDestroy(): void {
  }
  gotoedituser(id:number)
  {
    
    console.log("id:"+id );
    this._route.navigate([`/structure/mo60/editmo60`,id]);
  }
  gotoaddaccount(f:string,mess:string)
  {
   
    this._route.navigate([`/structure/mo60/addmo60`]);
}
handlePageChange(event:any) {
  this.x= event.page;
   event.page=event;
   this.start=this.x;
   //alert(this.x);
   if (this.mode=='searching')
   {
 
     this._service.counteruserecordmo60(this.searchname).subscribe(
       (recs)=>{console.log(recs);
         this.searchpages=parseInt(recs);
        console.log("Total items is search="+this.searchpages);
        this.rec1=this.searchpages;
         
   });
   this._service.fetchUserBymo60(this.x-1,parseInt(this.perpage),this.searchname).subscribe(
     (datasear)=>{console.log(datasear);
       this.datapage=datasear;
       this.data=datasear;
     this.rec1=this.searchpages;
     this.mo60=datasear;
     console.log("to test spare"+this.mo60);
     });
 
 
    } /*IF */
   else if(this.mode=='normal'||this.mode=="deleting")
   {
   this._service.getdatamo60(this.x-1,this.perpage).subscribe(
     (data)=>{console.log(data);
       this.data=data;
     this.config.totalItems=this.rec1;
     event.totalItems=this.rec1;
     this.mo60=data;
      } /*for first mo60*/
 ) /* for first getdata*/
 this._service.countrecordmo60().subscribe(
   mydata=>{console.log(mydata);
     this.rec1=mydata;
     console.log("no of record= " +this.rec1);
    this.m1=parseInt(this.rec1);
     console.log("The m1 is "+this.m1);
     }
   
 );
   }/*else*/
 }/* handle page change*/
 gotosearchservice(name :any)
 {
   this.datapage=[];
   this.searchname=name;
 this.m2=0;
   this.mode='searching';
   console.log(name);
   /* counting number of records for search*/
  this._service.counteruserecordmo60(this.searchname).subscribe(
     (recs)=>{console.log(recs);
       this.searchpages=parseInt(recs);
      console.log("Total items is search="+this.searchpages);
       
 });
 /*--------------------------------*/
   if (this.perpageflag=="true")
   {
  this._service.fetchUserBymo60(this.m2,parseInt(this.perpage),name).subscribe(
     (datasear)=>{console.log(datasear);
       this.datapage=datasear;
       this.data=datasear;
     this.rec1=this.searchpages;
     
 },
 error =>{
   console.log("Spare Number not exist");
 }
 );
   }
   else if (this.perpageflag==undefined)
 {
   this._service.fetchUserBymo60(this.m2,this.perpage,name).subscribe(
     (datasear)=>{console.log(datasear);
       this.datapage=datasear;
       this.data=datasear;
       this.rec1=this.searchpages;
 },
 error =>{
   console.log("mo60  not exist");
 }
 );
 }
 
 console.log("the total items in search out="+parseInt(this.searchpages));
 
 
  
 
 }/*search end */
 
 gotobackservice()
 {
   this.mode="normal";
     console.log("first part");
     this._service.countrecordmo60().subscribe(
       mydata=>{console.log(mydata);
         this.rec1=mydata;
         console.log("no of record= " +this.rec1);
        this.m1=parseInt(this.rec1);
         console.log("The m1 is "+this.m1);
         }
       
     );
     this._service.getdatamo60(0,this.perpage).subscribe(
       (data)=>{console.log(data);
         this.data=data;
       
      }/*for first mo60*/
     );/* for first getdata*/
 return;
   
 
 }/*gotobackgse*/

 show(e:any,id:any,gsenos:any,sparenos:any,toolnos:any,consumablenos:any)
{
  


  if (e.target.checked)
  {
  this.nam2[0]=id;
 // this.name3[0]=id;
    this.istab=true;
    this.count1=1
    this.count5=1
    
    //this.count=this.count+1;
    this.count=1;
  // alert("The id ="+id +","+this.count+","+gsenos +"selid="+this.nam2+"sparenos="+sparenos+this.count1+"toolnos="+toolnos+","+this.count5+"consumablenos="+consumablenos);
  this.selected_id=id;




  }
  else{
    this.count=this.count-1;
    this.istab=false;
    this.count1=this.count1-1;
    this.count5=this.count5-1;
    this.selected_id="";
  }
  this._gseservice.fetchUserListFromRemoteservicecondition(gsenos.toString()).subscribe(
    (datagse)=>{console.log(datagse);
    this.datagse=datagse;
    
    //this.totalItems=5;
    }/*for first mo60*/
    )/* for first getdata*/

    this._spareservice.fetchUserListFromRemotesparecondition(sparenos.toString()).subscribe(
      (dataspare)=>{console.log(dataspare);
      this.dataspare=dataspare;
      //this.totalItems=5;
      }/*for first mo60*/
      )/* for first getdata*/
      this.toolsservice.fetchUserListFromRemotetoolscondition(toolnos.toString()).subscribe(
        (datatools)=>{console.log(datatools);
        this.datatools=datatools;
        //this.totalItems=5;
        }/*for first mo60*/
        )/* for first getdata*/
        this.consumableservice.fetchUserListFromRemoteconsumablecondition(consumablenos.toString()).subscribe(
          (dataconsumable)=>{console.log(dataconsumable);
          this.dataconsumable=dataconsumable;
          //this.totalItems=5;
          }/*for first mo60*/
          )/* for first getdata*/
}



gotodeleteuser(id: number)
  {
    this.mode="deleting";
    
     this._service.deleteUserByIdFromRemotemo60(id).subscribe (
       data => {
          console.log('deleted sucesssfully');
          this.counter--;
          console.log("counter"+this.counter);
          if(this.counter == this.rowperpage){
            this.ngOnInit();
          }
          this.ngOnInit();
       // alert(this.x+this.perpageflag);
        if (this.perpageflag=="true")
        {
          this._service.getdatamo60(this.x-1,parseInt(this.perpage)).subscribe(
            (data)=>{console.log(data);
              this.data=data;
             // this.totalItems=String(100);
            })
        }/* per page true */
        else if(this.perpageflag==undefined)
        {
          this._service.getdatamo60(this.x,3).subscribe(
            (data)=>{console.log(data);
              this.data=data;
            //  this.totalItems=String(100);
            })

        }/* perpage false */
        this.toastr.showWarning("Deletion success", 'Mo60 service');
      },
      error=>{
        this.msg1=error;
         console.log(this.msg1);
         this.toastr.showError(error,'Mo60 service')
      }
    ) 
 
  }
  generate(){
    this._route.navigate([`/service/generate`]);
  }
  
  
  
  
  
  createPdf(){
  
  
    const documentDefinition = this.getDocumentDefinition(); 
  
  
  pdfMake.createPdf(documentDefinition).open();  
  }  
  getDocumentDefinition() {
    const thisRef=this;
    sessionStorage.setItem('service', JSON.stringify(this.mo60));
  
  
    
    return {
  
      header:{
        //pageBreak:'before',
        text:'Aircraft Maintaince Management System',
        decoration:'underline',
        fillColor: '#cccccc',
        
        
        bold:true,
        style:'header',
        fontSize:20,
        alignment:'center'
  
      },
      footer(currentPage:number,pageCount:number,pageSize:any):any{
        console.log(currentPage,pageCount,pageSize)
       return[{ text: 'Page ' + currentPage.toString() + ' of ' + pageCount, alignment: 'center' }];
      },
      content: [
        {
          text: 'Service', 
         //
          //bold: true,
          fontSize: 20,
          alignment: 'left',
  
          
          style:'header',
  
          margin: [0, 0, 0, 20]
        },
      
        this.getServiceData(this.data),
        
        
         { 
           text: '\n\nGse', 
          // style: 'header', 
         // bold: true,
          fontSize: 20,
          alignment: 'left',
          style: 'header',
          margin: [0, 0, 0, 20]
          },
         
     this.getGseData(this.datagse),
     
     { 
       text: '\n\nTools', 
       style: 'header', 
     // bold: true,
      fontSize: 20,
      alignment: 'left',
      margin: [0, 0, 0, 20]
      },
     
  this.getToolsData(this.datatools),
  
  { 
    text: '\n\nConsumable', 
   // style: 'header', 
   //bold: true,
   fontSize: 20,
   alignment: 'left',
   style: 'header',
   margin: [0, 0, 0, 20]
   },
  
  this.getConsumableData(this.dataconsumable),
  
  { 
    text: '\n\nSpare', 
   // style: 'header', 
   bold: true,
   fontSize: 20,
   alignment: 'left',
   style:'header',
   margin: [0, 0, 0, 20]
   },
  
  this.getSpareData(this.dataspare),
  
  
    
    
       
      ],
    }
   
  }
  getServiceData(mo60:Mo60[]){
  
    console.log('service..' + mo60);
    return{
    table:{
      width:['*','*','*','*','*','*','*','*',],
      body:[
        [
          {
          text:'Seqno',
          bold: true,
          fontsize:30,
          style:'tableHeader', 
           fillColor: '#cccccc',
  
        },
      
        {
          text:'Ammtcno',
          bold: true,
          fontsize:30,
          style:'tableHeader',
          fillColor: '#cccccc',
        },
        {
          text:'Category',
          bold: true,
          fontsize:30,
          style:'tableHeader',
          fillColor: '#cccccc',
        },
        {
          text:'Type',
          bold: true,
          fontsize:30,
          style:'tableHeader',
          fillColor: '#cccccc',
        },
        {
          text:'Trade',
          bold: true,
          fontsize:30,
          style:'tableHeader',
          fillColor: '#cccccc',
        },
        {
          text:'Description',
          bold: true,
          fontsize:30,
          style:'tableHeader',
          fillColor: '#cccccc',
        },
        {
          text:'Effectivity',
          bold: true,
          style:'tableHeader',
          fillColor: '#cccccc',
        },
      
      ],
  
   
    
        ...mo60.map(ed => {
          return [ed.seqno, ed.ammtcno, ed.cat, ed.type,ed.trade,ed.description,ed.effectivity];
        })
       ]
    },
    pageBreak:'after',
  }
  
       
  }
  getGseData(gse:Gse[]){
    console.log('gse..' + gse);
    return{
      table:{
        width:['*','*','*','*','*'],
        body:[
          [
           
            {
            text:'Sno',
            bold: true,
            style:'tableHeader',
            fillColor: '#cccccc',
          //  bold:true
          },
        
          {
            text:'PartNo',
            bold: true,
            style:'tableHeader',
            fillColor: '#cccccc',
          },
          {
            text:'GseNo',
            bold: true,
            style:'tableHeader',
            fillColor: '#cccccc',
          },
          {
            text:'Oem',
            bold: true,
            style:'tableHeader',	
            fillColor: '#cccccc',
          },
        
          {
            text:'Description',
            bold: true,
            style:'tableHeader',
            fillColor: '#cccccc',
          },
        
        
        ],
          ...gse.map(ed => {
            return [ed.sno, ed.portno, ed.gseno, ed.gdm,ed.description];
         })
       
      ]
    },
    pageBreak:'after',
  }
  
  
    
    
  }
  getToolsData(tools:Tools[]){
    console.log('tools..' + tools);
    return{
      table:{
      
        width:['*','*','*','*','*'],
        body:[
          [
           
            {
              text:'Sno',
              bold: true,
             // colSpan:1,
              style:'tableHeader',
              fillColor: '#cccccc',
             // margin: [20, 0, 40, 0],
            
            },
        
          {
            text:'PartNo',
            bold: true,
            style:'tableHeader',
           // colSpan:2,
            fillColor: '#cccccc',
         
          },
          {
            text:'ToolsNo',
            bold: true,
            style:'tableHeader',
            fillColor: '#cccccc',
           
          },
          {
            text:'Oem',
            bold: true,
            style:'tableHeader',
            fillColor: '#cccccc',
           
          },
        
          {
            text:'Description',
            bold: true,
            style:'tableHeader',
            fillColor: '#cccccc',
           
          },
        
        
        ],
          ...tools.map(ed => {
            return [ed.sno, ed.partno,ed.toolsno, ed.gdm,ed.description];
         })
       
      ]
    },
    pageBreak:'after',
  }
  
  
    
    
  }
  getSpareData(spare:Spare[]){
    console.log('spare..' + spare);
    return{
      table:{
        width:['*','*','*','*'],
        body:[
          [
           
            {
            text:'seqno',
            bold: true,
            style:'tableHeader',
            fillColor: '#cccccc',
          },
        
          {
            text:'PartNo',
            bold: true,
            style:'tableHeader',
            fillColor: '#cccccc',
          },
         
          {
            text:'Oem',
            bold: true,
            style:'tableHeader',
            fillColor: '#cccccc',
          },
        
          {
            text:'Description',
            bold: true,
            style:'tableHeader',
            fillColor: '#cccccc',
          },
        
        
        ],
          ...spare.map(ed => {
            return [ed.seqno,ed.partno,ed.oem,ed.description];
         })
       
      ]
    },
    
  }
  
  
    
    
  }
  getConsumableData(consumable:Consumable[]){
    console.log('consumable..' + consumable);
    return{
      table:{
        width:['*','z*','*','*','*'],
        body:[
          [
           
            {
            text:'Sno',
            bold: true,
            style:'tableHeader',
            fillColor: '#cccccc',
            
          },
        
          {
            text:'Consumableno',
            bold: true,
            style:'tableHeader',
            fillColor: '#cccccc',
          },
          {
            text:'PartNo',
            bold: true,
            style:'tableHeader',
            fillColor: '#cccccc',
          },
          {
            text:'Oem',
            bold: true,
            style:'tableHeader',
            fillColor: '#cccccc',
          },
        
          {
            text:'Description',
            bold: true,
            style:'tableHeader',
            fillColor: '#cccccc',
            //colSpan:'2'
          },
        
        
        ],
         ...consumable.map(ed => {
            return [ed.sno, ed.consumableno, ed.partno, ed.oem,ed.description];
         })
       
      ]
    },
    pageBreak:'after',
  }
  
  
    
    
  }

}
