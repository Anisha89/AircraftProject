import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import {SettingsComponent}from './settings.component';

import { CommonModule } from '@angular/common';
import{NgxPaginationModule}from 'ngx-pagination';
import {ConfirmationPopoverModule}from 'angular-confirmation-popover';
import { Ng2LoadingSpinnerModule } from 'ng2-loading-spinner'

import {CheckModule}from '../../check/check.module';
 


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule,
    NgxPaginationModule,
    BsDropdownModule,
    
    ButtonsModule.forRoot(),
    ConfirmationPopoverModule.forRoot({
      confirmButtonType:'danger',
    }),
    Ng2LoadingSpinnerModule.forRoot({
      backdropColor  : 'rgba(0, 0, 0, 0.3)',
      spinnerColor   : '#fff',
     }) ,
  ],
  declarations: [ SettingsComponent]
})
export class SettingsModule { }
