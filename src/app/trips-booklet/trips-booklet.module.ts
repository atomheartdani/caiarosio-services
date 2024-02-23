import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@app/@shared';
import { MaterialModule } from '@app/material.module';
import { TripSelectorComponent } from './trip-selector/trip-selector.component';
import { TripsBookletRoutingModule } from './trips-booklet-routing.module';
import { YearSelectorComponent } from './year-selector/year-selector.component';

@NgModule({
  declarations: [YearSelectorComponent, TripSelectorComponent],
  imports: [CommonModule, TripsBookletRoutingModule, MaterialModule, SharedModule],
})
export class TripsBookletModule {}
