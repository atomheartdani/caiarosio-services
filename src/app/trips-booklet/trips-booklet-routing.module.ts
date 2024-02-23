import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TripSelectorComponent } from './trip-selector/trip-selector.component';
import { YearSelectorComponent } from './year-selector/year-selector.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: YearSelectorComponent,
      },
      {
        path: 'tripsbooklet/:year',
        component: TripSelectorComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class TripsBookletRoutingModule {}
