import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {HttpClient,HttpHeaderResponse, HttpEventType}from '@angular/common/http';
import { ANIMATION_TYPES } from 'ng2-loading-spinner';
import { INg2LoadingSpinnerConfig } from 'ng2-loading-spinner'; 
import { Schedule } from '../../../model/schedule';
import { ScheduleserviceService } from '../../../service/scheduleservice.service';



@Component({
  selector: 'app-editservicehistory',
  templateUrl: './editservicehistory.component.html',
  styleUrls: ['./editservicehistory.component.css']
})
export class EditservicehistoryComponent implements OnInit {

  loadingConfig: INg2LoadingSpinnerConfig = {
    animationType  : ANIMATION_TYPES.dualCircle,
    spinnerPosition: 'left',
    backdropBorderRadius: '15px',
    spinnerSize: 'md',
    spinnerFontSize: '2rem'
};
  show = false;
  schedule =new Schedule();
  progress:boolean=false;
  completed:boolean=false;
  notstarted:boolean=false;
  startdate:boolean;
  dd:any;
  mm:any;
  yyyy:any;
  last:any;
  selected:any;
  showme:boolean=false;
  showme1:boolean=false;
  
  constructor(private _service:ScheduleserviceService,private _router: Router,private _activatedrouter:ActivatedRoute,private _http:HttpClient) { }


  ngOnInit(): void {
    let id=parseInt(this._activatedrouter.snapshot.paramMap.get('id'));
    this._service.fetchUserByIdFromRemoteservicehistory(id).subscribe(
      data=>{
          console.log('date received in edit user');
          this.schedule=data;
          this.schedule.str_startdate=this.fromEpoch(this.schedule.startdate)
          this.schedule.str_enddate=this.fromEpoch(this.schedule.enddate)
          this.schedule.str_lastservice=this.fromEpoch(this.schedule.lastservice)
          this.schedule.str_nextservice=this.fromEpoch(this.schedule.nextservice)
          this.schedule.str_servicedue=this.fromEpoch(this.schedule.servicedue)
             
      },
      error=>{
          console.log('exception ocured');
      }
    )
  
  }
  
 goback(aircaft)
 {
   console.log('in go back');
   
   this._router.navigate([`./servicehistory`]);
 }
 
 

 toEpoch(strDate : string) {
  var myDate = new Date(strDate); // Your timezone!
  var epoch = Math.round(myDate.getTime()/1000); // 100 //10.2

  console.log(strDate + " - epoch - " + epoch);
  return epoch;
}

fromEpoch(epoch : number) {
  var myDate = new Date(epoch * 1000);; // Your timezone! //1612137600
  var ddmmyyyy = (myDate.getDate() + "-" +(myDate.getMonth() +1)+"-"+ myDate.getFullYear());
  return ddmmyyyy;
 }

}
