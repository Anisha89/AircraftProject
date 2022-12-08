import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {RoutineRoutingModule } from './routine-routing.module';
import { RoutineComponent } from './routine.component';
import { Days14Component } from './days14/days14.component';
import { Mo1Component } from './mo1/mo1.component';
import { Mo3Component } from './mo3/mo3.component';

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

import { AdddaysComponent } from './days14/adddays/adddays.component';

import{NgxPaginationModule}from 'ngx-pagination';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { EditdaysComponent } from './days14/editdays/editdays.component';
import { Addmo1Component } from './mo1/addmo1/addmo1.component';
import { Editmo1Component } from './mo1/editmo1/editmo1.component';

import { Addmo3Component } from './mo3/addmo3/addmo3.component';
import { Editmo3Component } from './mo3/editmo3/editmo3.component';






@NgModule({
  declarations: [RoutineComponent,Days14Component, Mo1Component, Mo3Component, AdddaysComponent, EditdaysComponent, Addmo1Component, Editmo1Component, Addmo3Component, Editmo3Component],
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
    RoutineRoutingModule
  ],



})
export class RoutineModule { }
