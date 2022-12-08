import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddtoolsComponent } from './addtools/addtools.component';
import { EdittoolsComponent } from './edittools/edittools.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToolsComponent} from './tools.component'

const routes: Routes = [
  {
    path: '',
    component: ToolsComponent,
    data: {
      title: 'Tools'
    }
},
{
  path:'addtools',
  component:AddtoolsComponent,
  data: {title: 'AddTools',
       
}
},
{
  path:'edittools',
  component:EdittoolsComponent,
  data:{title:'Edittools'}
},
{
  path:'edittools/:id',
  component:EdittoolsComponent,
  data:{title:'Edittools'}
}

];

@NgModule({
  imports: [RouterModule.forChild(routes),FormsModule,ReactiveFormsModule],
  exports: [RouterModule]
})
export class ToolsRoutingModule {}