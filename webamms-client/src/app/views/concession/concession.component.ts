
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConcessionService } from '../../service/concession.service';
import jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import { AircraftService } from '../../service/aircraft.service';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { Concession } from '../../model/concession';
import { Aircraft } from '../routine/days14/days14.model';
import { NotificationService } from '../../service/toastrnotification.service';

@Component({
  selector: 'app-concession',
  providers: [
    { provide: CarouselConfig, useValue: { interval: 1500, noPause: false } },
  ],
  templateUrl: './concession.component.html',
  encapsulation: ViewEncapsulation.None,
})

export class ConcessionComponent implements OnInit {
  selectedValue: any;
  name: any;
  acitvities = [];
  start: any = 1;
  end: any;
  rolltext: any;
  rowperpage: any;
  settingstate: any;
  perpageflag: any;
  perpage: any;
  config: any;
  searchname: any;
  searchpages: any;
  msg1: any;
  uname: any;
  m2: any;
  data: any;
  mode: any;
  rec1: any;
  m1: any;
  m: any;
  optvalue: any;
  x: any;
  datapage: any;
  currentPage: number = 1;
  datasno: any;
  status1: any;
  startdate: any;
  enddate: any;
  concession = new Concession();
  currentdate: any;
  concessions: Concession[];
  activeSlideIndex: number = 0;
  showdeletecaption: boolean = false;
  addshowbutton: boolean = false;
  showdeletebutton: boolean = false;
  showeditbutton: boolean = false;
  showedithidebutton: boolean = false;
  showphotobutton: boolean = false;
  saircraft: any;
  aircraft1: Aircraft[];
  popoverTitle: string = 'Remove Consumable Record';
  popoverMessage: string = ' Delete Yes/No ?';
  confirmClicked: boolean = false;
  cancelClicked: boolean = false;
  selectedFile: File;
  res: string;
  dataa: any;
  userroll: string;
  enable: boolean;
 constructor(private concessionservice: ConcessionService, private service: AircraftService, private router: Router, private route: ActivatedRoute, private toastr: NotificationService) {
    this.concessionservice.share.subscribe(x => { this.rolltext = x || localStorage.getItem('a'); });
     this.concessionservice.share1.subscribe(x1 => { this.uname = x1 || localStorage.getItem('b'); });
   }

 ngOnInit(): void {
    this.selectedValue = "KW-3554";
    this.getData(this.selectedValue)
    localStorage.setItem('opennav', 'concession');
    localStorage.setItem('openpage', this.x);
    this.x = 1;
    this.m = 0;
    this.m2 = 0;
    this.mode = "normal";
    this.data = new Array<any>();
    this.route.queryParams.subscribe(
      params => {
        this.rowperpage = params['rowperpage'] || localStorage.getItem('rowpp');
        this.settingstate = params['state'] || localStorage.getItem('state');
      }
    );
    this.perpage = this.rowperpage;
    this.perpageflag = this.settingstate;
    this.config =
    {
      itemsPerPage: this.perpage,
      currentPage: this.m,
      totalItems: this.rec1,
      id: 'listing_pagination',
     }

    this.concessionservice.fetchUserListFromRemoteaircraft(this.selectedValue).subscribe(data => {
     this.rec1 = data.length;
     this.m1 = this.rec1;
     })
    this.concessionservice.fetchUserListFromRemoteaircraft(this.selectedValue).subscribe(data => {
      this.concessions = data
    })
    this.getAircraftinfo();
     if (this.rolltext == "admin") {
      this.addshowbutton = true;
      this.showeditbutton = true;
      this.showdeletebutton = true;
    }
    else if (this.rolltext == "regular") {
      this.addshowbutton = false;
      this.showeditbutton = true;
      this.showdeletebutton = false;
    }
    else if (this.rolltext == "viewer") {
      this.addshowbutton = false;
      this.showeditbutton = false;
      this.showdeletebutton = false;
    }

  }

  private getAircraftinfo() {
    this.service.getAircraftinfoList().subscribe(data => {
      this.aircraft1 = data;
    });
  }
  
gotoaddaccount() {
   this.router.navigate([`/concession/create`])
  }

 gotoedituser(id: number) {
    this.router.navigate(['/concession/update', id]);
 }
reloadData() {
    this.concessionservice.fetchUserListFromRemoteaircraft(this.selectedValue).subscribe(data => {
      this.concessions = data;
   })
}
onDelete(id: number) {
     this.concessionservice.deleteUserByIdFromRemoteconcession1(id).subscribe(data => {
     this.reloadData();
      this.toastr.showWarning("Deletion success", 'Concession')
    },
      error => this.toastr.showError(error, 'Concession')
    )
}

  gotopicture(id: number) {
    this.router.navigate([`/users/picupload`, id]);
  }


  viewpdf() {
    var element = document.getElementById('page')
    html2canvas(element).then((canvas) => {
      var imgData = canvas.toDataURL('image/pdf')
      var imgheight = canvas.height * 208 / canvas.width;
      var doc = new jspdf()
      doc.addImage(imgData, 0, 0, 208, imgheight)
      doc.save("image.pdf")
    })
  }
gotoedituser1(file: File) {
      this.concessionservice.download(file).subscribe(response => {
      var binaryData = [];
      binaryData.push(response.data);
      var url = window.URL.createObjectURL(new Blob(binaryData, { type: "application/pdf" }));
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


  getData(selectedValue) {
    this.selectedValue = selectedValue;
     this.concessionservice.fetchUserListFromRemoteaircraft(this.selectedValue).subscribe(data => {
      this.concessions = data;
      console.log(this.concessions)
     this.rec1 = this.concessions.length
      for (var i = 0; i < this.concessions.length; i++) {
        this.concessions[i].str_approval_date = this.fromEpoch(data[i].approval_date);
        this.concessions[i].str_extended_till = this.fromEpoch(data[i].extended_till);
        this.concessions[i].str_removed_on = this.fromEpoch(data[i].removed_on);
        this.concessions[i].str_valid_upto = this.fromEpoch(data[i].valid_upto);
      }
    })
  }
  toEpoch(strDate: string) {
    var myDate = new Date(strDate); // Your timezone!
    var epoch = Math.round(myDate.getTime() / 1000); // 100 //10.2
     return epoch;
  }

  fromEpoch(epoch: number) {
    var myDate = new Date(epoch * 1000);; // Your timezone! //1612137600
    var ddmmyyyy = (myDate.getFullYear() + "-" + ('0' + (myDate.getMonth() + 1)).slice(-2) + "-" + ('0' + myDate.getDate()).slice(-2));
    return ddmmyyyy;
  }

  handlePageChange(event: any) {
    this.x = event.page;
    event.page = event;
    this.start = this.x;
   this.concessionservice.displayconcession1(this.selectedValue, this.x, this.perpage).subscribe(data => {
   this.concessions = data;
 })
}
}