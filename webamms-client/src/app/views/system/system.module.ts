import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {SystemRoutingModule } from './system-routing.module';


import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';


import {ConfirmationPopoverModule}from 'angular-confirmation-popover';
import { Ng2LoadingSpinnerModule } from 'ng2-loading-spinner'
import {CheckModule}from '../../check/check.module';
//import { AddspareComponent } from './addspare/addspare.component';
//import { EditspareComponent } from './editspare/editspare.component';
//import { PicgseComponent } from './picgse/picgse.component';

import {PaginationModule}from 'ngx-bootstrap/pagination';
import { CarouselModule } from 'ngx-bootstrap/carousel';



import{NgxPaginationModule}from 'ngx-pagination';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { SystemComponent } from './system.component';
import { Mo6Component } from './mo6/mo6.component';
import { Mo12Component } from './mo12/mo12.component';
import { Mo18Component } from './mo18/mo18.component';
import { Mo24Component } from './mo24/mo24.component';
import { Mo36Component } from './mo36/mo36.component';
import { Mo48Component } from './mo48/mo48.component';
import { Mo72Component } from './mo72/mo72.component';
import { Addmo6Component } from './mo6/addmo6/addmo6.component';
import { Editmo6Component } from './mo6/editmo6/editmo6.component';
import { Addmo12Component } from './mo12/addmo12/addmo12.component';
import { Editmo12Component } from './mo12/editmo12/editmo12.component';
import { Addmo18Component } from './mo18/addmo18/addmo18.component';
import { Editmo18Component } from './mo18/editmo18/editmo18.component';
import { Addmo24Component } from './mo24/addmo24/addmo24.component';
import { Editmo24Component } from './mo24/editmo24/editmo24.component';
import { Addmo36Component } from './mo36/addmo36/addmo36.component';
import {  Editmo36Component } from './mo36/editmo36/editmo36.component';

import { Editmo48Component } from './mo48/editmo48/editmo48.component';
import { Addmo72Component } from './mo72/addmo72/addmo72.component';
import { Editmo72Component } from './mo72/editmo72/editmo72.component';
import { Addmo48Component } from './mo48/addmo48/addmo48.component';





@NgModule({

declarations: [SystemComponent, Addmo24Component,Mo6Component, Mo12Component, Mo18Component, Mo24Component, Mo36Component, Mo48Component, Mo72Component, Addmo6Component, Editmo6Component, Addmo12Component, Editmo12Component, Addmo18Component, Editmo18Component, Editmo24Component, Addmo36Component, Editmo48Component, Addmo72Component, Editmo72Component, Addmo48Component, Editmo36Component],
  imports: [
    CommonModule,
    TabsModule,
    CarouselModule,
    CheckModule,
    Ng2LoadingSpinnerModule,
    ButtonsModule,
    PaginationModule,
    BsDropdownModule,
    ChartsModule,
    FormsModule,
    HttpClientModule,
     NgxPaginationModule,
     ConfirmationPopoverModule,
    SystemRoutingModule
  ],



})
export class SystemModule { }
