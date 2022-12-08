
import { NgModule } from '@angular/core';

import {ConcessionRoutingModule } from './concession-routing.module';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import{NgxPaginationModule}from 'ngx-pagination';
import {PaginationModule}from 'ngx-bootstrap/pagination';
import { CommonModule } from '@angular/common';
import { ConcessionComponent } from './concession.component';
import { ConcessionformComponent } from './concessionform/concessionform.component';
import { ConcessionService } from '../../service/concession.service';
import { UpdateconcessionComponent } from './updateconcession/updateconcession.component';
import {ConfirmationPopoverModule}from 'angular-confirmation-popover';



@NgModule({
  imports: [
    ConcessionRoutingModule,
    FormsModule,
    NgxPaginationModule,

    PaginationModule,
    ReactiveFormsModule,
    CommonModule,
   
    HttpClientModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType:'danger',
    }),
  
   
  

    
    
  ],
  declarations: [ConcessionComponent, ConcessionformComponent, UpdateconcessionComponent, ],
  providers:[ConcessionService],
  entryComponents:[ConcessionformComponent]

  
})
export class ConcessionModule { }
