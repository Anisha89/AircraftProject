import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { RegistrationService } from '../../service/registration.service';
import { NotificationService } from '../../service/toastrnotification.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  text = '';
  public myrowpp: any = 3;
  public routeitem: any;
  public routepage: any;
  public state: any;
  text1 = '';
  ne: NavigationExtras;
  constructor(private _service: RegistrationService, private _router: Router,private toastr:NotificationService) { }

  text2: any;
  opt_value:number;

  ngOnInit(): void {

    this.myrowpp = localStorage.getItem('rowpp');

    this.state = "undefined";
    this.routeitem = localStorage.getItem('opennav');
    console.log("The router item ====" + this.routeitem);
    this.routepage = localStorage.getItem('openpage');
  }


  onclick(  ) {
     
console.log(this.opt_value);

       if( this.opt_value==null){
         
        this.opt_value=this.myrowpp
    
       }


    this.myrowpp = this.opt_value;
    this.state = "true";
    this.ne =
    {
      queryParams: {
        "rowperpage": this.myrowpp,
        "state": this.state
      }
    }
    this.toastr.showInfo('Setting changed to'+ '  ' +this.myrowpp + "rows", 'Update');

    console.log(this.opt_value);
    //  console.log(this._service.settingupdate(text)) 
    this._service.settingupdate(this.opt_value);
    localStorage.setItem('rowpp', this.myrowpp);


    if (this.routeitem == 'users') {
      localStorage.setItem('opennav', '');
      localStorage.setItem('openpage', '');
      this._router.navigate([`./users`], this.ne);
    }
    else if (this.routeitem == 'gse') {
      localStorage.setItem('opennav', '');
      localStorage.setItem('openpage', '');
      this._router.navigate([`./gse`], this.ne);
    }
    else if (this.routeitem == 'tools') {
      localStorage.setItem('opennav', '');
      localStorage.setItem('openpage', '');
      this._router.navigate([`./tools`], this.ne);
    }
    else if (this.routeitem == 'spare') {
      localStorage.setItem('opennav', '');
      localStorage.setItem('openpage', '');
      this._router.navigate([`./spare`], this.ne);
    }

    else if (this.routeitem == 'consumable') {
      localStorage.setItem('opennav', '');
      localStorage.setItem('openpage', '');
      this._router.navigate([`./consumable`], this.ne);
    }
    else if (this.routeitem == 'servicehistory') {
      localStorage.setItem('opennav', '');
      localStorage.setItem('openpage', '');
      this._router.navigate([`./servicehistory`], this.ne);
    }
    else if (this.routeitem == 'schedule') {
      localStorage.setItem('opennav', '');
      localStorage.setItem('openpage', '');
      this._router.navigate([`./schedule`], this.ne);
    }
    else if (this.routeitem == 'concession') {
      localStorage.setItem('opennav', '');
      localStorage.setItem('openpage', '');
      this._router.navigate([`./concession`], this.ne);
    }
    else if (this.routeitem == 'OOPS') {
      localStorage.setItem('opennav', '');
      localStorage.setItem('openpage', '');
      this._router.navigate([`./service`], this.ne);
    }
    else if (this.routeitem == 'days14') {
      localStorage.setItem('opennav', '');
      localStorage.setItem('openpage', '');
      this._router.navigate([`./routine/days14`], this.ne);
    }
    else if (this.routeitem == 'mo1') {
      localStorage.setItem('opennav', '');
      localStorage.setItem('openpage', '');
      this._router.navigate([`./routine/mo1`], this.ne);
    }
    else if (this.routeitem == 'mo3') {
      localStorage.setItem('opennav', '');
      localStorage.setItem('openpage', '');
      this._router.navigate([`./routine/mo3`], this.ne);
    }

    else if (this.routeitem == 'mo15') {
      localStorage.setItem('opennav', '');
      localStorage.setItem('openpage', '');
      this._router.navigate([`./structure/mo15`], this.ne);
    }
    else if (this.routeitem == 'mo30') {
      localStorage.setItem('opennav', '');
      localStorage.setItem('openpage', '');
      this._router.navigate([`./structure/mo30`], this.ne);
    }
    else if (this.routeitem == 'mo60') {
      localStorage.setItem('opennav', '');
      localStorage.setItem('openpage', '');
      this._router.navigate([`./structure/mo60`], this.ne);
    }
    else if (this.routeitem == 'mo90') {
      localStorage.setItem('opennav', '');
      localStorage.setItem('openpage', '');
      this._router.navigate([`./structure/mo90`], this.ne);
    } 
    else if (this.routeitem == 'mo120') {
      localStorage.setItem('opennav', '');
      localStorage.setItem('openpage', '');
      this._router.navigate([`./structure/mo120`], this.ne);
    }
    else if (this.routeitem == 'mo6') {
      localStorage.setItem('opennav', '');
      localStorage.setItem('openpage', '');
      this._router.navigate([`./system/mo6`]), this.ne;
    }
    else if (this.routeitem == 'mo12') {
      localStorage.setItem('opennav', '');
      localStorage.setItem('openpage', '');
      this._router.navigate([`./system/mo12`]), this.ne;
    }
    else if (this.routeitem == 'mo18') {
      localStorage.setItem('opennav', '');
      localStorage.setItem('openpage', '');
      this._router.navigate([`./system/mo18`]), this.ne;
    }
    else if (this.routeitem == 'mo24') {
      localStorage.setItem('opennav', '');
      localStorage.setItem('openpage', '');
      this._router.navigate([`./system/mo24`]), this.ne;
    }
    else if (this.routeitem == 'mo36') {
      localStorage.setItem('opennav', '');
      localStorage.setItem('openpage', '');
      this._router.navigate([`./system/mo36`]), this.ne;
    }
    else if (this.routeitem == 'mo48') {
      localStorage.setItem('opennav', '');
      localStorage.setItem('openpage', '');
      this._router.navigate([`./system/mo48`]), this.ne;
    }
    else if (this.routeitem == 'mo72') {
      localStorage.setItem('opennav', '');
      localStorage.setItem('openpage', '');
      this._router.navigate([`./system/mo72`]), this.ne;
    }
  
  
  }
  onupdate(text) {
   this.opt_value = text;
  }


cancel(){

  this.myrowpp=this.myrowpp;
 if (this.routeitem == 'users'){
  this._router.navigate([`./users`])
 }
 else if (this.routeitem == 'gse') {
  this._router.navigate([`./gse`]);

 }
 else if (this.routeitem == 'tools') {
  this._router.navigate([`./tools`]);

 }

 else if (this.routeitem == 'spare') {
  this._router.navigate([`./spare`]);

 }
 else if (this.routeitem == 'spare') {
  this._router.navigate([`./spare`]);

 }
 else if (this.routeitem == 'consumable') {
  this._router.navigate([`./consumable`]);

 }
 else if (this.routeitem == 'servicehistory') {
  this._router.navigate([`./servicehistory`]);

 }
 else if (this.routeitem == 'schedule') {
  this._router.navigate([`./schedule`]);

 }
 else if (this.routeitem == 'concession') {
  this._router.navigate([`./concession`]);

 }
 else if (this.routeitem == 'OOPS') {
  this._router.navigate([`./service`]);

 }
 else if (this.routeitem == 'days14') {
  this._router.navigate([`./routine/days14`]);

 }
 else if (this.routeitem == 'mo1') {
  this._router.navigate([`./routine/ mo1`]);

 }
 else if (this.routeitem == 'mo3') {
  this._router.navigate([`./routine/ mo3`]);

 }

 else if (this.routeitem =='mo6') {
  
  this._router.navigate([`./system/mo6`]);
}
 else if (this.routeitem =='mo12') {
  
  this._router.navigate([`./system/mo12`]);
}
 else if (this.routeitem =='mo18') {
  
  this._router.navigate([`./system/mo18`]);
}
 else if (this.routeitem =='mo24') {
  
  this._router.navigate([`./system/mo24`]);
}
 else if (this.routeitem =='mo36') {
  
  this._router.navigate([`./system/mo36`]);
}
 else if (this.routeitem ==' mo48') {
  
  this._router.navigate([`./system/mo48`]);
}
 else if (this.routeitem =='mo72') {
  
  this._router.navigate([`./system/mo72`]);
}
 else if (this.routeitem == 'mo15') {

   this._router.navigate([`./structure/mo15`]);
}

else if (this.routeitem == 'mo30') {
   
  this._router.navigate([`./structure/mo30`]);
}
else if (this.routeitem == 'mo60') {
 
  this._router.navigate([`./structure/mo60`] );
}
else if (this.routeitem == 'mo90') {
   
  this._router.navigate([`./structure/mo90`] );
} else if (this.routeitem == 'mo120') {
  
  this._router.navigate([`./structure/mo120`]);
}





}




  ngOnDestroy(): void {
    localStorage.setItem('rowpp', this.myrowpp);
    localStorage.setItem('opennav', '');
    localStorage.setItem('openpage', '');
  }
}
