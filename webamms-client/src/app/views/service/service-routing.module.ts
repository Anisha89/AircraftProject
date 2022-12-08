import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceComponent } from './service.component';
import {EditserviceComponent} from './editservice/editservice.component';
import {AddserviceComponent} from './addservice/addservice.component';
import { GenerateComponent } from './generate/generate.component';

const routes: Routes = [
    {
      path: '',
      component: ServiceComponent,
      data: {
        title: 'OOPS'
      }
  },
   {path:'editservice',component:EditserviceComponent,
        data: {title: 'Editservice'}
      }, 
      
      {path:'editservice/:id',component:EditserviceComponent,
      data: {title: 'Editservice'}
    },
      {path:'addservice',component:AddserviceComponent,
      data: {title: 'Addservice'}
    }, 
    {path:'generate',component:GenerateComponent,
    data: {title: 'Generate service'}
  }, 
];
@NgModule({
    imports: [RouterModule.forChild(routes),FormsModule,ReactiveFormsModule],
    exports: [RouterModule]
  })
  export class ServiceRoutingModule {}