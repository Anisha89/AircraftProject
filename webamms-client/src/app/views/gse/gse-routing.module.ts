import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GseComponent } from './gse.component';
import {EditgseComponent} from './editgse/editgse.component';
import {AddgseComponent} from './addgse/addgse.component';


const routes: Routes = [
  {
    path: '',
    component: GseComponent,
    data: {
      title: 'GSE'
    }
},
    {path:'editgse',component:EditgseComponent,
        data: {title: 'Edigse'}
      }, 
      
      {path:'editgse/:id',component:EditgseComponent,
      data: {title: 'Editgse'}
    },
      {path:'addgse',component:AddgseComponent,
      data: {title: 'Addgse'}
    }, 

    
   
];

@NgModule({
  imports: [RouterModule.forChild(routes),FormsModule,ReactiveFormsModule],
  exports: [RouterModule]
})
export class GseRoutingModule {}
