import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { Editmo24Component } from './mo24/editmo24/editmo24.component';
import { Addmo36Component } from './mo36/addmo36/addmo36.component';
import { Editmo36Component } from './mo36/editmo36/editmo36.component';
import { Addmo48Component } from './mo48/addmo48/addmo48.component';
import { Editmo48Component } from './mo48/editmo48/editmo48.component';
import { Addmo72Component } from './mo72/addmo72/addmo72.component';
import { Editmo72Component } from './mo72/editmo72/editmo72.component';

import { Addmo24Component } from './mo24/addmo24/addmo24.component';

const routes: Routes = [
   
  {
    path: '',
   
    data: {
      title: 'System'
    }
  },
 
  { path: 'mo6', component: Mo6Component , data:{title:"Mo6"}},
  {path:'mo6/addmo6',component:Addmo6Component, data:{title:"Mo6/addmo6"}},
{path:'mo6/editmo6/:id',component:Editmo6Component, data:{title:"Mo6/editmo6"}},
  { path: 'mo12', component: Mo12Component, data:{title:"Mo12"}},
  {path:'mo12/addmo12',component:Addmo12Component, data:{title:"Mo12/addmo12"}},
  {path:'mo12/editmo12/:id',component:Editmo12Component, data:{title:"Mo12/editmo12"}},

  { path: 'mo18', component: Mo18Component, data:{title:"Mo18"}},
  {path:'mo18/addmo18',component:Addmo18Component, data:{title:"Mo18/addmo18"}},
  {path:'mo18/editmo18/:id',component:Editmo18Component, data:{title:"Mo18/editmo18"}},
  
  { path: 'mo24', component: Mo24Component, data:{title:"Mo24"}},
  {path:'mo24/addmo24',component:Addmo24Component, data:{title:"Mo24/addmo24"}},
  {path:'mo24/editmo24/:id',component:Editmo24Component, data:{title:"Mo24/editmo24"}},
  { path: 'mo36', component: Mo36Component, data:{title:"Mo36"}},
  {path:'mo36/addmo36',component:Addmo36Component, data:{title:"Mo36/addmo36"}},
  {path:'mo36/editmo36/:id',component:Editmo36Component, data:{title:"Mo36/editmo36"}},
  { path: 'mo48', component: Mo48Component, data:{title:"Mo48"}},
  {path:'mo48/addmo48',component:Addmo48Component, data:{title:"Mo48/addmo48"}},
  {path:'mo48/editmo48/:id',component:Editmo48Component, data:{title:"Mo48/editmo48"}},
  { path: 'mo72', component: Mo72Component, data:{title:"Mo72"}},
  {path:'mo72/addmo72',component:Addmo72Component, data:{title:"Mo72/addmo72"}},
  {path:'mo72/editmo72/:id',component:Editmo72Component, data:{title:"Mo72/editmo72"}},
  
]
          
  


@NgModule({
    imports: [RouterModule.forChild(routes),FormsModule,ReactiveFormsModule],
    exports: [RouterModule]
  })
  export class SystemRoutingModule {}