import { NgModule } from '@angular/core';

import { AircraftRoutingModule } from './aircraft-routing.module';
import { AircraftComponent } from './aircraft.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AircraftService } from '../../service/aircraft.service';
import { SortieService } from '../../service/sortie.service';
import { UpdateAircraftDetailsComponent } from './update-aircraft-details/update-aircraft-details.component';
import { CreateAircraftDetailsComponent } from './create-aircraft-details/create-aircraft-details.component';
@NgModule({
  imports: [
    AircraftRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule  ],
  declarations: [AircraftComponent, UpdateAircraftDetailsComponent, CreateAircraftDetailsComponent],
  providers:[AircraftService,SortieService],
  entryComponents:[UpdateAircraftDetailsComponent,CreateAircraftDetailsComponent]

  
})
export class AircraftModule { }

