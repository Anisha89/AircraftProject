import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ServicehistoryComponent} from './servicehistory.component';
import { EditservicehistoryComponent } from './editservicehistory/editservicehistory.component';

const routes: Routes = [
    {
      path: '',
      component: ServicehistoryComponent,
      data: {
        title: 'Servicehistory'
      }
    },
    {
      path: '',
      component: EditservicehistoryComponent,
      data: {
        title: 'Editservicehistory'
      }
      },
      {
        path:'editservicehistory/:id',
        component:EditservicehistoryComponent,
        data:{title:'Editservicehistory'}
     
    }
    ];
    @NgModule({
        imports: [RouterModule.forChild(routes),FormsModule,ReactiveFormsModule],
        exports: [RouterModule]
      })
      export class ServicehistoryRoutingModule {}