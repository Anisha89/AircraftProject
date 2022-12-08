import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {ReportsRoutingModule } from './reports-routing.module';
import { ReportsComponent } from './reports.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import {PaginationModule}from 'ngx-bootstrap/pagination';
import{NgxPaginationModule}from 'ngx-pagination';
@NgModule({
  declarations: [ReportsComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
   
    ReportsRoutingModule,
    ScrollingModule,
    PaginationModule,
    NgxPaginationModule
  ],



})
export class ReportsModule { }
