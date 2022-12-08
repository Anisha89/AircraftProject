
 import { NgModule } from '@angular/core';
 import { Routes, RouterModule } from '@angular/router';
 
 import {AircraftComponent} from '../aircraft/aircraft.component';
 import { CreateAircraftDetailsComponent } from './create-aircraft-details/create-aircraft-details.component';
 import { UpdateAircraftDetailsComponent } from './update-aircraft-details/update-aircraft-details.component';
 
 const routes: Routes = [
    {
      path: '',
      component: AircraftComponent,
      data: {
        title: 'Status',
        color:'black',
      
      }
  },
  {
    path:'update/:id',
    component:UpdateAircraftDetailsComponent,
    data: {title: 'Update'}
  },
  {
    path:'create',
    component:CreateAircraftDetailsComponent,
    data: {title: 'Create'}
  },
  
  ];
  
     
 
 
 @NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
 })
 export class AircraftRoutingModule {}
 