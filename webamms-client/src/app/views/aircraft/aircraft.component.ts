import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AircraftService } from '../../service/aircraft.service';
import html2canvas from 'html2canvas';
import 'jspdf-autotable';
import jsPDF from 'jspdf';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { Aircraft } from '../routine/days14/days14.model';
import { Sortie } from '../../model/sortie';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-aircraft',
  templateUrl: './aircraft.component.html',
  styleUrls: ['./aircraft.component.css']
})
export class AircraftComponent implements OnInit {
  aircraftinfo: any;
  aircraft1: any;
  addshowbutton: boolean = false;
  aircraft: Aircraft[];
  selectedValue: any;
  sorties: any;
  sortie: Sortie = new Sortie();
  tail: string;
  model: string;
  first_flight_date: string;
  last_flown_date: string;
  sortie_no: string;
  airflame_hours: string;
  engine_part_hrs: string;
  engine_STBD_hrs: string;
  aarc: string;
  flight_cycle: string;
  aircraft_status: string;
  apu_hrs: string;
  apu_c_hrs: string;
  apu_cycle: string;
  apu_c_cycle: string;
  id: number;
  rolltext: any;
  showeditbutton = false;
  constructor(private service: AircraftService, private router: Router) {
    this.service.share.subscribe(x => { this.rolltext = x || localStorage.getItem('a'); });
  }
 ngOnInit(): void {
    this.selectedValue = 1
    this.getAircraftinfo();
    this.getresult()
    if (this.rolltext == "admin") {
      this.addshowbutton = true;
      this.showeditbutton = true;
    }
    else if (this.rolltext == "regular") {
      this.addshowbutton = false;
      this.showeditbutton = true;
    }
    else if (this.rolltext == "viewer") {
      this.addshowbutton = false;
      this.showeditbutton = false;
    }
  }
  private getAircraftinfo() {
    this.service.getAircraftinfoList().subscribe(data => {
      this.aircraft = data;
     });
  }

  getData(selectedValue) {
    this.selectedValue = selectedValue;
   }
  getresult() {
    this.service.getAircraftinfoById(this.selectedValue).subscribe(data => {
      this.aircraftinfo = data;
      this.tail = this.aircraftinfo.tail;
      this.model = this.aircraftinfo.model;
      this.first_flight_date = this.fromEpoch(data.first_flight_date);
      this.last_flown_date = this.fromEpoch(data.last_flown_date);
      this.airflame_hours = data.airflame_hours;
      this.engine_part_hrs = data.engine_part_hrs;
      this.engine_STBD_hrs = data.engine_STBD_hrs;
      this.aarc = data.aarc;
      this.flight_cycle = data.flight_cycle
      this.aircraft_status = data.aircraft_status;
      this.apu_c_hrs = data.apu_c_hrs;
      this.apu_cycle = data.apu_cycle
      this.apu_c_cycle = data.apu_c_cycle,
      this.sortie_no = data.sortie_no,
      this.apu_hrs = data.apu_hrs;
    });
  }
 updateData(id) {
    this.router.navigate([`/aircraft/update`, this.selectedValue]);
  }
 onCreate() {
    this.router.navigate([`/aircraft/create`])
  }

 fromEpoch(epoch: number) {
    var myDate = new Date(epoch * 1000);
    var ddmmyyyy = (myDate.getFullYear() + "-" + ('0' + (myDate.getMonth() + 1)).slice(-2) + "-" + ('0' + myDate.getDate()).slice(-2));
    return ddmmyyyy;
 }
 createPdf() {
   const documentDefinition = this.getDocumentDefinition();
   pdfMake.createPdf(documentDefinition).open();
  }
  getDocumentDefinition() {
    sessionStorage.setItem('service', JSON.stringify(this.aircraft));
    return {
      header: {
        text: 'Aircraft Maintaince Management System',
        decoration: 'underline',
        fillColor: '#cccccc',
        bold: true,
        style: 'header',
        fontSize: 20,
        alignment: 'center'

      },
      footer(currentPage: number, pageCount: number, pageSize: any,): any {
        console.log(currentPage, pageCount, pageSize)
        return [{ text: currentPage, alignment: 'center' }];
      },
      content: [
        {
          text: 'Aircraft',
          fontSize: 20,
          alignment: 'center',
          style: 'header',
          margin: [0, 0, 0, 20],
        },
        this.getAircraftData(this.aircraftinfo),
        {
          text: 'Date: ' + (new Date()).toLocaleDateString(),
          alignment: 'right',
          margin: [0, 350, 0, 10],
         },]
    }
  }

  getAircraftData(aircraft: Aircraft) {
    console.log(aircraft!!! + this.aircraftinfo)
    return [{
      table: {
        widths: [100, 200, 200],
        body: [
          [{
            text: 'SNo', bold: true, fillColor: '#cccccc',}, { text: 'Parameter', bold: true, fillColor: '#cccccc', }, { text: 'Value', bold: true, fillColor: '#cccccc', }],
          ['1', 'Model No', aircraft.model],
          ['2', 'Sortie No', aircraft.sortie_no],
          ['3', 'Airflame Hrs', aircraft.airflame_hours],
          ['4', 'Engine Port Hrs', aircraft.engine_part_hrs],
          ['5', 'Engine STBD Hrs', aircraft.engine_STBD_hrs],
          ['6', 'Arc Hrs', aircraft.aarc],
          ['7', 'Apu Hrs', aircraft.apu_hrs],
          ['8', 'ApuC Hrs', aircraft.apu_c_hrs],
          ['9', 'Apu Cycle', aircraft.apu_cycle],
          ['10', 'ApuC Cycle', aircraft.apu_c_cycle],
          ['11', 'Flight Cycle', aircraft.flight_cycle],

        ], },
        }]
  }


  Pdf() {
    var data = document.getElementById('contentToConvert');
    html2canvas(data).then(canvas => {
      var imgWidth = 208;
      var pageHeight = 295;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;
      const contentDataURL = canvas.toDataURL('image/png')
      let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
      var position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
      pdf.save('MYPdf.pdf'); // Generated PDF
    });
  }
}
