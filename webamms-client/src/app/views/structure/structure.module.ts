import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {StructureRoutingModule } from './structure-routing.module';
import { StructureComponent } from './structure.component';
;

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
import { Mo15Component } from './mo15/mo15.component';
import { Mo30Component } from './mo30/mo30.component';
import { Mo60Component } from './mo60/mo60.component';
import { Mo90Component } from './mo90/mo90.component';
import { Mo120Component } from './mo120/mo120.component';
import { Addmo15Component } from './mo15/addmo15/addmo15.component';
import { Editmo15Component } from './mo15/editmo15/editmo15.component';
import { Addmo30Component } from './mo30/addmo30/addmo30.component';
import { Editmo30Component } from './mo30/editmo30/editmo30.component';
import { Addmo60Component } from './mo60/addmo60/addmo60.component';
import { Editmo60Component } from './mo60/editmo60/editmo60.component';
import { Addmo90Component } from './mo90/addmo90/addmo90.component';

import { Editmo90Component } from './mo90/editmo90/editmo90.component';
import { Addmo120Component } from './mo120/addmo120/addmo120.component';
import { Editmo120Component } from './mo120/editmo120/editmo120.component';





@NgModule({
  declarations: [ StructureComponent, Mo15Component, Mo30Component, Mo60Component, Mo90Component, Mo120Component, Addmo15Component, Editmo15Component, Addmo30Component, Editmo30Component, Addmo60Component, Editmo60Component, Addmo90Component, Editmo90Component, Addmo120Component, Editmo120Component ],
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
    StructureRoutingModule
  ],



})
export class StructureModule { }
