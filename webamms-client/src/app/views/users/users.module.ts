import { NgModule } from '@angular/core';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users-routing.module';
import { CommonModule } from '@angular/common';
import { EdituserComponent } from './edituser/edituser.component';
import { RegistrationService } from '../../service/registration.service';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaderResponse } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { PicuploadComponent } from './picupload/picupload.component';
import { HttpClientModule } from '@angular/common/http';
import { AdduserComponent } from './adduser/adduser.component';

import { CheckModule } from '../../check/check.module';

import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { Ng2LoadingSpinnerModule } from 'ng2-loading-spinner';
import { PaginationModule } from 'ngx-bootstrap/pagination';

@NgModule({
  imports: [
    UsersRoutingModule,
    PaginationModule,
    CommonModule,
    FormsModule,
    NgxPaginationModule,
    HttpClientModule,
    CheckModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger',
    }),
    Ng2LoadingSpinnerModule.forRoot({
      backdropColor: 'rgba(0, 0, 0, 0.3)',
      spinnerColor: '#fff',
    }),
  ],
  declarations: [UsersComponent, EdituserComponent, PicuploadComponent, AdduserComponent
  ]
})
export class UsersModule { }