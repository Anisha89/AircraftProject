
import { Component, ViewChild, TemplateRef, ElementRef, AfterViewInit, OnInit } from '@angular/core';
import { navItems } from "../../_nav";
import { Router} from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { User } from "../../model/user";
import { Observable } from "rxjs";
//screen idle
import { Idle, DEFAULT_INTERRUPTSOURCES } from '@ng-idle/core';
import { Keepalive } from '@ng-idle/keepalive';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { screenIdleService } from '../../service/userLoggedIn.service';

@Component({
  selector: "app-dashboard",
  templateUrl: "./default-layout.component.html",
})
export class DefaultLayoutComponent implements OnInit {
  loggedInUser : User = new User();
  public sidebarMinimized = false;
  public navItems = navItems;
  idleState = 'Not started.';
  timedOut = false;
  lastPing?: Date = null;
  title = 'angular-idle-timeout';
  public modalRef: BsModalRef;
  @ViewChild('childModal', { static: false }) 
  public childModal: ModalDirective;
   messageBody:any;
  config = {
    backdrop: true,
    ignoreBackdropClick: true
  };
  
  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
  constructor(
    private _router: Router,private idle: Idle, private keepalive: Keepalive, private modalService: BsModalService,
    private _http: HttpClient,
    private screenIdle:screenIdleService
  ) {


    idle.setIdle(60);
    // sets a timeout period of 5 seconds. after 10 seconds of inactivity, the user will be considered timed out.
    idle.setTimeout(10);
    // sets the default interrupts, in this case, things like clicks, scrolls, touches to the document
    idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);

    idle.onIdleEnd.subscribe(() => { 
      this.idleState = 'No longer idle.'
      console.log(this.idleState);
      this.reset();
    });
    
    idle.onTimeout.subscribe(() => {
       
      this.idleState = 'Timed out!';
      this.timedOut = true;
      console.log(this.idleState);

      this._router.navigate(['/']);
    });
    
    idle.onIdleStart.subscribe(() => {
        this.idleState = 'You\'ve gone idle!'
        this.childModal.show()
        console.log(this.idleState);
       
    });
    
    idle.onTimeoutWarning.subscribe((countdown) => {
      let countDown =countdown;
      this.messageBody = 'You will time out in ' + countDown + ' seconds!'
    });

    // sets the ping interval to 15 seconds
    keepalive.interval(15);

    keepalive.onPing.subscribe(() => this.lastPing = new Date());

    this.screenIdle.getUserLoggedIn().subscribe(userLoggedIn => {
      if (userLoggedIn) {
        idle.watch()
        this.timedOut = false;
      } else {
        idle.stop();
      }
    })
  }

 
  reset() {
    this.idle.watch();
    this.idleState = 'started';
    this.timedOut = false;
    this.lastPing = null;
  }

  hideChildModal(): void {
    this.childModal.hide();
  }

  stay() {
    this.childModal.hide();
    this.reset();
  }

  logout() {
    this.childModal.hide();
    this.screenIdle.setUserLoggedIn(false);
    this._router.navigate(['/login']);
  }
  ngOnInit(): void {
 
    const user = localStorage.getItem('logged-in-user');
    if (user != null) {
      this.loggedInUser = JSON.parse(user);
    }
    else{
     this.gotologoutuser();
    }
    

    window.addEventListener('storage', (event) => {
      if (event.storageArea === localStorage) {
           let token = localStorage.getItem('logged-in-user');
           if(token === undefined) { 
             // Perform logout
             //Navigate to login/home
              this._router.navigate(['/login']); 
           }
      }
  });
  this.reset();
  }

  

  gotologoutuser() {
    localStorage.clear();
    this._router.navigate(['/login', { emailId: this.loggedInUser.emailId }]); //, { emailId: this.loggedInUser.emailId }
  }

  goTo() {
    this._router.navigate(['/settings']);
  }

  public getbyUserId(uname: string): Observable<any> {
    return this._http.get<any>("http://localhost:8080/getbyuserid/" + uname);
  }
 

}