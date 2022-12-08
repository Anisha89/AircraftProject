import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users.component';
import {EdituserComponent} from './edituser/edituser.component';
import {AdduserComponent} from './adduser/adduser.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {PicuploadComponent} from './picupload/picupload.component';

//import { SettingsComponent } from '../settings/settings.component';

const routes: Routes = [
    {
     path: '',
    component: UsersComponent,
    data: {
      title: 'Users'
          }
        },  
        
    {path:'edituser',component:EdituserComponent,
        data: {title: 'Edituser'}
      }, 
      
      {path:'edituser/:id',component:EdituserComponent,
      data: {title: 'Edituser'}
    },
      {path:'adduser',component:AdduserComponent,
      data: {title: 'Adduser'}
    }, 

    {path:'picupload',component:PicuploadComponent,
      data: {title: 'Picupload'}
    }, 
    {path:'picupload/:id',component:PicuploadComponent,
      data: {title: 'Picupload'}
    }, 
    
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes),FormsModule,ReactiveFormsModule],
  exports: [RouterModule]
})
export class UsersRoutingModule {}