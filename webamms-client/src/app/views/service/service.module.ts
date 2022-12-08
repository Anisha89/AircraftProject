import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { ServiceComponent } from './service.component';
import { ServiceRoutingModule } from './service-routing.module';
import { CommonModule } from '@angular/common';
import{NgxPaginationModule}from 'ngx-pagination';
import {ConfirmationPopoverModule}from 'angular-confirmation-popover';
import { Ng2LoadingSpinnerModule } from 'ng2-loading-spinner'
import {CheckModule}from '../../check/check.module';
//import { AddspareComponent } from './addspare/addspare.component';
//import { EditspareComponent } from './editspare/editspare.component';
//import { PicgseComponent } from './picgse/picgse.component';
import {HttpClientModule} from '@angular/common/http';
import {PaginationModule}from 'ngx-bootstrap/pagination';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { AddserviceComponent } from './addservice/addservice.component';
import { EditserviceComponent } from './editservice/editservice.component';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap' ;

import { TabsModule } from 'ngx-bootstrap/tabs';
import { AngularFormioPdfModule } from 'angular-formio-pdf';
import { GenerateComponent } from './generate/generate.component';


//import {AgGridModule}from 'ag-grid-angular';
@NgModule({
  imports: [
    HttpClientModule,
    PaginationModule,
    CommonModule,
    FormsModule,
    CheckModule,
    AngularFormioPdfModule,
    ServiceRoutingModule,
    ChartsModule,
    NgxPaginationModule,
    CarouselModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    TabsModule.forRoot(),
    //NgbModule,
    //AgGridModule.withComponents(),
    ConfirmationPopoverModule.forRoot({
      confirmButtonType:'danger',
    }),
    Ng2LoadingSpinnerModule.forRoot({
      backdropColor  : 'rgba(0, 0, 0, 0.3)',
      spinnerColor   : '#fff',
     }) ,
  ],
  declarations: [ ServiceComponent, AddserviceComponent, EditserviceComponent,GenerateComponent],
 
})
export class ServiceModule { }

