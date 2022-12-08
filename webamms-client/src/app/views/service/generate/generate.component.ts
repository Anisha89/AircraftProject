import { Component, OnInit } from '@angular/core';




import { AircraftService } from '../../../service/aircraft.service';
import pdfMake from 'pdfmake/build/pdfmake';
//import moment from 'moment'
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { Aircraft } from '../../routine/days14/days14.model';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-generate',
  templateUrl: './generate.component.html',
  styleUrls: ['./generate.component.css']
})
export class GenerateComponent implements OnInit {
aircraft:Aircraft[];
selectedValue:any;
preparedBy:any;
issueBy:any;
dataa:any;

  constructor(private service:AircraftService) { }

  ngOnInit(): void {
    this.service.getAircraftinfoList().subscribe
  (data=>{
 this.aircraft=data;
 
  })
  }
  onSubmit(){
console.log(this.selectedValue);
console.log(this.preparedBy);
console.log(this.issueBy);
this.service.getAircraftinfoById(this.selectedValue).subscribe(data=>{
  this.dataa=data;
  console.log(this.dataa)
  
  
  this.createPdf();
  
})
  
  }
  createPdf() {   
    
    const documentDefinition = this.getDocumentDefinition(); 


    pdfMake.createPdf(documentDefinition).open();  

             


}



getDocumentDefinition(){
  sessionStorage.setItem('service', JSON.stringify(this.aircraft));
   
  return{
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
    footer(currentPage:number,pageCount:number,pageSize:any,):any{
      console.log(currentPage,pageCount,pageSize)


     return [   
    
  
     { text: currentPage, alignment: 'center' }
          
          
          
          ];
    },

    content:[
      {
      text: 'Aircraft', 
      //
       //bold: true,
       fontSize: 20,
       alignment: 'center',

       
       style:'header',

       margin: [0, 0, 0, 20],
    },

   this.getAircraftData(this.dataa),

   
   {
    // text: 'Work Order PreparedBy',
    text: 'Work Order PreparedBy : ' + this.preparedBy,
     alignment:'left',
     margin: [0, 350, 0, 10],

   },
   {
    // text: 'Work Order PreparedBy',
    text: 'IssuedBy : ' + this.issueBy,
     alignment:'right',
     fillColor: '#cccccc',
 
     
   

   },
   {
   text: 'Date: ' + (new Date()).toLocaleDateString(),
   // text: moment(new Date()).format("DD-MMM-YYYY"),
    alignment:'right',
   // pageBreak:'after',
   },

{
  text:'Work Completion Certificate',
  bold:true,
  alignment:'left',
  style:'header',
  margin: [0, 550, 0, 10],
   fontSize:'20',
},
{
  text:'(a) Certified that tasks allotted vide this work order is carried out as per laid down procedures in relevant task cards or other publication /instructions ',
  alignment:'left',
  fontSize:'12'
},
{
  text:'(b) Necessary entries are made in Form IAFF (T) 700 SI No. Section 4A Page No. And Section 10 Page No',
  alignment:'left',
  fontSize:'12'
},


  this.getEmptytable(),

  {
    text:'NEXT DUE ON:',
    margin:[0, 200, 0, 10],
    alignment:'left',
    bold:true
  },
  
  {
    text:'(Signature WO i/c Aircraft)',
 
    alignment:'left'
  },
  
  {
    text:'(Signature O i/c Aircraft)',
 
    alignment:'right'
  },
  {
    text:'Date:',
   margin:[0,10, 0, 10],
    alignment:'left'
  },
  {
    text:'Date:',
   margin:[0,20, 0, 0],
    alignment:'right'
  },
  {
    text:'(Signature WO i/c MCC)',
 
    alignment:'center'
  },
  {
    text:'Date:',
  margin:[0, 50, 0, 10],
    alignment:'center'
  },
    ],

  }
  

  
}


getAircraftData(aircraft:Aircraft){
  console.log(aircraft!!! +this.dataa)
return[{
  table:{
    widths: [100, 200, 200],
    
 
  
    body:[
      [{text:'SNo',bold:true,  fillColor: '#cccccc',
    },{text:'Parameter',bold:true,  fillColor: '#cccccc',},{text:'Value',bold:true,  fillColor: '#cccccc',}],
      ['1','Model No',aircraft.model],
      ['2','Sortie No',aircraft.sortie_no],
      ['3','Airflame Hrs',aircraft.airflame_hours],
      ['4','Engine Port Hrs',aircraft.engine_part_hrs],
      ['5','Engine STBD Hrs',aircraft.engine_STBD_hrs],
      ['6','Arc Hrs',aircraft.aarc],
      ['7','Apu Hrs',aircraft.apu_hrs],
      ['8','ApuC Hrs',aircraft.apu_c_hrs],
      ['9','Apu Cycle',aircraft.apu_cycle],
      ['10','ApuC Cycle',aircraft.apu_c_cycle],
      ['11','Flight Cycle',aircraft.flight_cycle],
    
    ],
   

    
    
  },
  
 

}]
}
getEmptytable(){
  return[{
    table:{
      widths: ['*', 100, '*',100,100,'*'],
      
   
    
      body:[
        [{text:'System',bold:true,  fillColor: '#cccccc',fontSize:'10' },{text:'Particular of workmen',fillColor: '#cccccc'},{text:'',bold:true,  fillColor: '#cccccc',fontSize:'10'},
        {text:'Specimen Signature',  fillColor: '#cccccc',fontSize:'10'},{text:'Particulars of Supervisor',  fillColor: '#cccccc',fontSize:'10'},{text:'Specimen Signature',  fillColor: '#cccccc',fontSize:'10'}],
        ['Air Frame','','','','',''],
        ['Engine','','','','',''],
        ['Elect','','','','',''],
        ['Inst','','','','',''],
        ['Radio','','','','',''],
        ['Radar','','','','',''],
        ['Wpn/Spn','','','','',''],
        
       
      ],
     
  
      
      
    },
    
   
  
  }]
}
}