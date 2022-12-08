 
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { ForgetpwdComponent } from './views/login/forgetpwd/forgetpwd.component';
import {ResetpwdComponent}from './views/login/resetpwd/resetpwd.component'
import { SettingsComponent } from './views/settings/settings.component';
import {GseComponent}from './views/gse/gse.component';
import { AboutComponent } from './views/about/about.component';
 
 
 
 
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },

  {
    path: 'forgetpwd',
    component: ForgetpwdComponent,
    data: {
      title: 'ForgetPassword Page'
    }
  },
  {
    path: 'resetpassword',
    component: ResetpwdComponent,
    data: {
      title: 'ResetPassword Page'
    }
  },
  
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {path:'register/:f/:mess',component:RegisterComponent},
   
  
  
  
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: ''
    },
    
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'dashboard/:roll/:uname',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'tools',
        loadChildren: () => import('./views/tools/tools.module').then(m => m.ToolsModule)
      },
       {
        path: 'users',
        loadChildren: () => import('./views/users/users.module').then(m => m.UsersModule)
      }, 
    
      {
       path: 'settings',
       component: SettingsComponent
      }, 
     
      {
       path: 'about',
       component:  AboutComponent,
       data:{
         title:'About'
       }
      }, 
     
      {
        path: 'gse',
        loadChildren: () => import('./views/gse/gse.module').then(m => m.GseModule)
      }, 
      {
        path: 'consumable',
        loadChildren: () => import('./views/consumable/consumable.module').then(m => m.ConsumableModule)
      }, 
      {
        path: 'schedule',
        loadChildren: () => import('./views/schedule/schedule.module').then(m =>m.ScheduleModule)
      }, 
    {
        path: 'servicehistory',
        loadChildren: () => import('./views/servicehistory/servicehistory.module').then(m =>m.ServicehistoryModule)
      }, 
      {
        path: 'alert',
        loadChildren: () => import('./views/alert/alert.module').then(m =>m.AlertModule)
      }, 
      {
        path: 'spare',
        loadChildren: () => import('./views/spare/spare.module').then(m => m.SpareModule)
      }, 
      {
        path: 'service',
        loadChildren: () => import('./views/service/service.module').then(m => m.ServiceModule)
      },
      {
        path: 'aircraft',
        loadChildren: () => import('./views/aircraft/aircraft.module').then(m => m.AircraftModule)
      },
      {
        path: 'concession',
        loadChildren: () => import('./views/concession/concession.module').then(m => m.ConcessionModule)
      }, 
      {
        path: 'reports',
        loadChildren: () => import('./views/reports/reports.module').then(m => m.ReportsModule)
      }, 
      {
        path: 'routine',
        loadChildren: () => import('./views/routine/routine.module').then(m => m.RoutineModule)
      },
      {
        path: 'system',
        loadChildren: () => import('./views/system/system.module').then(m => m.SystemModule)
      },
      {
        path: 'structure',
        loadChildren: () => import('./views/structure/structure.module').then(m => m.StructureModule)
      },
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}