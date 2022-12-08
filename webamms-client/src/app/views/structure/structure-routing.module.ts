import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {StructureComponent } from './structure.component';
import { Mo30Component } from './mo30/mo30.component';
import { Mo15Component } from './mo15/mo15.component';
import { Mo60Component } from './mo60/mo60.component';
import { Mo90Component } from './mo90/mo90.component';
import { Mo120Component } from './mo120/mo120.component';
import { Editmo15Component } from './mo15/editmo15/editmo15.component';
import { Editmo30Component } from './mo30/editmo30/editmo30.component';
import { Editmo60Component } from './mo60/editmo60/editmo60.component';
import { Editmo90Component } from './mo90/editmo90/editmo90.component';
import { Editmo120Component } from './mo120/editmo120/editmo120.component';
import { Addmo15Component } from './mo15/addmo15/addmo15.component';
import { Addmo30Component } from './mo30/addmo30/addmo30.component';
import { Addmo60Component } from './mo60/addmo60/addmo60.component';
import { Addmo90Component } from './mo90/addmo90/addmo90.component';
import { Addmo120Component } from './mo120/addmo120/addmo120.component';



const routes: Routes = [
   
  {
    path: '',
    data: {
      title: 'Structure'
    }
  },
  { path: 'mo15', component: Mo15Component, data:{title:"Mo15"}},
  {path:'mo15/addmo15',component:Addmo15Component, data:{title:"Mo15/addmo15"}},
  {path:'mo15/editmo15/:id',component:Editmo15Component, data:{title:"Mo15/editmo15"}},
  { path: 'mo30', component: Mo30Component, data:{title:"Mo30"}},
  {path:'mo30/addmo30',component:Addmo30Component, data:{title:"Mo30/addmo30"}},
  {path:'mo30/editmo30/:id',component:Editmo30Component, data:{title:"Mo30/editmo30"}},
  { path: 'mo60', component: Mo60Component, data:{title:"Mo60"}},
  {path:'mo60/addmo60',component:Addmo60Component, data:{title:"Mo60/addmo60"}},
  {path:'mo60/editmo60/:id',component:Editmo60Component, data:{title:"Mo60/editmo60"}},
  { path: 'mo90', component: Mo90Component, data:{title:"Mo90"}},
  {path:'mo90/addmo90',component:Addmo90Component, data:{title:"Mo90/addmo90"}},
  {path:'mo90/editmo90/:id',component:Editmo90Component, data:{title:"Mo90/editmo90"}},
  { path: 'mo120', component: Mo120Component, data:{title:"Mo120"}},
  {path:'mo120/addmo120',component:Addmo120Component, data:{title:"Mo120/addmo120"}},
  {path:'mo120/editmo120/:id',component:Editmo120Component, data:{title:"Mo120/editmo120"}},
  
]
          
  


@NgModule({
    imports: [RouterModule.forChild(routes),FormsModule,ReactiveFormsModule],
    exports: [RouterModule]
  })
  export class StructureRoutingModule {}