import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TripDetailComponent } from './trip-detail/trip-detail.component';
import { TripListComponent } from './trip-list/trip-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: TripListComponent,
      },
      {
        path: 'trips/:id',
        component: TripDetailComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class TripsRoutingModule {}
