import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { GseComponent } from './gse.component';
import { GseRoutingModule } from './gse-routing.module';
import { CommonModule } from '@angular/common';
import{NgxPaginationModule}from 'ngx-pagination';
import {ConfirmationPopoverModule}from 'angular-confirmation-popover';
import { Ng2LoadingSpinnerModule } from 'ng2-loading-spinner'
import {CheckModule}from '../../check/check.module';
import { AddgseComponent } from './addgse/addgse.component';
import { EditgseComponent } from './editgse/editgse.component';
//import { PicgseComponent } from './picgse/picgse.component';
import {HttpClientModule} from '@angular/common/http';
import {PaginationModule}from 'ngx-bootstrap/pagination';
import { CarouselModule } from 'ngx-bootstrap/carousel';


@NgModule({
  imports: [
    HttpClientModule,
    PaginationModule,
    CommonModule,
    FormsModule,
    CheckModule,
    GseRoutingModule,
    ChartsModule,
    NgxPaginationModule,
    CarouselModule,
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
  declarations: [ GseComponent, AddgseComponent, EditgseComponent,   ]
})
export class GseModule { }
