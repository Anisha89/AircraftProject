import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddconsumableComponent } from './addconsumable/addconsumable.component';
import { EditconsumableComponent } from './editconsumable/editconsumable.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConsumableComponent} from './consumable.component'

const routes: Routes = [
  {
    path: '',
    component: ConsumableComponent,
    data: {
      title: 'Consumable'
    }
},
{
  path:'addconsumable',
  component:AddconsumableComponent,
  data: {title: 'Addconsumable'}
},
{
  path:'editconsumable',
  component:EditconsumableComponent,
  data:{title:'Editconsumable'}
},
{
  path:'editconsumable/:id',
  component:EditconsumableComponent,
  data:{title:'Editconsumable'}
}

];

@NgModule({
  imports: [RouterModule.forChild(routes),FormsModule,ReactiveFormsModule],
  exports: [RouterModule]
})
export class ConsumableRoutingModule {}