import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Tools } from '../../../model/tools';
import { ToolsserviceService } from '../../../service/toolsservice.service';
import { NotificationService } from '../../../service/toastrnotification.service';
@Component({
  selector: 'app-addtools',
  templateUrl: './addtools.component.html',
  styleUrls: ['./addtools.component.css']
})

export class AddtoolsComponent implements OnInit {
  tools = new Tools();
  d: any;

  constructor(private _router: Router, private _service: ToolsserviceService, private _http: HttpClient, private toastr: NotificationService) { }

  ngOnInit(): void {
  }
  adduserformsubmit() {
    this.d = Date.now().toString();
    this.tools.date_created = this.d;
    this._service.addUsertoRemotetools(this.tools).subscribe(
      data => {
        this.toastr.showSuccess(' Tools added successfully', "Tools");
        this._router.navigate(['/tools']);
      },
      error => this.toastr.showError(error, 'Tools')
    )
  }
}




