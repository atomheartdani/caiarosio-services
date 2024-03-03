import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@app/@shared';
import { MaterialModule } from '@app/material.module';
import { TripDetailComponent } from './trip-detail/trip-detail.component';
import { TripListComponent } from './trip-list/trip-list.component';
import { TripNewComponent } from './trip-new/trip-new.component';
import { TripsRoutingModule } from './trips-routing.module';

@NgModule({
  declarations: [TripDetailComponent, TripListComponent, TripNewComponent],
  imports: [CommonModule, FormsModule, TripsRoutingModule, MaterialModule, ReactiveFormsModule, SharedModule],
})
export class TripsModule {}
