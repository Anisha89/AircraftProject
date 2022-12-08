import { Component, OnInit,  } from '@angular/core';
import { AircraftService } from '../../service/aircraft.service';
import * as XLSX from 'xlsx';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { ConcessionService } from '../../service/concession.service';
import { ActivatedRoute } from '@angular/router';
import { Sortie } from '../../model/sortie';
import { Aircraft } from '../routine/days14/days14.model';
import { SortieService } from '../../service/sortie.service';
@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css'],
 
})
export class ReportsComponent implements OnInit {
sortie:Sortie[];
aircraft:Aircraft[];
selectedValue:string="";
dates:any[];
s:any;
e:any;
value:number;
v:any
name:string;
id:any;
selectedRadioButton:number = 0;
report:any[];
fileName='ExcelSheet.xlsx';
date: Date = new Date();
data:any;
config:any;  
perpage:any;
currentPage=1
rec: any;
m: any;
  totalItems: any;
  rec1: any;
  rowperpage: any;
  constructor(private sortieservice:SortieService,private aircraftservice:AircraftService,private concessionservice:ConcessionService,  private _activatedrouter: ActivatedRoute,) { }
ngOnInit(): void {
this.s = this.date.toISOString().substr(0, 10); 
this.e = this.date.toISOString().substr(0, 10); 
this.m = 0;  
this.getAircraftinfo();
this.selectedValue="KW-3554"

this._activatedrouter.queryParams.subscribe((params) => {
  this.rowperpage = params["rowperpage"] || localStorage.getItem("rowpp");
});
this.perpage = this.rowperpage;
this.config={
  itemsPerPage: this.perpage,
  currentPage: this.m,
  totalItems: this.rec1,
  id: "listing_pagination",
}
this.Applyof(this.s,this.e)

  }

private getSortie(){
  this.sortieservice.getSortieList().subscribe(data=>{
 this.data=data;
})
}

private getAircraftinfo(){
  this.aircraftservice.getAircraftinfoList().subscribe(data => {
    this.aircraft = data;
 });
}

Applyof(s:any,e:any) {

   if (this.selectedValue === "") return ;
  if (this.selectedRadioButton == 1) {
     s=this.toEpoch(s);
     e=this.toEpoch(e)
  }
  else {
    s=0;
    e=0;
  }

   this.sortieservice.fetchsortie(this.selectedValue,s,e,this.selectedRadioButton).subscribe(
     (data)=>{
       this.rec1=data.length
       this.report=data;
       this.totalItems = this.rec1; 
      
     }
   )

}

onSelectAircraft(v:number,s:any,e:any){
  if (v<=0) return;
   v = v-1; // aircraft index;
  this.selectedValue = this.aircraft[v].aircraft;
  if (this.selectedRadioButton == 1) {
     s=this.toEpoch(s);
     e=this.toEpoch(e)
  }
  else {
    s=0;
    e=0;
  }
   this.sortieservice.fetchsortie(this.selectedValue,s,e,this.selectedRadioButton).subscribe(
     (data)=>{
       this.report=data;
     })
 }
 
 setOption(option:number) {
  this.selectedRadioButton = option;
}

viewpdf() {
  var element=document.getElementById('page')
  html2canvas(element).then((canvas)=>{
    var imgData=canvas.toDataURL('image/pdf')
    var imgheight=canvas.height * 208 / canvas.width;
    var doc = new jsPDF()
    doc.addImage(imgData,0,0,208,imgheight)
    doc.save("image.pdf")
  })
}

gotoedituser1(file:File){
  
   this.concessionservice.download(file).subscribe(response => { console.log(response);
    var binaryData = [];
    binaryData.push(response.data);
    var url = window.URL.createObjectURL(new Blob(binaryData, {type: "application/pdf"}));
    var a = document.createElement('a');
    document.body.appendChild(a);
    a.setAttribute('style', 'display: none');
    a.setAttribute('target', 'blank');
    a.href = url;
    a.download = response.filename;
    a.click();
    window.URL.revokeObjectURL(url);
    a.remove();

}, error => {

    console.log(error);
});    
  }

 handlePageChange(event: any) {
  let page = event.page;
  this.config.currentPage=page
   }

  toEpoch(strDate : string) {
    var myDate = new Date(strDate); // Your timezone!
    var epoch = Math.round(myDate.getTime()/1000); // 100 //10.2
    return epoch;
  }

  fromEpoch(epoch : number) {
    var myDate = new Date(epoch * 1000);; // Your timezone! //1612137600
    var ddmmyyyy = (myDate.getFullYear() + "-" +('0' + (myDate.getMonth()+1)).slice(-2)+"-"+ ('0' + myDate.getDate()).slice(-2));
    return ddmmyyyy;
   }
exportexcel():void{
   let element = document.getElementById('excel-table'); 
   const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
  const wb: XLSX.WorkBook = XLSX.utils.book_new();
   XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
  XLSX.writeFile(wb, this.fileName);
}


}