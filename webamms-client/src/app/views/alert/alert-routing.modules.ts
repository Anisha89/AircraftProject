import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertComponent } from './alert.component';

const routes: Routes = [
    {
      path: '',
      component: AlertComponent,
      data: {
        title: 'Alert'
      }
  }
];
@NgModule({
    imports: [RouterModule.forChild(routes),FormsModule,ReactiveFormsModule],
    exports: [RouterModule]
  })
  export class AlertRoutingModule {}