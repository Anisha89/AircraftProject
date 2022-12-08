import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {HttpClient,HttpHeaderResponse}from '@angular/common/http';
import{NgxPaginationModule}from 'ngx-pagination';
import {HttpClientModule} from '@angular/common/http';
import {ConfirmationPopoverModule}from 'angular-confirmation-popover';
import { Ng2LoadingSpinnerModule } from 'ng2-loading-spinner'
import {CheckModule}from '../../check/check.module';

@NgModule({
    imports: [
     
      CommonModule,
      FormsModule,
      NgxPaginationModule,
      HttpClientModule,
      CheckModule,
      ConfirmationPopoverModule.forRoot({
        confirmButtonType:'danger',
      }),
      Ng2LoadingSpinnerModule.forRoot({
        backdropColor  : 'rgba(0, 0, 0, 0.3)',
        spinnerColor   : '#fff',
       }) ,
    ],
    declarations: [ 
        ]
  })
  export class LoginModule { }