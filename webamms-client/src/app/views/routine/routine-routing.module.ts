import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RoutineComponent } from './routine.component';
import { Days14Component } from './days14/days14.component';
import { Mo1Component } from './mo1/mo1.component';
import { Mo3Component } from './mo3/mo3.component';
import { AdddaysComponent } from './days14/adddays/adddays.component';
import { EditdaysComponent } from './days14/editdays/editdays.component';
import { Addmo1Component } from './mo1/addmo1/addmo1.component';
import { Editmo1Component } from './mo1/editmo1/editmo1.component';
import { Addmo3Component } from './mo3/addmo3/addmo3.component';
import { Editmo3Component } from './mo3/editmo3/editmo3.component';



const routes: Routes = [
   
  {
    path: '',
    data: {
      title: 'routine'
    }
  },
 
  { path: 'days14', component: Days14Component , 
  data: {
    title: 'Days14'
  }} ,
  {path:'days14/adddays',component:AdddaysComponent, data: {
    title: 'Days14/adddays'
  }


},
  {path:'days14/editdays/:id',component:EditdaysComponent,
  data: {
    title: 'Days14/editdays'
  }
},
 

{ path: 'mo1',  component: Mo1Component ,

data: {
  title: 'Mo1'
}


},

{path:'mo1/addmo1',component:Addmo1Component  ,
data: {
  title: 'Mo1/addmo1'
}
},
{path:'mo1/editmo1/:id',component:Editmo1Component,
data: {
  title: 'Mo1/editmo1'
}
},
{  path: 'mo3',   component: Mo3Component,
 
data: {
  title: 'Mo3'
}

},
{path:'mo3/addmo3',component:Addmo3Component
, data: {
  title: 'Mo3/addmo3'
}
},
{path:'mo3/editmo3/:id',component:Editmo3Component,
data: {
  title: 'Mo3/editmo3'
}
},

  
]
          
  


@NgModule({
    imports: [RouterModule.forChild(routes),FormsModule,ReactiveFormsModule],
    exports: [RouterModule]
  })
  export class RoutineRoutingModule {}