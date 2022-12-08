import { Component, OnInit } from '@angular/core';
import { Consumable } from '../../../model/consumable';
import { from } from 'rxjs';
import { ConsumableserviceService } from '../../../service/consumableservice.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NotificationService } from '../../../service/toastrnotification.service';

@Component({
  selector: 'app-addconsumable',
  templateUrl: './addconsumable.component.html',
  styleUrls: ['./addconsumable.component.css']
})
export class AddconsumableComponent implements OnInit {
  consumable = new Consumable();
  d: any;
  constructor(private _router: Router, private _service: ConsumableserviceService, private _http: HttpClient, private toastr: NotificationService) { }

  ngOnInit(): void {
  }

  adduserformsubmit() {
    this.d = Date.now().toString();
    this.consumable.date_created = this.d;
    this._service.addUsertoRemoteconsumable(this.consumable).subscribe(
      data => {
        this._router.navigate(['/consumable']);
        this.toastr.showSuccess('Consumable added successfully', "Consumable");
      },
      error => this.toastr.showError(error, 'Consumable')
    )
  }
}
