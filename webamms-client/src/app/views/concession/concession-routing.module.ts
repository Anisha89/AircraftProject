import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConcessionComponent } from './concession.component';
import { ConcessionformComponent } from './concessionform/concessionform.component';
import { UpdateconcessionComponent } from './updateconcession/updateconcession.component';
 



const routes: Routes = [ {
  path: '',
  component: ConcessionComponent,
  data: {
    title: 'Concession',
    Text:'bold'
  }
},
{
path:'create',
component:ConcessionformComponent,
data: {title: 'Create'}
},

  {
    path:'update/:id',
    component:UpdateconcessionComponent,
    data: {title: 'Update'}
    },
 

    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConcessionRoutingModule {}
