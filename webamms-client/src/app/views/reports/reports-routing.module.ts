import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReportsComponent } from './reports.component';

const routes: Routes = [
    {
      path: '',
      component:ReportsComponent,
      data: {
        title: 'Reports'
      }
  },
  
 
];
@NgModule({
    imports: [RouterModule.forChild(routes),FormsModule,ReactiveFormsModule],
    exports: [RouterModule]
  })
  export class ReportsRoutingModule {}