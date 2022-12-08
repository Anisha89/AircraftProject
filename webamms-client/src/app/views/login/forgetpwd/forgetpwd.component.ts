import { Component, OnInit , TemplateRef} from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { RegistrationService } from '../../../service/registration.service';
import { User } from '../../../model/user';
@Component({
  selector: 'app-forgetpwd',
  templateUrl: './forgetpwd.component.html',
  styleUrls: ['./forgetpwd.component.css']
})
export class ForgetpwdComponent implements OnInit {
  modalRef: BsModalRef;
  user = new User();
  mail:any;
  tok:any;
  getmsg:any;
  noUserMsg:any;
  user_list:any
  valid:any;
  constructor(private _service:RegistrationService,private _router: Router ,private modalService: BsModalService) { }

  ngOnInit():void   {

  }

  openModal(template: TemplateRef<any>) {
   
    this.modalRef = this.modalService.show(template);
  
 }


  gotoconfirm()
  {
  
 this._service.forgetmailsend(this.user).subscribe(
      response => {
        this.user=response;
        console.log(response);
         this.getmsg="Mail sent sucessfully "
       
      },
      error=>{
       this.getmsg="Failed to send mail" 
      }
    );

    }

  
  gotoback()
  {
    this._router.navigate([`\login`]);
  }

}

