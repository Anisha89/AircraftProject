import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScheduleComponent } from './schedule.component';
import { EditscheduleComponent } from './editschedule/editschedule.component';
import { AddscheduleComponent} from './addschedule/addschedule.component'
const routes: Routes = [
    {
      path: '',
      component: ScheduleComponent,
      data: {
        title: 'Schedule',
      
      }
  },
  {
    path:'editschedule',
    component:EditscheduleComponent,
    data:{title:'EditSchedule'},

  },
  {
    path:'editschedule/:id',
    component:EditscheduleComponent,
    data:{title:'Edit Schedule'}
  },
  {
    path:'addschedule',
    component:AddscheduleComponent,
    data:{title:'Add Schedule'}
  }
];
@NgModule({
    imports: [RouterModule.forChild(routes),FormsModule,ReactiveFormsModule],
    exports: [RouterModule]
  })
  export class ScheduleRoutingModule {}