import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YearSelectorComponent } from './year-selector/year-selector.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: YearSelectorComponent,
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
