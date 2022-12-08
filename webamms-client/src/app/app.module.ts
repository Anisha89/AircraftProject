import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy, CommonModule } from '@angular/common';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { AppComponent } from './app.component';

// Import containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import {HttpClientModule}from '@angular/common/http';
// bs-model
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';
import { AlertModule } from 'ngx-bootstrap/alert';
// screen logout idle
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive';
const APP_CONTAINERS = [
  DefaultLayoutComponent
];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';

//import { NgbModule } from '@ng-bootstrap/ng-bootstrap' ;
import { ChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';
import{NgxPaginationModule}from 'ngx-pagination';
import { ForgetpwdComponent } from './views/login/forgetpwd/forgetpwd.component';
import { ResetpwdComponent } from './views/login/resetpwd/resetpwd.component';
import { CompareValidatorDirective } from './shared/compare-validator.directive';

 
import {CheckModule}from '../app/check/check.module';
 
import { Ng2LoadingSpinnerModule } from 'ng2-loading-spinner'
import {ConfirmationPopoverModule}from 'angular-confirmation-popover';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { NgxDateRangeModule } from 'ngx-daterange';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material'
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { ServicehistoryComponent } from './views/servicehistory/servicehistory.component';
import { SpareComponent } from './views/spare/spare.component';
import { ServiceComponent } from './views/service/service.component';
import { ConcessionComponent } from './views/concession/concession.component';
import { SettingsComponent } from './views/settings/settings.component';
import { AboutComponent } from './views/about/about.component';
import { ToastrModule } from 'ngx-toastr';
import { PasswordValidatorDirective } from './shared/password-validator.directive';
@NgModule({
  imports: [
  
    PaginationModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
   // NgbModule,
    ChartsModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
    CommonModule,
    NgxPaginationModule,
    ToastrModule.forRoot(),
    //CompareValidatorDirective
    CheckModule,
     Ng2LoadingSpinnerModule.forRoot({
      backdropColor  : 'rgba(0, 0, 0, 0.3)',
      spinnerColor   : '#fff',
     }) ,
     ConfirmationPopoverModule.forRoot({
       confirmButtonType:'danger',
     }),
     CarouselModule.forRoot(),
     NgxDateRangeModule,
     NgxDaterangepickerMd.forRoot(),
     AlertModule.forRoot(),
     ModalModule,
     //screen logout 
     NgIdleKeepaliveModule.forRoot(),
    ],
  declarations: [
    AppComponent,
    APP_CONTAINERS,
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent,
   
    ForgetpwdComponent,
    ResetpwdComponent,
    
    SettingsComponent,
    
    AboutComponent,
    
 
   
   // SettingsComponent,
   
  
    
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy,
    
    
  },BsModalService],
 
  exports:[
   
    CheckModule
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
