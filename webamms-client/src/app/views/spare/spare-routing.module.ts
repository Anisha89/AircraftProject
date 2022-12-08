import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpareComponent } from './spare.component';
import {EditspareComponent} from './editspare/editspare.component';
import {AddspareComponent} from './addspare/addspare.component';


const routes: Routes = [
  {
    path: '',
    component: SpareComponent,
    data: {
      title: 'Spare'
    }
},
    {path:'editspare',component:EditspareComponent,
        data: {title: 'EditSpare'}
      }, 
      
      {path:'editspare/:id',component:EditspareComponent,
      data: {title: 'EditSpare'}
    },
      {path:'addspare',component:AddspareComponent,
      data: {title: 'AddSpare'}
    }, 

     
    
   
];

@NgModule({
  imports: [RouterModule.forChild(routes),FormsModule,ReactiveFormsModule],
  exports: [RouterModule]
})
export class SpareRoutingModule {}